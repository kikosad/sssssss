import React, { useState } from 'react';
import { 
  ChevronRight, BookOpen, Clock, Play, ArrowLeft, Send, Sparkles, Check, RefreshCw, FileEdit, GraduationCap 
} from 'lucide-react';
import { Lesson, Module, Draft } from '../types';
import { lessonsData, modulesData } from '../data/lessonsData';

interface LessonsViewProps {
  drafts: Draft[];
  onSaveDraft: (lessonId: number | 'final' | 'free', content: string, feedback: string | null) => void;
  onToggleComplete: (lessonId: number) => void;
}

export default function LessonsView({
  drafts,
  onSaveDraft,
  onToggleComplete
}: LessonsViewProps) {
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  const [userSubmission, setUserSubmission] = useState<string>('');
  const [isGeneratingFeedback, setIsGeneratingFeedback] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Retrieve current active lesson details
  const activeLesson = selectedLessonId ? lessonsData.find(l => l.id === selectedLessonId) : null;
  const activeDraft = selectedLessonId ? drafts.find(d => d.lessonId === selectedLessonId) : null;

  // Track the custom submission text when entering a new lesson
  React.useEffect(() => {
    if (activeDraft) {
      setUserSubmission(activeDraft.content);
    } else {
      setUserSubmission('');
    }
    setErrorMsg(null);
  }, [selectedLessonId, activeDraft]);

  // Request pedagogical review from the server using the Google GenAI SDK endpoint
  const handleRequestFeedback = async () => {
    if (!activeLesson) return;
    if (!userSubmission.trim()) {
      setErrorMsg('Escribe un texto o borrador en el cuaderno para poder evaluar tu prosa.');
      return;
    }

    setIsGeneratingFeedback(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/gemini/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: activeLesson.title,
          exerciseDescription: activeLesson.exerciseDescription,
          content: userSubmission
        })
      });

      if (!response.ok) {
        throw new Error('No se pudo obtener retroalimentación del servidor.');
      }

      const data = await response.json();
      onSaveDraft(activeLesson.id, userSubmission, data.feedback);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error desconocido al solicitar retroalimentación.');
    } finally {
      setIsGeneratingFeedback(false);
    }
  };

  // Switch between list of modules and detailed lesson view
  if (selectedLessonId && activeLesson) {
    const activeModule = modulesData.find(m => m.lessonIds.includes(activeLesson.id));
    const isCompleted = activeDraft?.isCompleted || false;

    return (
      <div className="space-y-8 fade-in-up">
        {/* Course Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <button
            onClick={() => setSelectedLessonId(null)}
            id="btn-back-to-lessons-list"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-mono transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Volver a Lecciones
          </button>
          
          <div className="text-right">
            <span className="text-[10px] font-mono uppercase bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md border border-amber-100 font-semibold tracking-wider mr-2">
              Lección {activeLesson.id} de 15
            </span>
            <span className="text-xs font-mono text-slate-400">
              {activeModule?.title.split(':')[0]}
            </span>
          </div>
        </div>

        {/* Modular Grid Layout: Left is Theory, Right is Workbook Exercise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: Complete theory and authors' examples */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                {activeLesson.title}
              </h1>
              <p className="text-sm font-sans text-amber-600 italic">
                {activeLesson.subtitle}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-300" /> Lectura estimada: ~{activeLesson.duration}
              </div>
            </div>

            {/* Render full premium pedagogical details */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4 shadow-xs">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">Fundamento Pedagógico</h3>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-sans font-light">
                {activeLesson.theory.map((para, i) => (
                  <p key={i} className={i === 0 ? "text-slate-800 font-normal text-md" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Author examples extracted or inspired by text */}
            {activeLesson.examples.map((example, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5 border-l-4 border-amber-500 space-y-3">
                <span className="text-xs font-mono bg-white text-slate-600 px-2.5 py-1 rounded-md border border-slate-100 font-semibold uppercase">
                  {example.label}
                </span>
                <p className="text-sm text-slate-700 italic font-serif leading-relaxed">
                  "{example.text}"
                </p>
                {example.source && (
                  <span className="block text-[11px] text-slate-400 text-right font-mono font-medium">
                    — {example.source}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: Workbook, Instructions, Tasks & AI Feedback */}
          <div className="space-y-6">
            <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-2">
                <FileEdit className="text-amber-400 w-5 h-5 shrink-0" />
                <h3 className="text-md font-serif font-semibold text-slate-100">Consigna Práctica</h3>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {activeLesson.exerciseDescription}
              </p>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">Lanzador o Prompt de Arranque:</span>
                <p className="text-xs text-slate-300 italic font-serif leading-relaxed">
                  "{activeLesson.exercisePrompt}"
                </p>
              </div>

              {/* Tasks bullet list */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold block">Lista de Tareas:</span>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 font-sans font-light">
                  {activeLesson.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* TEXTBOOK INPUT AREA */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Tu Cuaderno de Escritura</span>
                
                {/* Track mark complete */}
                <button
                  onClick={() => onToggleComplete(activeLesson.id)}
                  id={`btn-complete-lesson-${activeLesson.id}`}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono border cursor-pointer transition ${
                    isCompleted 
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                      : 'bg-white text-slate-400 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3" /> : null}
                  {isCompleted ? 'Clase Completada' : 'Marcar como Leída'}
                </button>
              </div>

              <textarea
                value={userSubmission}
                onChange={(e) => setUserSubmission(e.target.value)}
                placeholder="Escribe tu relato aquí inspirándote en la consigna, prompt u objetos conductores..."
                className="w-full min-h-[180px] p-4 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-sans leading-relaxed text-slate-800"
              />

              {errorMsg && (
                <div className="text-xs bg-red-50 text-red-600 p-3 rounded-lg border border-red-100 font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <button
                  onClick={() => onSaveDraft(activeLesson.id, userSubmission, activeDraft?.feedback || null)}
                  id="btn-save-draft"
                  className="px-4 py-2 text-xs font-mono border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg transition cursor-pointer"
                >
                  Guardar Borrador en Local
                </button>

                <button
                  onClick={handleRequestFeedback}
                  disabled={isGeneratingFeedback}
                  id="btn-review-ai"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 text-xs font-mono rounded-lg transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isGeneratingFeedback ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Analizando prosa técnica...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Solicitar Revisión IA
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* AI PEDAGOGICAL COACH EVALUATION BOX */}
            {activeDraft?.feedback && (
              <div id="ai-review-container" className="bg-amber-50/70 rounded-2xl p-6 border border-amber-100 shadow-xs space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/10 rounded-full blur-2xl"></div>
                
                <div className="flex items-center gap-2 border-b border-amber-100/50 pb-3">
                  <GraduationCap className="text-amber-700 w-5.5 h-5.5" />
                  <div>
                    <h3 className="font-serif font-bold text-amber-900 text-sm">Instructor Literario</h3>
                    <p className="text-[10px] font-mono text-amber-600 tracking-wide">EVALUACIÓN METÓDICA DE TALLER</p>
                  </div>
                </div>

                <div className="text-xs text-slate-700 space-y-3 leading-relaxed font-sans font-light">
                  {/* Parse basic list block in markdown carefully */}
                  {activeDraft.feedback.split('\n').map((line, key) => {
                    if (line.startsWith('###') || line.startsWith('####')) {
                      return <h4 key={key} className="font-serif font-bold text-slate-900 text-sm mt-3 border-b border-slate-100 pb-1">{line.replace(/[#*]/g, '').trim()}</h4>;
                    }
                    if (line.startsWith('*') || line.startsWith('-')) {
                      return <p key={key} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-amber-500 font-light">{line.replace(/^[*-\s]+/, '').replace(/[*_]/g, '')}</p>;
                    }
                    return line.trim() ? <p key={key} className="font-sans">{line.replace(/[*_]/g, '')}</p> : <div key={key} className="h-1" />;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 fade-in-up">
      <div className="space-y-3 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-slate-950 flex items-center gap-3">
          <BookOpen className="text-amber-500" /> Plan del Planisferio Literario
        </h2>
        <p className="text-slate-500 font-sans font-light leading-relaxed">
          Las 15 clases magistrales de la Escuela de Escritores, organizadas paso a paso por módulos y niveles de dificultad. Selecciona una lección para comenzar tu práctica escrita.
        </p>
      </div>

      <div className="space-y-8">
        {modulesData.map((module: Module) => (
          <div key={module.id} className="space-y-4">
            <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
              <h3 className="text-lg font-serif font-bold text-slate-900">
                {module.title}
              </h3>
              <span className="text-[10px] font-mono uppercase bg-slate-100 px-2 py-0.5 rounded-md text-slate-500">
                {module.lessonIds.length} clases
              </span>
            </div>
            
            <p className="text-xs text-slate-400 font-light italic">
              {module.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {module.lessonIds.map((lessonId) => {
                const lesson = lessonsData.find(l => l.id === lessonId);
                if (!lesson) return null;
                const draft = drafts.find(d => d.lessonId === lessonId);
                const isCompleted = draft?.isCompleted || false;

                return (
                  <div
                    key={lessonId}
                    id={`lesson-card-${lessonId}`}
                    onClick={() => setSelectedLessonId(lessonId)}
                    className="group relative bg-white border border-slate-100 p-5 rounded-2xl shadow-xs transition hover:shadow-md hover:border-amber-200 cursor-pointer flex flex-col justify-between min-h-[180px]"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-400">
                          LECCIÓN {lessonId}
                        </span>
                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-[9px] font-mono">
                            <Check className="w-2.5 h-2.5" /> Completada
                          </span>
                        )}
                      </div>

                      <h4 className="font-serif font-bold text-slate-950 text-md group-hover:text-amber-600 transition leading-snug">
                        {lesson.title}
                      </h4>

                      <p className="text-xs text-slate-500 font-sans font-light line-clamp-2">
                        {lesson.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-slate-400 group-hover:text-amber-500 transition-all font-mono text-[10px]">
                      <span>{lesson.duration}</span>
                      <span className="flex items-center gap-1">
                        Estudiar <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
