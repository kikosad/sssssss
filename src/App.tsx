import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Calendar, BookMarked, Sparkles, Home, PenTool, Menu, X, CheckSquare, Settings 
} from 'lucide-react';
import { Draft } from './types';
import DashboardView from './components/DashboardView';
import StudyPlanView from './components/StudyPlanView';
import LessonsView from './components/LessonsView';
import NotebookView from './components/NotebookView';
import AestheticView from './components/AestheticView';
import PortfolioView from './components/PortfolioView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Hydrate states from client LocalStorage
  const [drafts, setDrafts] = useState<Draft[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('taller_narrativo_drafts');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('taller_narrativo_days');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Persist drafts to LocalStorage
  useEffect(() => {
    localStorage.setItem('taller_narrativo_drafts', JSON.stringify(drafts));
  }, [drafts]);

  // Persist completed days to LocalStorage
  useEffect(() => {
    localStorage.setItem('taller_narrativo_days', JSON.stringify(completedDays));
  }, [completedDays]);

  // Handle saving of lesson drafting activities and AI reviews
  const handleSaveDraft = (lessonId: number | 'final' | 'free', content: string, feedback: string | null) => {
    setDrafts((prev) => {
      const existingIdx = prev.findIndex((d) => d.lessonId === lessonId);
      const updatedDraft: Draft = {
        id: existingIdx >= 0 ? prev[existingIdx].id : `draft-${lessonId}-${Date.now()}`,
        lessonId,
        title: typeof lessonId === 'number' ? `Consigna de Lección ${lessonId}` : 'Escritura Libre',
        content,
        feedback,
        updatedAt: new Date().toLocaleDateString(),
        isCompleted: existingIdx >= 0 ? prev[existingIdx].isCompleted : false
      };

      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx] = updatedDraft;
        return copy;
      } else {
        return [...prev, updatedDraft];
      }
    });
  };

  // Toggle lesson complete circle check
  const handleToggleLessonComplete = (lessonId: number) => {
    setDrafts((prev) => {
      const existingIdx = prev.findIndex((d) => d.lessonId === lessonId);
      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx] = { 
          ...copy[existingIdx], 
          isCompleted: !copy[existingIdx].isCompleted 
        };
        return copy;
      } else {
        // Create default draft structure
        const nextDraft: Draft = {
          id: `draft-${lessonId}-${Date.now()}`,
          lessonId,
          title: `Consigna de Lección ${lessonId}`,
          content: '',
          feedback: null,
          updatedAt: new Date().toLocaleDateString(),
          isCompleted: true
        };
        return [...prev, nextDraft];
      }
    });
  };

  // Toggle study days checklist ticks
  const handleToggleDayComplete = (day: number) => {
    setCompletedDays((prev) => {
      if (prev.includes(day)) {
        return prev.filter((d) => d !== day);
      } else {
        return [...prev, day].sort((a, b) => a - b);
      }
    });
  };

  const handleGoToLessonFromDay = (lessonId: number) => {
    setActiveTab('lessons');
  };

  // Count the completed lessons to render metric summaries
  const completedLessonsCount = drafts.filter((d) => typeof d.lessonId === 'number' && d.isCompleted).length;

  return (
    <div id="taller-literario-app" className="min-h-screen bg-slate-50 flex text-slate-800 font-sans">
      {/* Sidebar Navigation: Left-Rail in Large Views */}
      <aside className="hidden lg:flex flex-col w-64 bg-slate-950 text-white shrink-0 border-r border-slate-900 justify-between self-stretch">
        <div id="sidebar-top-section" className="p-6 space-y-8">
          {/* Branded school header */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-lg shadow-amber-500/20 text-slate-950 shrink-0">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm leading-tight tracking-tight">TALLER LITERARIO</h3>
              <p className="text-[10px] font-mono text-amber-500 font-medium uppercase tracking-wider">Escuela de Escritores</p>
            </div>
          </div>

          {/* Nav menu links */}
          <nav id="desktop-sidebar-nav" className="space-y-1 pt-4">
            <button
              onClick={() => setActiveTab('home')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                activeTab === 'home' 
                  ? 'bg-amber-500 text-slate-950 font-bold' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Home className="w-4 h-4" /> Inicio del Curso
            </button>

            <button
              onClick={() => setActiveTab('lessons')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                activeTab === 'lessons' 
                  ? 'bg-amber-500 text-slate-950 font-bold' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Las 15 Lecciones
            </button>

            <button
              onClick={() => setActiveTab('plan')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                activeTab === 'plan' 
                  ? 'bg-amber-500 text-slate-950 font-bold' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Calendar className="w-4 h-4" /> Plan de 30 Días
            </button>

            <button
              onClick={() => setActiveTab('notebook')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                activeTab === 'notebook' 
                  ? 'bg-amber-500 text-slate-950 font-bold' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <PenTool className="w-4 h-4" /> Cuaderno Creativo
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                activeTab === 'portfolio' 
                  ? 'bg-amber-500 text-slate-950 font-bold' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <CheckSquare className="w-4 h-4" /> Mis Tareas
            </button>

            <button
              onClick={() => setActiveTab('resources')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                activeTab === 'resources' 
                  ? 'bg-amber-500 text-slate-950 font-bold' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" /> Biblioteca & Hábitos
            </button>
          </nav>
        </div>

        {/* Sidebar Footer area */}
        <div className="p-6 border-t border-slate-900/60 text-[10px] font-mono text-slate-500 space-y-1">
          <p>© Escuela de Escritores</p>
          <p>Módulo de aprendizaje premium</p>
        </div>
      </aside>

      {/* Mobile Header, Overlay and Navigation drawer */}
      <div className="flex-1 flex flex-col min-w-0">
        <header id="mobile-header-bar" className="lg:hidden h-16 bg-slate-950 text-white flex items-center justify-between px-6 border-b border-slate-900 sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-amber-500" />
            <span className="font-serif font-bold text-sm tracking-tight">Taller Literario</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-hamburger-btn"
            className="p-1 rounded-lg hover:bg-slate-900 text-slate-300 transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div id="mobile-menu-overlay" className="lg:hidden fixed inset-0 top-16 bg-slate-950 z-40 flex flex-col justify-between text-white p-6 border-t border-slate-900">
            <nav id="mobile-drawer-nav" className="space-y-2">
              <button
                onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                  activeTab === 'home' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <Home className="w-4 h-4" /> Inicio del Curso
              </button>

              <button
                onClick={() => { setActiveTab('lessons'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                  activeTab === 'lessons' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4" /> Las 15 Lecciones
              </button>

              <button
                onClick={() => { setActiveTab('plan'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                  activeTab === 'plan' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <Calendar className="w-4 h-4" /> Plan de 30 Días
              </button>

              <button
                onClick={() => { setActiveTab('notebook'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                  activeTab === 'notebook' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <PenTool className="w-4 h-4" /> Cuaderno Creativo
              </button>

              <button
                onClick={() => { setActiveTab('portfolio'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                  activeTab === 'portfolio' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <CheckSquare className="w-4 h-4" /> Mis Tareas
              </button>

              <button
                onClick={() => { setActiveTab('resources'); setMobileMenuOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-xl text-xs font-mono transition-all text-left cursor-pointer ${
                  activeTab === 'resources' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <Sparkles className="w-4 h-4" /> Biblioteca & Hábitos
              </button>
            </nav>

            <div className="text-center font-mono text-[10px] text-slate-600 border-t border-slate-900 pt-6">
              © Escuela de Escritores - Curso Premium
            </div>
          </div>
        )}

        {/* Central Content Area wrapper with consistent fluid grid padding */}
        <main className="flex-1 p-6 md:p-12 max-w-7xl w-full mx-auto space-y-12">
          
          {/* Conditional rendering of active screens */}
          {activeTab === 'home' && (
            <DashboardView
              onStartCourse={() => setActiveTab('lessons')}
              completedLessonsCount={completedLessonsCount}
              totalLessonsCount={15}
              drafts={drafts}
              onSelectTab={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'lessons' && (
            <LessonsView
              drafts={drafts}
              onSaveDraft={handleSaveDraft}
              onToggleComplete={handleToggleLessonComplete}
            />
          )}

          {activeTab === 'plan' && (
            <StudyPlanView
              completedDays={completedDays}
              onToggleDayComplete={handleToggleDayComplete}
              onGoToLesson={handleGoToLessonFromDay}
            />
          )}

          {activeTab === 'notebook' && (
            <NotebookView
              freeDraft={drafts.find((d) => d.lessonId === 'free') || null}
              onSaveFreeDraft={(content, feedback) => handleSaveDraft('free', content, feedback)}
            />
          )}

          {activeTab === 'portfolio' && (
            <PortfolioView
              drafts={drafts}
              onSaveDraft={handleSaveDraft}
              onToggleComplete={handleToggleLessonComplete}
              onGoToLesson={handleGoToLessonFromDay}
            />
          )}

          {activeTab === 'resources' && (
            <AestheticView />
          )}

        </main>
      </div>
    </div>
  );
}
