import React from 'react';
import { 
  Sparkles, AlertCircle, BookOpen, Film, Award, Heart, HelpCircle 
} from 'lucide-react';
import { 
  bookRecommendations, movieRecommendations, writerHabits, commonErrors 
} from '../data/extrasData';

export default function AestheticView() {
  return (
    <div className="space-y-16 fade-in-up">
      
      {/* SECTION 1: HABITS FOR WRITERS */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider">
            Hábitos y Rutinas
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 flex items-center gap-2">
            Hábitos Diarios para Escritores Auténticos
          </h2>
          <p className="text-slate-500 font-sans font-light text-sm max-w-xl">
            La creación no es un rayo imprevisto; es un músculo que se entrena con paciencia, rutinas estructuradas y constancia diaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writerHabits.map((h, i) => (
            <div key={h.id} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xs space-y-3 relative group hover:border-amber-200 transition">
              <div className="absolute top-4 right-4 text-slate-100 group-hover:text-amber-100 transition text-4xl font-serif font-bold select-none">
                0{i + 1}
              </div>
              <h4 className="font-serif font-bold text-slate-950 text-md relative z-10 flex items-center gap-2">
                <Award className="w-4.5 h-4.5 text-amber-500" /> {h.habit}
              </h4>
              <p className="text-xs text-slate-500 font-sans font-light leading-relaxed relative z-10">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: COMMON ERRORS TO AVOID */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider">
            Alertas Técnicas
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 flex items-center gap-2">
            Errores Clínicos Comunes a Evitar
          </h2>
          <p className="text-slate-500 font-sans font-light text-sm max-w-xl">
            Aprende a diagnosticar tu prosa distinguiendo las trampas de la verborrea, el énfasis desmedido que rompe los pactos de verosimilitud, y la queja no objetivada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commonErrors.map((err, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-xs space-y-4">
              <div className="space-y-2">
                <h4 className="font-serif font-semibold text-red-950 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4.5 h-4.5 text-red-600 shrink-0" /> {err.error}
                </h4>
                <p className="text-xs text-slate-500 font-sans font-light leading-relaxed">
                  <span className="font-semibold text-slate-700">El Problema:</span> {err.explanation}
                </p>
              </div>

              <div className="p-3 bg-white border border-slate-200/50 rounded-xl space-y-1">
                <span className="text-[10px] font-mono text-emerald-600 uppercase font-semibold">Solución Práctica:</span>
                <p className="text-xs text-slate-600 font-sans font-light leading-relaxed">
                  {err.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: BOOK & MOVIE RECOMMENDATIONS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Books */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-slate-950 flex items-center gap-2 border-b border-slate-100 pb-2">
            <BookOpen className="text-amber-500 w-5 h-5" /> Biblioteca Clásica Recomendada
          </h3>
          <div className="space-y-4">
            {bookRecommendations.map((book, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-150 space-y-2">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 leading-snug">{book.title}</h4>
                  <p className="text-[10px] font-mono text-amber-600">Por {book.author}</p>
                </div>
                <p className="text-xs text-slate-500 font-sans font-light leading-relaxed">
                  {book.reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Movies */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-slate-950 flex items-center gap-2 border-b border-slate-100 pb-2">
            <Film className="text-indigo-500 w-5 h-5" /> Cine para Desatar Perspectivas
          </h3>
          <div className="space-y-4">
            {movieRecommendations.map((movie, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-150 space-y-2">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 leading-snug">{movie.title}</h4>
                  <p className="text-[10px] font-mono text-indigo-500">Dirigida por {movie.director}</p>
                </div>
                <p className="text-xs text-slate-500 font-sans font-light leading-relaxed">
                  {movie.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FINAL ADVICE BLOCK */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-slate-800">
        <div className="relative z-10 max-w-2xl space-y-4 text-center mx-auto">
          <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">Último Consejo de Profesor</h3>
          <p className="text-slate-300 text-sm leading-relaxed font-light">
            "No temas escribir mal en el primer borrador. Hemingway bien decía que el primer borrador de cualquier escena es una mentira conveniente. Lo preciado y estético brota siempre durante la revisión silenciosa, cuando dejas caer el lápiz analítico sobre tu propio ego literario."
          </p>
        </div>
      </section>
    </div>
  );
}
