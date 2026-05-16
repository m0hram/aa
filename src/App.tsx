import { useState, useEffect } from 'react';
import { definitions, lists, categories, mcqs } from './data';
import { Moon, Sun, BookType, Printer, Menu, X, LayoutGrid, BrainCircuit, CheckCircle2, XCircle } from 'lucide-react';

type Theme = 'light' | 'dark' | 'natural';
type ViewMode = 'study' | 'mcq' | 'mcq-solved';

export default function App() {
  const [theme, setTheme] = useState<Theme>('natural');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isStudyMode, setIsStudyMode] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('study');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [revealedItems, setRevealedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Apply theme to body
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    setRevealedItems({});
  }, [isStudyMode, activeCategory]);

  const handlePrint = () => {
    window.print();
  };

  const filteredDefs = activeCategory === 'all' 
    ? definitions 
    : definitions.filter(d => categories.find(c => c.id === activeCategory)?.defIds.includes(d.id));
    
  const filteredLists = activeCategory === 'all'
    ? lists
    : lists.filter(l => categories.find(c => c.id === activeCategory)?.listIds.includes(l.id));

  const filteredMcqs = activeCategory === 'all'
    ? mcqs
    : mcqs.filter(m => categories.find(c => c.id === activeCategory)?.mcqIds?.includes(m.id));

  const getCategoryItemStyle = (isActive: boolean) => {
    const base = "px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 text-[14px] font-bold border flex justify-between items-center w-full text-left";
    if (theme === 'natural') {
        return `${base} ${isActive ? 'bg-white border-[#e8e1d9] shadow-[0_4px_12px_rgba(0,0,0,0.03)] text-[#7e9680]' : 'border-transparent text-[#4a443f] hover:bg-white/50'}`;
    }
    if (theme === 'dark') {
        return `${base} ${isActive ? 'bg-slate-800 border-slate-700 shadow-sm text-blue-400' : 'border-transparent text-slate-300 hover:bg-slate-800/50'}`;
    }
    // light
    return `${base} ${isActive ? 'bg-white border-slate-200 shadow-sm text-blue-700' : 'border-transparent text-slate-600 hover:bg-white/50'}`;
  };

  const highlightQuestion = (text: string) => {
    let prefix = '';
    let term = text;
    if (text.toLowerCase().startsWith('what is the ')) {
      prefix = 'What is the';
      term = text.substring(12);
    } else if (text.toLowerCase().startsWith('what is a ')) {
        prefix = 'What is a';
        term = text.substring(10);
    } else if (text.toLowerCase().startsWith('what is ')) {
      prefix = 'What is';
      term = text.substring(8);
    } else if (text.toLowerCase().startsWith('list ')) {
      prefix = 'List';
      term = text.substring(5);
    }
    
    if (prefix) {
      return (
        <span className="flex flex-col">
          <span className={`text-[12px] uppercase tracking-wider font-bold mb-1 ${theme === 'natural' ? 'text-[#c9846d]' : 'opacity-50'}`}>{prefix}</span>
          <span className="text-xl font-extrabold leading-tight">{term}</span>
        </span>
      );
    }
    return <span className="text-xl font-extrabold leading-tight">{text}</span>;
  };

  return (
    <div className={`h-screen flex flex-col transition-colors duration-300 font-sans ${
      theme === 'light' ? 'bg-slate-50 text-slate-800' :
      theme === 'dark' ? 'bg-slate-900 text-slate-200' :
      'bg-[#fdfaf6] text-[#4a443f]' // Natural
    }`}>
      
      {/* Controls - Header */}
      <header className={`print:hidden shrink-0 z-50 p-4 border-b flex items-center justify-between transition-colors duration-300 ${
        theme === 'light' ? 'bg-white border-slate-200' :
        theme === 'dark' ? 'bg-slate-950 border-slate-800' :
        'bg-[#fdfaf6] border-[#e8e1d9]'
      }`}>
        <div className="flex items-center gap-2 flex-1">
          <button 
            className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <h1 className="text-xl font-bold flex items-center gap-2">
            <BookType className={`w-5 h-5 ${theme === 'natural' ? 'text-[#7e9680]' : ''}`} />
            <span className="hidden sm:inline tracking-tight">Medical Terms Review</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2 md:mr-2">
            <BrainCircuit className={`w-4 h-4 ${isStudyMode ? (theme === 'natural' ? 'text-[#c9846d]' : 'text-blue-500') : 'opacity-40'}`} />
            <span className={`text-sm font-bold hidden md:inline transition-colors ${isStudyMode ? (theme === 'natural' ? 'text-[#c9846d]' : 'text-blue-500') : 'opacity-40'}`}>
              Study Mode
            </span>
            <button 
              onClick={() => setIsStudyMode(!isStudyMode)}
              className={`w-10 h-6 ml-1 rounded-full flex items-center p-1 transition-colors ${
                  isStudyMode 
                    ? (theme === 'natural' ? 'bg-[#c9846d]' : 'bg-blue-500') 
                    : (theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300')
              }`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isStudyMode ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
          </div>

          <div className="w-px h-6 bg-current opacity-10 hidden md:block"></div>

          <div className={`flex rounded-lg overflow-hidden border ${
             theme === 'light' ? 'border-slate-200' :
             theme === 'dark' ? 'border-slate-700 bg-slate-800/50' :
             'border-[#e8e1d9] bg-[#f4efea]'
          }`}>
            <button
              onClick={() => setTheme('light')}
              className={`p-2 transition-colors ${theme === 'light' ? 'bg-white text-slate-900 shadow-sm' : 'hover:bg-black/5 flex'}`}
              title="Light Mode"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme('natural')}
              className={`p-2 transition-colors ${theme === 'natural' ? 'bg-white text-[#7e9680] shadow-sm' : 'hover:bg-black/5 flex'}`}
              title="Natural Tones Mode"
            >
              <div className="w-4 h-4 rounded-full bg-[#fdfaf6] border border-[#7e9680]"></div>
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-2 transition-colors ${theme === 'dark' ? 'bg-slate-700 text-white shadow-sm' : 'hover:bg-white/10 flex'}`}
              title="Dark Mode"
            >
              <Moon className="w-4 h-4" />
            </button>
          </div>
          
          <button
            onClick={handlePrint}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              theme === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700' :
              theme === 'dark' ? 'bg-blue-500 text-white hover:bg-blue-600' :
              'bg-[#7e9680] text-white hover:bg-[#687d6a]'
            }`}
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Print / Save PDF</span>
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden relative print:overflow-visible">
        
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
           <div className="fixed inset-0 bg-black/20 z-30 lg:hidden print:hidden" onClick={() => setIsSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside className={`absolute lg:relative z-40 h-full w-[260px] shrink-0 border-r flex flex-col transition-transform duration-300 ease-in-out print:hidden ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${
            theme === 'light' ? 'bg-slate-50 border-slate-200' :
            theme === 'dark' ? 'bg-slate-900 border-slate-800' :
            'bg-[#f4efea] border-[#e8e1d9]'
        }`}>
          <div className="p-6 flex-1 overflow-y-auto">
            <h3 className={`text-[11px] uppercase tracking-widest font-bold mb-4 px-2 ${theme === 'natural' ? 'text-[#8c8279]' : 'opacity-60'}`}>Study Modules</h3>
            
            <div className="flex flex-col gap-2 mb-8">
              <button 
                onClick={() => { setViewMode('study'); setActiveCategory('all'); setIsSidebarOpen(false); }} 
                className={getCategoryItemStyle(viewMode === 'study' && activeCategory === 'all')}
              >
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 opacity-70" />
                  <span>All Topics</span>
                </div>
                <span className="text-[11px] opacity-60 font-bold">{definitions.length + lists.length}</span>
              </button>
              
              {categories.map(c => {
                const count = c.defIds.length + c.listIds.length;
                if (count === 0) return null;
                return (
                  <button 
                    key={c.id} 
                    onClick={() => { setViewMode('study'); setActiveCategory(c.id); setIsSidebarOpen(false); }} 
                    className={getCategoryItemStyle(viewMode === 'study' && activeCategory === c.id)}
                  >
                    <span>{c.title}</span>
                    <span className="text-[11px] opacity-60 font-bold">{count}</span>
                  </button>
                )
              })}
            </div>

            <h3 className={`text-[11px] uppercase tracking-widest font-bold mb-4 px-2 ${theme === 'natural' ? 'text-[#8c8279]' : 'opacity-60'}`}>Practice Quizzes</h3>
            
            <div className="flex flex-col gap-2 mb-8">
              <button 
                onClick={() => { setViewMode('mcq'); setActiveCategory('all'); setIsSidebarOpen(false); }} 
                className={getCategoryItemStyle(viewMode === 'mcq' && activeCategory === 'all')}
              >
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 opacity-70" />
                  <span>All MCQs</span>
                </div>
                <span className="text-[11px] opacity-60 font-bold">{mcqs.length}</span>
              </button>
              
              {categories.filter(c => c.mcqIds && c.mcqIds.length > 0).map(c => (
                <button 
                  key={`mcq-${c.id}`} 
                  onClick={() => { setViewMode('mcq'); setActiveCategory(c.id); setIsSidebarOpen(false); }} 
                  className={getCategoryItemStyle(viewMode === 'mcq' && activeCategory === c.id)}
                >
                  <span>{c.title}</span>
                  <span className="text-[11px] opacity-60 font-bold">{c.mcqIds.length}</span>
                </button>
              ))}
            </div>

            <h3 className={`text-[11px] uppercase tracking-widest font-bold mb-4 px-2 ${theme === 'natural' ? 'text-[#8c8279]' : 'opacity-60'}`}>Review Answers</h3>
            
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => { setViewMode('mcq-solved'); setActiveCategory('all'); setIsSidebarOpen(false); }} 
                className={getCategoryItemStyle(viewMode === 'mcq-solved' && activeCategory === 'all')}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 opacity-70" />
                  <span>Solved MCQs</span>
                </div>
                <span className="text-[11px] opacity-60 font-bold">{mcqs.length}</span>
              </button>
              
              {categories.filter(c => c.mcqIds && c.mcqIds.length > 0).map(c => (
                <button 
                  key={`mcq-solved-${c.id}`} 
                  onClick={() => { setViewMode('mcq-solved'); setActiveCategory(c.id); setIsSidebarOpen(false); }} 
                  className={getCategoryItemStyle(viewMode === 'mcq-solved' && activeCategory === c.id)}
                >
                  <span>{c.title}</span>
                  <span className="text-[11px] opacity-60 font-bold">{c.mcqIds.length}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Quick Tip Widget */}
          <div className="p-5 m-4 rounded-3xl text-white shadow-sm shrink-0 relative overflow-hidden" style={{ backgroundColor: theme === 'natural' ? '#c9846d' : theme === 'dark' ? '#334155' : '#3b82f6' }}>
            <BrainCircuit className="absolute -right-4 -bottom-4 w-20 h-20 opacity-10" />
            <p className="text-xs opacity-90 text-white/90 font-bold uppercase tracking-wider mb-2">Quick Tip</p>
            <p className="text-sm font-medium leading-relaxed">
               {viewMode === 'study' ? 'Focus on one section at a time. Read the English term, then try to recall the Arabic meaning.' : viewMode === 'mcq' ? 'Test your knowledge on key medical terms and concepts with multiple choice questions.' : 'Review the correct answers to speed up your learning and reinforce the concepts.'}
            </p>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 lg:p-12 pb-24 print:h-auto print:overflow-visible print:p-0 print:max-w-none print:bg-white print:text-black">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-12 print:mt-4 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-current border-opacity-10 pb-6 print:border-none">
              <div>
                <h2 className={`text-3xl font-extrabold mb-2 ${theme === 'natural' ? 'text-[#2d2926]' : 'font-serif'}`}>
                    {activeCategory === 'all' 
                        ? (viewMode === 'study' ? 'Medical Vocabulary Guide' : viewMode === 'mcq' ? 'General Knowledge Quiz' : 'Solved MCQs') 
                        : categories.find(c => c.id === activeCategory)?.title}
                </h2>
                <p className={`font-medium ${theme === 'natural' ? 'text-[#8c8279] text-sm' : 'opacity-70'}`}>
                    {viewMode === 'study' ? (filteredDefs.length + filteredLists.length) + ' terms' : filteredMcqs.length + ' questions'} in this module.
                </p>
              </div>
              
              {isStudyMode && viewMode === 'study' && !window.matchMedia('print').matches && (
                  <div className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${
                      theme === 'natural' ? 'bg-[#c9846d]/10 text-[#c9846d]' : 'bg-blue-500/10 text-blue-500'
                  }`}>
                      <BrainCircuit className="w-4 h-4" />
                      Tap to reveal answer
                  </div>
              )}
            </div>

            {viewMode === 'mcq' || viewMode === 'mcq-solved' ? (
              <div className="space-y-8">
                {filteredMcqs.map((mcq, index) => (
                  <div key={mcq.id} className={`p-6 md:p-8 rounded-3xl border transition-shadow duration-300 ${
                    theme === 'light' ? 'bg-white border-slate-200 shadow-sm' :
                    theme === 'dark' ? 'bg-slate-800/50 border-slate-700' :
                    'bg-white border-[#e8e1d9] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)]'
                  }`}>
                    <div className="flex gap-4 mb-6">
                      <span className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg text-sm font-black ${
                        theme === 'light' ? 'bg-blue-100 text-blue-700' :
                        theme === 'dark' ? 'bg-slate-800 text-blue-400' :
                        'text-[#c9846d] border-2 border-[#e8e1d9]'
                      }`}>
                        {index + 1}
                      </span>
                      <h3 className={`text-xl font-extrabold leading-snug pt-0.5 ${theme === 'natural' ? 'text-[#2d2926]' : ''}`}>
                        {mcq.question}
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {(['A', 'B', 'C', 'D'] as const).map(opt => {
                        const isSelected = selectedAnswers[mcq.id] === opt;
                        const hasAnswered = selectedAnswers[mcq.id] !== undefined || viewMode === 'mcq-solved';
                        const isCorrectOption = mcq.answer === opt;
                        
                        let optStyle = `w-full text-left p-4 rounded-xl border-2 transition-all duration-200 font-medium flex justify-between items-center group `;
                        
                        if (!hasAnswered && viewMode === 'mcq') {
                          optStyle += theme === 'natural' 
                            ? 'border-[#e8e1d9] hover:border-[#7e9680] text-[#4a443f]'
                            : theme === 'light'
                              ? 'border-slate-200 hover:border-blue-500 text-slate-700'
                              : 'border-slate-700 hover:border-blue-400 text-slate-300';
                        } else {
                          if (isCorrectOption) {
                            optStyle += theme === 'natural'
                              ? 'border-[#7e9680] bg-[#7e9680]/10 text-[#7e9680]'
                              : theme === 'light'
                                ? 'border-green-500 bg-green-50 text-green-700'
                                : 'border-green-500 bg-green-900/20 text-green-400';
                          } else if (isSelected && viewMode === 'mcq') {
                            optStyle += theme === 'natural'
                              ? 'border-[#c9846d] bg-[#c9846d]/10 text-[#c9846d]'
                              : theme === 'light'
                                ? 'border-red-500 bg-red-50 text-red-700'
                                : 'border-red-500 bg-red-900/20 text-red-400';
                          } else {
                            optStyle += theme === 'natural'
                              ? 'border-[#e8e1d9] opacity-50 text-[#8c8279]'
                              : theme === 'light'
                                ? 'border-slate-200 opacity-50 text-slate-400'
                                : 'border-slate-700 opacity-50 text-slate-500';
                          }
                        }

                        return (
                          <button
                            key={opt}
                            disabled={hasAnswered}
                            onClick={() => {
                                if (viewMode === 'mcq') setSelectedAnswers(prev => ({...prev, [mcq.id]: opt}))
                            }}
                            className={optStyle}
                          >
                            <div>
                                <span className="inline-block w-8 font-bold opacity-60">{opt}.</span>
                                <span className={hasAnswered && (isCorrectOption || isSelected) ? 'font-bold' : ''}>
                                    {mcq.options[opt]}
                                </span>
                            </div>
                            {hasAnswered && isCorrectOption && <CheckCircle2 className="w-5 h-5 opacity-100" />}
                            {hasAnswered && isSelected && !isCorrectOption && <XCircle className="w-5 h-5 opacity-100" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
                <>
                  {/* Section 1: Definitions */}
                  {filteredDefs.length > 0 && (
                    <section className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  {filteredDefs.map((def) => (
                    <div key={def.id} className={`break-inside-avoid flex flex-col p-6 print:p-0 print:rounded-none h-full transition-shadow duration-300 ${
                      theme === 'light' ? 'bg-white shadow-sm hover:shadow-md border border-slate-100 rounded-3xl' :
                      theme === 'dark' ? 'bg-slate-800/50 border border-slate-700 rounded-3xl' :
                      'bg-white border border-[#e8e1d9] rounded-[24px] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.05)]'
                    }`}>
                        <div className="flex justify-between items-start mb-6">
                            <span className={`shrink-0 flex items-center justify-center px-3 py-1 text-sm font-black tracking-widest ${
                                theme === 'light' ? 'bg-blue-100 text-blue-700 rounded-lg' :
                                theme === 'dark' ? 'bg-slate-800 text-blue-400 rounded-lg' :
                                'text-[#c9846d] rounded-lg border-2 border-[#e8e1d9]'
                            }`}>
                                Q.{def.id < 10 ? `0${def.id}` : def.id}
                            </span>
                            {def.icon && (
                            <div className={`inline-flex items-center px-3 py-1 text-sm font-bold ${
                                theme === 'light' ? 'bg-amber-100 text-amber-800 rounded-full' :
                                theme === 'dark' ? 'bg-amber-900/30 text-amber-400 border border-amber-900/50 rounded-full' :
                                'bg-[#f0f4f1] text-[#7e9680] rounded-xl'
                            }`}>
                                {def.icon}
                            </div>
                            )}
                        </div>
                        
                        <div className={`pr-4 mb-5 ${theme === 'natural' ? 'text-[#2d2926]' : ''}`}>
                            {highlightQuestion(def.question)}
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-end gap-3 mt-auto">
                          {isStudyMode && !revealedItems[`def-${def.id}`] ? (
                            <button 
                              onClick={() => setRevealedItems(p => ({ ...p, [`def-${def.id}`]: true }))}
                              className={`w-full py-8 mt-4 rounded-xl border-2 border-dashed font-bold transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
                                theme === 'natural' ? 'border-[#e8e1d9] text-[#7e9680] hover:bg-[#e8e1d9]/30' : 
                                theme === 'light' ? 'border-blue-200 text-blue-600 hover:bg-blue-50' : 
                                'border-slate-700 text-blue-400 hover:bg-slate-800'
                              }`}
                            >
                              <BrainCircuit className="w-6 h-6 mb-1 opacity-70" />
                              <span>Reveal Answer</span>
                            </button>
                          ) : (
                            <>
                              <div className={`p-4 rounded-xl ${
                                  theme === 'natural' ? 'bg-[#fdfaf6] border border-[#e8e1d9]/50' : 'bg-black/5 dark:bg-white/5'
                              }`}>
                                <p className="font-medium text-[16px] leading-relaxed">{def.english}</p>
                              </div>
                              
                              <div className={`p-4 rounded-xl transition-all duration-300 ${
                                  theme === 'natural' ? 'bg-[#faf8f5] border-l-4 border-[#7e9680]' : 'border-l-4 border-blue-500'
                              }`}>
                                <p className={`font-arabic text-[18px] leading-[1.6] text-right font-bold ${
                                    theme === 'natural' ? 'text-[#7e9680]' : ''
                                }`} dir="rtl">{def.arabic}</p>
                              </div>
                            </>
                          )}
                        </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 2: Lists */}
            {filteredLists.length > 0 && (
              <section>
                <div className={`mb-8 pb-3 border-b-2 break-before-page ${
                   theme === 'dark' ? 'border-slate-700' : 
                   theme === 'natural' ? 'border-[#e8e1d9]' :
                   'border-current opacity-20'
                }`}>
                  <h3 className={`text-2xl font-extrabold flex items-center gap-3 ${theme === 'natural' ? 'text-[#2d2926]' : 'font-serif'}`}>
                      📋 Categorized Lists
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 gap-6 print:grid-cols-2 lg:grid-cols-2 items-start">
                  {filteredLists.map((list) => (
                    <div key={list.id} className={`break-inside-avoid flex flex-col p-6 print:p-0 print:rounded-none h-full transition-shadow duration-300 ${
                        theme === 'light' ? 'bg-white shadow-sm hover:shadow-md border border-slate-100 rounded-3xl' :
                        theme === 'dark' ? 'bg-slate-800/50 border border-slate-700 rounded-3xl' :
                        'bg-white border border-[#e8e1d9] rounded-[24px] shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.05)]'
                    }`}>
                      <div className="flex justify-between items-start mb-6">
                            <span className={`shrink-0 flex items-center justify-center px-3 py-1 text-sm font-black tracking-widest ${
                                theme === 'light' ? 'bg-indigo-100 text-indigo-700 rounded-lg' :
                                theme === 'dark' ? 'bg-slate-800 text-indigo-400 rounded-lg' :
                                'text-[#c9846d] rounded-lg border-2 border-[#e8e1d9]'
                            }`}>
                                Q.{list.id}
                            </span>
                      </div>
                      <div className={`pr-4 mb-6 ${theme === 'natural' ? 'text-[#2d2926]' : ''}`}>
                          {highlightQuestion(list.question)}
                      </div>
                      
                      <ul className="space-y-3 flex-1 flex flex-col mt-auto">
                        {isStudyMode && !revealedItems[`list-${list.id}`] ? (
                          <button 
                            onClick={() => setRevealedItems(p => ({ ...p, [`list-${list.id}`]: true }))}
                            className={`w-full py-8 mt-4 rounded-xl border-2 border-dashed font-bold transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
                              theme === 'natural' ? 'border-[#e8e1d9] text-[#7e9680] hover:bg-[#e8e1d9]/30' : 
                              theme === 'light' ? 'border-blue-200 text-blue-600 hover:bg-blue-50' : 
                              'border-slate-700 text-blue-400 hover:bg-slate-800'
                            }`}
                          >
                            <BrainCircuit className="w-6 h-6 mb-1 opacity-70" />
                            <span>Reveal Content</span>
                          </button>
                        ) : (
                          list.items.map((item, idx) => (
                            <li key={idx} className={`flex justify-between items-stretch gap-3 ${
                              idx !== list.items.length - 1 ? (theme === 'natural' ? 'border-b border-[#e8e1d9] pb-3' : 'border-b border-current border-opacity-10 pb-3') : ''
                            } print:border-b print:border-slate-200 print:pb-2`}>
                              <div className="flex items-center w-1/2">
                                  <span className={`font-semibold text-[15px] ${theme === 'natural' ? 'text-[#4a443f]' : ''}`}>
                                      {item.english}
                                  </span>
                              </div>
                              
                              <div className={`w-1/2 flex items-center justify-end transition-all duration-300`}>
                                  <span className={`font-arabic text-right text-[16px] font-bold ${
                                      theme === 'natural' ? 'text-[#7e9680] bg-[#faf8f5] px-3 py-1.5 rounded-xl border border-[#e8e1d9]/50' : 'text-current'
                                  }`} dir="rtl">
                                      {item.arabic}
                                  </span>
                              </div>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
                </>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
