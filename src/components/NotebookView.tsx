import React, { useState } from 'react';
import { PenTool, Sparkles, RefreshCw, Check, Library } from 'lucide-react';
import { Draft } from '../types';

interface NotebookViewProps {
  freeDraft: Draft | null;
  onSaveFreeDraft: (content: string, feedback: string | null) => void;
}

export default function NotebookView({
  freeDraft,
  onSaveFreeDraft
}: NotebookViewProps) {
  const [content, setContent] = useState<string>(freeDraft?.content || '');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  React.useEffect(() => {
    if (freeDraft) {
      setContent(freeDraft.content);
    }
  }, [freeDraft]);

  const handleManualSave = () => {
    onSaveFreeDraft(content, freeDraft?.feedback || null);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  const handleRequestReview = async () => {
    if (!content.trim()) {
      setErrorMsg('Tu cuaderno está vacío. Escribe algunas líneas o un borrador libre antes de solicitar la revisión.');
      return;
    }

    setIsGenerating(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/gemini/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Escritura Libre y Fluida',
          exerciseDescription: 'El estudiante explora ideas espontáneas sin un tema restrictivo en su cuaderno de notas general.',
          content: content
        })
      });

      if (!response.ok) {
        throw new Error('Ocurrió un error al obtener retroalimentación.');
      }

      const data = await response.json();
      onSaveFreeDraft(content, data.feedback);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error al conectar con el servidor.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start fade-in-up">
      {/* Input area */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider">
            <PenTool className="w-3.5 h-3.5" /> Bitácora de Ideas
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
            Cuaderno Creativo Libre
          </h2>
          <p className="text-slate-500 font-sans font-light text-sm">
            Escribe ideas espontáneas, resúmenes preliminares, o esboza tu Proyecto Final. El Instructor Literario IA analizará tu prosa basándose en la naturalidad, claridad y visibilidad técnica.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4 shadow-xs">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escribe libremente... No te preocupes por la perfección técnica inicial; enfócate en encender la locura del primer borrador..."
            className="w-full min-h-[350px] p-5 text-sm bg-slate-50 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 font-sans leading-relaxed text-slate-800"
          />

          {errorMsg && (
            <div className="text-xs bg-red-50 text-red-600 p-3 rounded-xl border border-red-100 font-medium">
              {errorMsg}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <button
              onClick={handleManualSave}
              id="btn-save-free-notes"
              className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-mono font-medium border border-slate-200 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" /> ¡Guardado en Local!
                </>
              ) : (
                'Guardar Cuaderno'
              )}
            </button>

            <button
              onClick={handleRequestReview}
              disabled={isGenerating}
              id="btn-notebook-ai-review"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 text-xs font-mono font-medium rounded-xl transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Evaluando prosa libre...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400" /> Solicitar Revisión Libre
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* AI Pedagogical Review side */}
      <div className="space-y-6">
        <div className="bg-slate-50 border border-slate-150 p-6 rounded-3xl min-h-[300px] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200/50 pb-4">
              <Library className="text-amber-500 w-6 h-6 shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-md">Perspectiva Crítica del Instructor IA</h3>
                <p className="text-[10px] font-mono text-slate-400 tracking-wide font-medium">ANÁLISIS COGNITIVO INTEGRADO</p>
              </div>
            </div>

            {freeDraft?.feedback ? (
              <div className="text-xs text-slate-600 space-y-3 leading-relaxed font-sans font-light">
                {freeDraft.feedback.split('\n').map((line, key) => {
                  if (line.startsWith('###') || line.startsWith('####')) {
                    return (
                      <h4 key={key} className="font-serif font-bold text-slate-900 text-sm mt-4 border-b border-slate-100 pb-1">
                        {line.replace(/[#*]/g, '').trim()}
                      </h4>
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
            ) : (
              <div className="py-12 text-center space-y-3">
                <Sparkles className="w-8 h-8 text-slate-300 mx-auto animate-pulse" />
                <p className="text-xs text-slate-400 font-sans font-light max-w-xs mx-auto">
                  Consigue retroalimentación para tu prosa libre. Tu instructor virtual analizará tu borrador libre en busca de vicios y virtudes estilísticas.
                </p>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-slate-200/40 text-[10px] font-mono text-slate-400">
            Consejo: Escribe al menos 200 palabras para un análisis profundo de la estructura.
          </div>
        </div>
      </div>
    </div>
  );
}
