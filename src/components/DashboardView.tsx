import React from 'react';
import { BookOpen, Target, Sparkles, User, Award, CheckCircle2, ListTodo } from 'lucide-react';
import { Lesson, Draft } from '../types';

interface DashboardViewProps {
  onStartCourse: () => void;
  completedLessonsCount: number;
  totalLessonsCount: number;
  drafts: Draft[];
  onSelectTab: (tab: string) => void;
}

export default function DashboardView({
  onStartCourse,
  completedLessonsCount,
  totalLessonsCount,
  drafts,
  onSelectTab
}: DashboardViewProps) {
  const progressPercent = Math.round((completedLessonsCount / totalLessonsCount) * 100);
  const draftsCount = drafts.length;
  const feedbackCount = drafts.filter(d => d.feedback).length;

  return (
    <div className="space-y-12 fade-in-up text-gray-800">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-radial from-slate-900 via-slate-950 to-black text-white p-8 md:p-16 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-full text-xs text-amber-400 font-mono tracking-wider font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Escuela de Escritores Premium
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            Taller Literario de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 italic">Escritura Creativa</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 font-light font-sans max-w-2xl leading-relaxed">
            Transforma tus impulsos en historias vivas. Domina el arte sutil de la concisión, la mímesis rítmica, la visibilidad visceral de Gardner y la esfericidad del relato contemporáneo.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={onStartCourse}
              id="btn-start-course-hero"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium rounded-xl transition duration-250 cursor-pointer shadow-lg shadow-amber-500/20 active:scale-95 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Comenzar Aprendizaje
            </button>
            <button
              onClick={() => onSelectTab('plan')}
              id="btn-view-plan-hero"
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-medium rounded-xl transition duration-250 flex items-center gap-2 cursor-pointer"
            >
              Ver Plan de 30 Días
            </button>
          </div>
        </div>
      </section>

      {/* Progress Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          onClick={() => onSelectTab('lessons')}
          className="bg-white border border-slate-100 hover:border-amber-200 p-6 rounded-2xl shadow-xs flex items-center gap-5 cursor-pointer transition"
        >
          <div className="p-4 bg-amber-50 rounded-xl text-amber-600">
            <Award className="w-8 h-8" />
          </div>
          <div className="space-y-1 flex-1">
            <span className="text-sm font-mono text-slate-400 uppercase tracking-wider">Lecciones Tildadas</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-slate-900">{completedLessonsCount}</span>
              <span className="text-sm text-slate-400">de {totalLessonsCount} ({progressPercent}%)</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-amber-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div 
          onClick={() => onSelectTab('portfolio')}
          className="bg-white border border-slate-100 hover:border-indigo-200 p-6 rounded-2xl shadow-xs flex items-center gap-5 cursor-pointer transition"
        >
          <div className="p-4 bg-indigo-50 rounded-xl text-indigo-600">
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="space-y-1 flex-1">
            <span className="text-sm font-mono text-slate-400 uppercase tracking-wider">Borradores en Cuaderno</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-slate-900">{draftsCount}</span>
              <span className="text-sm text-slate-400">relatos redactados</span>
            </div>
            <p className="text-xs text-slate-400">Guarda tus respuestas a las consignas.</p>
          </div>
        </div>

        <div 
          onClick={() => onSelectTab('portfolio')}
          className="bg-white border border-slate-100 hover:border-emerald-250 p-6 rounded-2xl shadow-xs flex items-center gap-5 cursor-pointer transition"
        >
          <div className="p-4 bg-emerald-50 rounded-xl text-emerald-600">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="space-y-1 flex-1">
            <span className="text-sm font-mono text-slate-400 uppercase tracking-wider">Revisiones de Instructor IA</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-slate-900">{feedbackCount}</span>
              <span className="text-sm text-slate-400">evaluaciones premium</span>
            </div>
            <p className="text-xs text-slate-400">Análisis y mejoras constructivas en tiempo real.</p>
          </div>
        </div>
      </section>

      {/* Commercial & Pedagogical Description */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-950 flex items-center gap-2">
            <Sparkles className="text-amber-500 w-6 h-6" /> El Arte de Domesticar las Palabras
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed font-sans font-light">
            <p className="text-slate-700 font-normal">
              Este curso no es un simple compendio teórico ni un manual de reglas rígidas. Se trata de una <strong>inmersión deconstructiva</strong> creada para personas que desean habitar el lenguaje literario, sacudir los automatismos de la vida diaria y aprender a escribir relatos perdurables en la memoria.
            </p>
            <p>
              Basado fielmente en el programa de la prestigiosa <strong>Escuela de Escritores</strong>, el trayecto pedagógico avanza graduando las dificultades: desde la preparación de tus utensilios temáticos y diccionarios, pasando por la musicalidad de la frase corta y larga, hasta el análisis técnico de los diferentes narradores y géneros de graduación real-fantástica.
            </p>
            <p>
              A lo largo de <strong>15 Clases Magistrales</strong> complementadas con un <strong>Plan de Estudio de 30 Días</strong>, experimentarás de forma práctica cada lección. Escribirás borradores reales y contarás con el auxilio constante de nuestro <strong>Instructor Literario IA</strong>, calibrado para evaluar tus textos según los estrictos criterios de naturalidad de Ángel Zapata y la visibilidad sensorial de John Gardner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-3">
              <h3 className="font-serif font-semibold text-slate-900 flex items-center gap-2 text-md">
                <Target className="text-indigo-600 w-4.5 h-4.5" /> Objetivos de Aprendizaje
              </h3>
              <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4 font-sans">
                <li>Aprender a deconstruir la relación convencional entre Nombre y Objeto.</li>
                <li>Identificar y purgar estilos defectuosos: formalismo, asertividad seca y énfasis.</li>
                <li>Construir escenas amuebladas con objetos dinámicos y verbos cinéticos.</li>
                <li>Modular el tono, volumen y expresividad de la voz del narrador.</li>
                <li>Componer tramas utilizando escenas, resúmenes, elipsis y descripciones.</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 space-y-3">
              <h3 className="font-serif font-semibold text-slate-900 flex items-center gap-2 text-md">
                <User className="text-emerald-600 w-4.5 h-4.5" /> Perfil del Estudiante Ideal
              </h3>
              <ul className="text-xs text-slate-500 space-y-2 list-disc pl-4 font-sans">
                <li>Lectores ávidos que desean cruzar el umbral hacia la acción creadora.</li>
                <li>Escritores principiantes que perciben rigidez o falta de ritmo en su prosa.</li>
                <li>Autores intermedios que buscan limpiar vicios estilísticos y pulir diálogos.</li>
                <li>Apasionados por la narración corta que anhelan escribir cuentos esféricos.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Progress Checklist */}
        <div id="quick-checklist-card" className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
              <ListTodo className="text-amber-500 w-5 h-5" /> Hitos del Escritor
            </h3>
            <p className="text-xs text-slate-400 font-mono">TU HOJA DE RUTA AL COMIENZO</p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-800">Preparación Crítica</h4>
                <p className="text-xs text-slate-500">Adquirir los diccionarios ideológicos, sinónimos y seleccionar el rincón silencioso.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-200 shrink-0 mt-0.5 flex items-center justify-center text-[10px] text-slate-400 font-bold">2</div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-700">El Choque Poético</h4>
                <p className="text-xs text-slate-400">Esquivar la censura del cerebro lógico hilando microrrelatos con palabras mágicas.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-200 shrink-0 mt-0.5 flex items-center justify-center text-[10px] text-slate-400 font-bold">3</div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-700">La Naturalidad Conquistada</h4>
                <p className="text-xs text-slate-400">Desnudar textos burocráticos y dominando los modalizadores en la prosa cotidiana.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-200 shrink-0 mt-0.5 flex items-center justify-center text-[10px] text-slate-400 font-bold">4</div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-700">La Escena Cinematográfica</h4>
                <p className="text-xs text-slate-400">Sostener el objeto aglutinador según el ejemplo cósmico de Stanislaw Lem.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-200 shrink-0 mt-0.5 flex items-center justify-center text-[10px] text-slate-400 font-bold">5</div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-slate-700">La Estructura Esférica</h4>
                <p className="text-xs text-slate-400">Construir y pulir un cuento final donde cada frase sea un engranaje insustituible.</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onSelectTab('lessons')}
              id="btn-sidebar-lessons-nav"
              className="w-full text-center py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 rounded-xl text-xs font-mono font-medium transition cursor-pointer"
            >
              EXPLORAR LAS 15 CLASES &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
