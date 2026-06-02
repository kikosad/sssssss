import React, { useState } from 'react';
import { 
  FileText, Sparkles, CheckCircle2, Circle, Clock, ChevronDown, ChevronUp, 
  ExternalLink, Award, RefreshCw, Send, Check, BookOpen, Search, Info 
} from 'lucide-react';
import { lessonsData } from '../data/lessonsData';
import { Draft } from '../types';

interface PortfolioViewProps {
  drafts: Draft[];
  onSaveDraft: (lessonId: number | 'final' | 'free', content: string, feedback: string | null) => void;
  onToggleComplete: (lessonId: number) => void;
  onGoToLesson: (lessonId: number) => void;
}

export default function PortfolioView({
  drafts,
  onSaveDraft,
  onToggleComplete,
  onGoToLesson
}: PortfolioViewProps) {
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  
  // Final Project Workspace States
  const finalDraft = drafts.find(d => d.lessonId === 'final') || null;
  const [finalContent, setFinalContent] = useState(finalDraft?.content || '');
  const [isGeneratingFinal, setIsGeneratingFinal] = useState(false);
  const [finalError, setFinalError] = useState<string | null>(null);
  const [finalSaveSuccess, setFinalSaveSuccess] = useState(false);

  React.useEffect(() => {
    if (finalDraft) {
      setFinalContent(finalDraft.content);
    }
  }, [finalDraft]);

  const handleSaveFinalLocal = () => {
    onSaveDraft('final', finalContent, finalDraft?.feedback || null);
    setFinalSaveSuccess(true);
    setTimeout(() => setFinalSaveSuccess(false), 2000);
  };

  const handleRequestFinalReview = async () => {
    if (!finalContent.trim()) {
      setFinalError('El manuscrito del Proyecto Final está vacío. Redacta tu obra maestra antes de enviarla a revisión.');
      return;
    }

    setIsGeneratingFinal(true);
    setFinalError(null);

    try {
      const response = await fetch('/api/gemini/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Proyecto Final de Graduación: El Relato Esférico',
          exerciseDescription: 'Análisis detallado de graduación para un cuento terminado y pulido. Evalúa estructura poética, concisión de oraciones, deconstrucción lírica, amueblamiento de escenas con objetos dinámicos y esfericidad.',
          content: finalContent
        })
      });

      if (!response.ok) {
        throw new Error('No se pudo establecer comunicación con el Instructor. Reintente en un momento.');
      }

      const data = await response.json();
      onSaveDraft('final', finalContent, data.feedback);
    } catch (err: any) {
      setFinalError(err.message || 'Error de conexión con el tribunal literario.');
    } finally {
      setIsGeneratingFinal(false);
    }
  };

  // Compile statistics
  const totalHomework = 15;
  const completedDraftsCount = drafts.filter(d => typeof d.lessonId === 'number' && d.isCompleted).length;
  const totalCritiques = drafts.filter(d => d.feedback).length;
  const pendingHomeworkCount = totalHomework - completedDraftsCount;

  // Filter lessons
  const filteredLessons = lessonsData.filter(lesson => {
    const draft = drafts.find(d => d.lessonId === lesson.id);
    const isCompleted = draft?.isCompleted || false;
    
    const matchesFilter = 
      filter === 'all' ? true :
      filter === 'completed' ? isCompleted :
      !isCompleted;

    const matchesSearch = 
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-12 fade-in-up">
      {/* Header and statistics panel */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between pb-6 border-b border-slate-100">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-500" /> Expediente Universitario
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-950">
            Portfolio de Entregas y Tareas
          </h2>
          <p className="text-slate-500 font-sans font-light leading-relaxed text-sm max-w-xl">
            Sigue, gestiona y perfecciona todas tus misiones literarias. Accede de forma directa a tus borradores históricos y solicita críticas detalladas de tus consignas.
          </p>
        </div>

        {/* Dashboard KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 shrink-0">
          <div className="bg-white border border-slate-100 p-4 rounded-xl text-center shadow-xs">
            <span className="block text-[10px] font-mono text-slate-400 uppercase">Aprobadas</span>
            <span className="text-xl font-serif font-bold text-slate-900">{completedDraftsCount} / {totalHomework}</span>
          </div>

          <div className="bg-white border border-slate-100 p-4 rounded-xl text-center shadow-xs">
            <span className="block text-[10px] font-mono text-slate-400 uppercase">Sin Entregar</span>
            <span className="text-xl font-serif font-bold text-amber-600">{pendingHomeworkCount}</span>
          </div>

          <div className="bg-white border border-slate-100 p-4 rounded-xl text-center shadow-xs col-span-2 md:col-span-1">
            <span className="block text-[10px] font-mono text-slate-400 uppercase">Consejos IA</span>
            <span className="text-xl font-serif font-bold text-indigo-600">{totalCritiques}</span>
          </div>
        </div>
      </div>

      {/* TABS Y WORKSPACE DE TAREAS */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200/50">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition cursor-pointer ${
                filter === 'all' 
                  ? 'bg-white text-slate-950 shadow-xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Todas ({totalHomework})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition cursor-pointer ${
                filter === 'completed' 
                  ? 'bg-emerald-500 text-white shadow-xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Completadas ({completedDraftsCount})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition cursor-pointer ${
                filter === 'pending' 
                  ? 'bg-amber-500 text-slate-950 shadow-xs' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Pendientes ({pendingHomeworkCount})
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar consigna..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 pl-9 pr-4 py-2 rounded-xl text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Task list container */}
        <div className="space-y-4">
          {filteredLessons.length === 0 ? (
            <div className="bg-slate-50 rounded-2xl p-12 border border-slate-150 text-center space-y-3">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <h4 className="font-serif font-bold text-slate-800">No se encontraron consignas</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                No hay misiones que correspondan con tu búsqueda actual o tus filtros seleccionados. Práctica redactando desde las lecciones individuales.
              </p>
            </div>
          ) : (
            filteredLessons.map(lesson => {
              const draft = drafts.find(d => d.lessonId === lesson.id);
              const isCompleted = draft?.isCompleted || false;
              const hasCritique = draft?.feedback ? true : false;
              const wordCount = draft?.content ? draft.content.trim().split(/\s+/).filter(Boolean).length : 0;
              const isExpanded = expandedLesson === lesson.id;

              return (
                <div 
                  key={lesson.id} 
                  id={`portfolio-item-${lesson.id}`}
                  className={`bg-white border rounded-2xl transition shadow-xs overflow-hidden ${
                    isCompleted 
                      ? 'border-emerald-250 bg-emerald-50/5' 
                      : 'border-slate-150 hover:border-slate-200'
                  }`}
                >
                  <div 
                    onClick={() => setExpandedLesson(isExpanded ? null : lesson.id)}
                    className="p-5 flex flex-wrap items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                  >
                    <div className="flex items-center gap-4">
                      {/* Check toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleComplete(lesson.id);
                        }}
                        id={`btn-portfolio-toggle-${lesson.id}`}
                        className={`p-1.5 rounded-full transition shrink-0 ${
                          isCompleted 
                            ? 'text-emerald-600 bg-emerald-50' 
                            : 'text-slate-300 hover:text-amber-500 bg-slate-50'
                        }`}
                        title={isCompleted ? "Marcar como pendiente" : "Marcar como completada"}
                      >
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                      </button>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider">clase {lesson.id}</span>
                          {wordCount > 0 && (
                            <span className="text-[9px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                              {wordCount} palabras
                            </span>
                          )}
                          {hasCritique && (
                            <span className="text-[9px] font-mono bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md font-semibold border border-amber-100">
                              ★ Evaluada
                            </span>
                          )}
                        </div>
                        <h4 className="font-serif font-bold text-slate-900 text-md leading-snug group-hover:text-amber-600 transition">
                          {lesson.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-sans font-light line-clamp-1">{lesson.summary}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onGoToLesson(lesson.id);
                        }}
                        id={`btn-portfolio-go-${lesson.id}`}
                        className="p-2 text-slate-400 hover:text-amber-500 transition hover:bg-amber-50 rounded-xl flex items-center gap-1.5 text-xs font-mono"
                        title="Ir a Estudiar"
                      >
                        <span className="hidden sm:inline">Ver Teoría</span> <ExternalLink className="w-3.5 h-3.5" />
                      </button>

                      {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </div>
                  </div>

                  {/* Expansion pane */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-50 bg-slate-50/50 space-y-6">
                      {/* Exercise reference details */}
                      <div className="bg-slate-950 text-slate-100 p-4 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold block">Consigna de Taller</span>
                        <p className="text-xs text-slate-300 font-light leading-relaxed">{lesson.exerciseDescription}</p>
                        <p className="text-xs text-amber-100 italic font-serif">"{lesson.exercisePrompt}"</p>
                      </div>

                      {/* Content editor workspace */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-slate-400 font-medium block">Tu Manuscrito Guardado:</label>
                        {draft?.content ? (
                          <div className="bg-white border border-slate-200 rounded-xl p-5 font-sans text-sm text-slate-800 leading-relaxed max-h-[300px] overflow-y-auto whitespace-pre-wrap shadow-xs">
                            {draft.content}
                          </div>
                        ) : (
                          <div className="bg-slate-100 rounded-xl p-6 text-center text-xs text-slate-500 font-sans font-light border border-dashed border-slate-300">
                            No has escrito ningún borrador para esta consigna aún. Haz clic en "Ver Teoría" para abrir los apuntes pedagógicos e iniciar tu escritura.
                          </div>
                        )}
                      </div>

                      {/* AI crititque viewer */}
                      {draft?.feedback && (
                        <div className="bg-amber-50/60 rounded-xl p-5 border border-amber-150 space-y-3 shadow-xs">
                          <h4 className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider flex items-center gap-1.5 border-b border-amber-100 pb-2">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Retroalimentación Científica del Instructor
                          </h4>
                          <div className="text-xs text-slate-700 space-y-3 leading-relaxed font-sans font-light max-h-[250px] overflow-y-auto pr-2">
                            {draft.feedback.split('\n').map((line, key) => {
                              if (line.startsWith('###') || line.startsWith('####')) {
                                return (
                                  <h5 key={key} className="font-serif font-bold text-slate-900 text-xs mt-3 border-b border-amber-100/40 pb-0.5">
                                    {line.replace(/[#*]/g, '').trim()}
                                  </h5>
                                );
                              }
                              if (line.startsWith('*') || line.startsWith('-')) {
                                return (
                                  <p key={key} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-amber-500 font-light">
                                    {line.replace(/^[*-\s]+/, '').replace(/[*_]/g, '')}
                                  </p>
                                );
                              }
                              return line.trim() ? (
                                <p key={key} className="font-sans">
                                  {line.replace(/[*_]/g, '')}
                                </p>
                              ) : (
                                <div key={key} className="h-1" />
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* GRADUATION FINAL PROJECT SECTOR */}
      <section className="bg-radial from-indigo-950 via-slate-950 to-slate-950 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-slate-800 shadow-xl space-y-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest font-semibold text-indigo-400 bg-indigo-950/80 border border-indigo-800 px-3 py-1 rounded-md uppercase">
              Misión de Graduación de Taller
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
              Trabajo de Fin de Grado: El Relato Esférico
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Ha llegado el momento de graduarte de la Escuela de Escritores. Pon a prueba todo lo aprendido reuniendo la musicalidad de la oración, el amueblamiento dinámico, el narrador coherente y la elipsis calculada para fabricar tu propio cuento definitivo, esférico, donde ninguna palabra sobre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
            <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl space-y-1.5">
              <span className="block text-[10px] font-mono text-indigo-300 uppercase">Estructura Exigida:</span>
              <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                Trama cerrada de máximo 1,500 palabras. Debe contar con un objeto aglutinador (un hilo conductor simbólico) y un quiebro epistémico gradual en el entendimiento del narrador.
              </p>
            </div>
            
            <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl space-y-1.5">
              <span className="block text-[10px] font-mono text-indigo-300 uppercase">Prosa de Calidad:</span>
              <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                Libre de verborrea asertiva y formalismo artificial. Prioriza verbos cinéticos frente a adjetivos descriptores perezosos. Respeta las transiciones líricas sutiles.
              </p>
            </div>
          </div>

          {/* Editor workspace */}
          <div className="space-y-4">
            <label className="text-xs font-mono text-slate-400 font-medium block">Cuaderno de Manuscrito Final:</label>
            <textarea
              value={finalContent}
              onChange={(e) => setFinalContent(e.target.value)}
              placeholder="Escribe aquí tu relato de graduación con calma... Este espacio está diseñado para soportar borradores extensos..."
              className="w-full min-h-[300px] p-5 text-sm bg-slate-900 rounded-2xl border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans leading-relaxed text-slate-100"
            />

            {finalError && (
              <div className="text-xs bg-red-950/80 text-red-300 p-3 rounded-xl border border-red-900/50 font-medium">
                {finalError}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <button
                onClick={handleSaveFinalLocal}
                id="btn-save-final-draft"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-300 text-xs font-mono font-medium border border-slate-800 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              >
                {finalSaveSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" /> ¡Guardado con Éxito!
                  </>
                ) : (
                  'Guardar Proyecto'
                )}
              </button>

              <button
                onClick={handleRequestFinalReview}
                disabled={isGeneratingFinal}
                id="btn-final-ai-review"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-slate-50 text-xs font-mono font-medium rounded-xl transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isGeneratingFinal ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Evaluando manuscritura final...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" /> Solicitar Dictamen de Graduación
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Project critique verdict display */}
          {finalDraft?.feedback && (
            <div className="bg-indigo-950/80 border border-indigo-905 p-6 rounded-2xl shadow-inner space-y-4">
              <div className="flex items-center gap-2.5 border-b border-indigo-800/40 pb-3">
                <Sparkles className="text-amber-300 w-5 h-5 shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-sm font-serif font-semibold text-white">Dictamen Académico de la Comisión Virtual</h4>
                  <p className="text-[10px] font-mono text-indigo-300 tracking-wider">EVALUACIÓN DE GRADO PREMIUM</p>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-3 leading-relaxed font-sans font-light">
                {finalDraft.feedback.split('\n').map((line, key) => {
                  if (line.startsWith('###') || line.startsWith('####')) {
                    return (
                      <h4 key={key} className="font-serif font-bold text-slate-100 text-sm mt-4 border-b border-indigo-805 pb-1">
                        {line.replace(/[#*]/g, '').trim()}
                      </h4>
                    );
                  }
                  if (line.startsWith('*') || line.startsWith('-')) {
                    return (
                      <p key={key} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-amber-400 font-light">
                        {line.replace(/^[*-\s]+/, '').replace(/[*_]/g, '')}
                      </p>
                    );
                  }
                  return line.trim() ? (
                    <p key={key} className="font-sans">
                      {line.replace(/[*_]/g, '')}
                    </p>
                  ) : (
                    <div key={key} className="h-1" />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
