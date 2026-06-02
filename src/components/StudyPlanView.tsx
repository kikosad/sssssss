import React from 'react';
import { Calendar, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';
import { studyPlan } from '../data/extrasData';
import { StudyDay } from '../types';

interface StudyPlanViewProps {
  completedDays: number[];
  onToggleDayComplete: (day: number) => void;
  onGoToLesson: (lessonId: number) => void;
}

export default function StudyPlanView({
  completedDays,
  onToggleDayComplete,
  onGoToLesson
}: StudyPlanViewProps) {
  const completedPercent = Math.round((completedDays.length / 30) * 100);

  return (
    <div className="space-y-8 fade-in-up">
      <div className="flex flex-wrap items-center justify-between gap-6 pb-4 border-b border-slate-100">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-slate-950 flex items-center gap-3">
            <Calendar className="text-amber-500" /> Plan de Estudio de 30 Días
          </h2>
          <p className="text-slate-500 font-sans font-light leading-relaxed text-sm">
            Construye hábito, disciplina y asimila las técnicas a tu propio ritmo. Aquí tienes una hoja de ruta con tareas programadas para cada día del mes.
          </p>
        </div>

        {/* Study Progress metrics */}
        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center gap-4 shrink-0">
          <div className="relative flex items-center justify-center">
            <svg className="w-16 h-16">
              <circle className="text-slate-200" strokeWidth="4" stroke="currentColor" fill="transparent" r="26" cx="32" cy="32" />
              <circle className="text-amber-500 transition-all duration-300" strokeWidth="4" strokeDasharray={2 * Math.PI * 26} strokeDashoffset={2 * Math.PI * 26 * (1 - completedPercent / 100)} strokeLinecap="round" stroke="currentColor" fill="transparent" r="26" cx="32" cy="32" />
            </svg>
            <span className="absolute text-xs font-mono font-bold text-slate-800">{completedPercent}%</span>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-slate-900 text-sm">Progreso del Mes</h4>
            <p className="text-xs text-slate-500">{completedDays.length} de 30 días completados</p>
          </div>
        </div>
      </div>

      {/* Grid containing 30 scrollable steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studyPlan.map((d: StudyDay) => {
          const isDone = completedDays.includes(d.day);

          return (
            <div
              key={d.day}
              id={`day-card-${d.day}`}
              className={`bg-white border rounded-2xl p-5 transition flex flex-col justify-between shadow-xs ${
                isDone 
                  ? 'border-emerald-200 bg-emerald-50/10' 
                  : 'border-slate-100 hover:border-amber-200'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-0.5 rounded-md ${
                    isDone 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : 'bg-slate-100 text-slate-550'
                  }`}>
                    DÍA {d.day}
                  </span>
                  
                  {/* Status checkbox button */}
                  <button
                    onClick={() => onToggleDayComplete(d.day)}
                    id={`btn-toggle-day-${d.day}`}
                    className={`p-1 rounded-lg transition-colors cursor-pointer ${
                      isDone 
                        ? 'text-emerald-600 bg-emerald-100' 
                        : 'text-slate-300 hover:text-amber-500 bg-slate-50 hover:bg-amber-50'
                    }`}
                    title={isDone ? "Marcar día como pendiente" : "Marcar día como hecho"}
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  </button>
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-slate-900 text-md leading-tight">
                    {d.task}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans font-light leading-relaxed line-clamp-3">
                    {d.activity}
                  </p>
                </div>
              </div>

              {/* Day metadata or call to actions to write the related assignment */}
              {d.lessonId && (
                <div className="pt-4 border-t border-slate-50/50 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-amber-600 font-medium">Lección {d.lessonId}</span>
                  <button
                    onClick={() => onGoToLesson(d.lessonId!)}
                    id={`btn-go-to-lesson-day-${d.day}`}
                    className="inline-flex items-center gap-1 text-slate-700 hover:text-amber-600 text-[10px] font-mono transition font-medium cursor-pointer"
                  >
                    Estudiar Clase <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
