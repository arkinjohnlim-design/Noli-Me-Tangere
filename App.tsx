import { useState, useEffect } from 'react';
import { BookOpen, Users, Info, Home, ChevronLeft, ChevronRight, Menu, Search, Heart, Scroll } from 'lucide-react';
import { chaptersData } from './data/chapters';
import { characters } from './data/characters';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import './App.css';

type View = 'home' | 'chapters' | 'characters' | 'about' | 'chapter-detail';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedChapter, setSelectedChapter] = useState<number>(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedChapter]);

  const handleChapterClick = (chapterId: number) => {
    setSelectedChapter(chapterId);
    setCurrentView('chapter-detail');
    setSidebarOpen(false);
  };

  const filteredChapters = chaptersData.filter(chapter =>
    chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chapter.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCharacters = characters.filter(char =>
    char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    char.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentChapter = chaptersData.find(c => c.id === selectedChapter);

  const navigateChapter = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && selectedChapter > 1) {
      setSelectedChapter(selectedChapter - 1);
    } else if (direction === 'next' && selectedChapter < 63) {
      setSelectedChapter(selectedChapter + 1);
    }
  };

  // Navigation Sidebar Content
  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-lg font-serif font-bold text-amber-900">Noli Me Tangere</h2>
        <p className="text-xs text-amber-700">Jose Rizal</p>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          <button
            onClick={() => { setCurrentView('home'); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              currentView === 'home' ? 'bg-amber-100 text-amber-900' : 'hover:bg-amber-50 text-gray-700'
            }`}
          >
            <Home className="w-4 h-4" />
            Home
          </button>
          <button
            onClick={() => { setCurrentView('chapters'); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              currentView === 'chapters' || currentView === 'chapter-detail' ? 'bg-amber-100 text-amber-900' : 'hover:bg-amber-50 text-gray-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Chapters
          </button>
          <button
            onClick={() => { setCurrentView('characters'); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              currentView === 'characters' ? 'bg-amber-100 text-amber-900' : 'hover:bg-amber-50 text-gray-700'
            }`}
          >
            <Users className="w-4 h-4" />
            Characters
          </button>
          <button
            onClick={() => { setCurrentView('about'); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              currentView === 'about' ? 'bg-amber-100 text-amber-900' : 'hover:bg-amber-50 text-gray-700'
            }`}
          >
            <Info className="w-4 h-4" />
            About
          </button>
        </div>
        
        {(currentView === 'chapters' || currentView === 'chapter-detail') && (
          <>
            <Separator className="my-2" />
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">All Chapters</p>
            </div>
            <div className="px-2 space-y-1">
              {chaptersData.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => handleChapterClick(chapter.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-xs transition-colors ${
                    selectedChapter === chapter.id && currentView === 'chapter-detail'
                      ? 'bg-amber-200 text-amber-900'
                      : 'hover:bg-amber-50 text-gray-600'
                  }`}
                >
                  <span className="font-medium">Ch. {chapter.id}:</span> {chapter.title}
                </button>
              ))}
            </div>
          </>
        )}
      </ScrollArea>
    </div>
  );

  // Home View
  const HomeView = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
              <Scroll className="w-4 h-4" />
              <span>A Philippine Novel by Jose Rizal</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">
              Noli Me Tangere
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 font-light italic">
              "Touch Me Not"
            </p>
            <p className="text-lg text-amber-100/80 max-w-2xl mx-auto leading-relaxed">
              The novel that sparked a revolution. Published in 1887, this masterpiece 
              exposed the injustices of Spanish colonial rule in the Philippines and 
              inspired a nation to fight for freedom.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                onClick={() => setCurrentView('chapters')}
                className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-6 text-lg font-medium"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read the Novel
              </Button>
              <Button
                onClick={() => setCurrentView('characters')}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-medium"
              >
                <Users className="w-5 h-5 mr-2" />
                Meet the Characters
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-50 to-transparent" />
      </div>

      {/* Features Section */}
      <div className="bg-amber-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">63 Chapters</h3>
              <p className="text-gray-600 leading-relaxed">
                Read all 63 chapters of this groundbreaking novel, from "A Social Gathering" 
                to the tragic "Christmas Eve" conclusion.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Rich Characters</h3>
              <p className="text-gray-600 leading-relaxed">
                Meet Crisostomo Ibarra, Maria Clara, Elias, and the many other characters 
                who bring this story of colonial Philippines to life.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-amber-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">A Love Story</h3>
              <p className="text-gray-600 leading-relaxed">
                At its heart, Noli Me Tangere is a tragic love story set against the 
                backdrop of social injustice and colonial oppression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif text-gray-800 italic leading-relaxed mb-6">
            "I die without seeing the dawn brighten over my native land. 
            You who have it to see, welcome it—and forget not those who 
            fell during the night."
          </blockquote>
          <cite className="text-gray-500 not-italic">— Elias, Noli Me Tangere</cite>
        </div>
      </div>

      {/* About the Book Section */}
      <div className="bg-amber-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">About the Novel</h2>
              <div className="space-y-4 text-amber-100 leading-relaxed">
                <p>
                  Published in Berlin in 1887, <em>Noli Me Tangere</em> (Latin for 
                  "Touch Me Not") was the first major artistic manifestation of Asian 
                  resistance to European colonialism.
                </p>
                <p>
                  The novel exposed the corruption and abuse of power by Spanish friars 
                  and colonial officials, while also critiquing the complacency and 
                  collaboration of elements of Filipino society.
                </p>
                <p>
                  Rizal's work was so powerful that it was banned in the Philippines, 
                  and possession of a copy was punishable by imprisonment or exile. 
                  Despite this, the novel spread throughout the archipelago, inspiring 
                  a generation of Filipino nationalists.
                </p>
              </div>
              <Button
                onClick={() => setCurrentView('about')}
                variant="outline"
                className="mt-6 border-white/30 text-white hover:bg-white/10"
              >
                Learn More About Jose Rizal
              </Button>
            </div>
            <div className="bg-amber-800/50 rounded-xl p-8">
              <h3 className="text-xl font-serif font-bold mb-4">Novel Facts</h3>
              <ul className="space-y-3 text-amber-100">
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 font-bold">1887</span>
                  <span>First published in Berlin, Germany</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 font-bold">63</span>
                  <span>Chapters plus an epilogue</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 font-bold">Spanish</span>
                  <span>Original language of composition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-300 font-bold">Banned</span>
                  <span>In the Philippines by Spanish authorities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">
            Noli Me Tangere by Jose Rizal • A cornerstone of Philippine literature
          </p>
        </div>
      </footer>
    </div>
  );

  // Chapters List View
  const ChaptersView = () => (
    <div className="min-h-screen bg-amber-50/50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">All 63 Chapters</h1>
          <p className="text-gray-600">Read through the complete novel chapter by chapter</p>
        </div>
        
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search chapters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {filteredChapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => handleChapterClick(chapter.id)}
              className="bg-white rounded-lg p-6 text-left hover:shadow-md transition-shadow border border-amber-100"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-amber-600">Chapter {chapter.id}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-lg font-serif font-semibold text-gray-900">{chapter.title}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{chapter.summary}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Chapter Detail View
  const ChapterDetailView = () => {
    if (!currentChapter) return null;
    
    return (
      <div className="min-h-screen bg-amber-50/30">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              onClick={() => setCurrentView('chapters')}
              className="text-gray-600"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              All Chapters
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateChapter('prev')}
                disabled={selectedChapter === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm text-gray-600 px-2">
                {selectedChapter} / 63
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateChapter('next')}
                disabled={selectedChapter === 63}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chapter Content */}
          <article className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white px-8 py-12">
              <div className="text-center">
                <p className="text-amber-200 text-sm uppercase tracking-wider mb-2">Chapter {currentChapter.id}</p>
                <h1 className="text-3xl md:text-4xl font-serif font-bold">{currentChapter.title}</h1>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              {/* Summary Box */}
              <div className="bg-amber-50 rounded-lg p-6 mb-8 border-l-4 border-amber-400">
                <h3 className="text-sm font-semibold text-amber-800 uppercase tracking-wider mb-2">Summary</h3>
                <p className="text-amber-900 leading-relaxed">{currentChapter.summary}</p>
              </div>
              
              {/* Chapter Text */}
              <div className="prose prose-lg max-w-none">
                {currentChapter.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>

          {/* Chapter Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => navigateChapter('prev')}
              disabled={selectedChapter === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              {selectedChapter > 1 && (
                <span className="hidden sm:inline">
                  Ch. {selectedChapter - 1}: {chaptersData.find(c => c.id === selectedChapter - 1)?.title}
                </span>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={() => navigateChapter('next')}
              disabled={selectedChapter === 63}
              className="flex items-center gap-2"
            >
              {selectedChapter < 63 && (
                <span className="hidden sm:inline">
                  Ch. {selectedChapter + 1}: {chaptersData.find(c => c.id === selectedChapter + 1)?.title}
                </span>
              )}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  // Characters View
  const CharactersView = () => (
    <div className="min-h-screen bg-amber-50/50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Characters</h1>
          <p className="text-gray-600">Meet the memorable characters of Noli Me Tangere</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search characters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((character) => (
            <Dialog key={character.id}>
              <DialogTrigger asChild>
                <button className="bg-white rounded-lg p-6 text-left hover:shadow-lg transition-all border border-amber-100">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-serif font-semibold text-gray-900">{character.name}</h3>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      {character.role}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">{character.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {character.traits.slice(0, 3).map((trait) => (
                      <span key={trait} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-serif">{character.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-amber-100 text-amber-800">{character.role}</Badge>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{character.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Character Traits</h4>
                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait) => (
                        <span key={trait} className="text-sm px-3 py-1 bg-amber-50 text-amber-800 rounded-full">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Significance</h4>
                    <p className="text-gray-700 leading-relaxed">{character.significance}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );

  // About View
  const AboutView = () => (
    <div className="min-h-screen bg-amber-50/50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">About Jose Rizal</h1>
        
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-amber-100">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">The Author</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                José Protasio Rizal Mercado y Alonso Realonda (June 19, 1861 – December 30, 1896) 
                was a Filipino nationalist, writer, and polymath during the tail end of the Spanish 
                colonial period of the Philippines. He is considered one of the greatest heroes of 
                the Philippines and is credited as one of the pioneers of the Philippine Revolution.
              </p>
              <p className="leading-relaxed mb-4">
                An ophthalmologist by profession, Rizal became a writer and a key member of the 
                Filipino Propaganda Movement, which advocated political reforms for the colony under 
                Spain. His novels, <em>Noli Me Tangere</em> (1887) and <em>El Filibusterismo</em> 
                (1891), exposed the injustices of Spanish colonial rule and inspired a generation 
                of Filipino nationalists.
              </p>
              <p className="leading-relaxed">
                Rizal was executed by the Spanish colonial government in 1896 for the crime of 
                rebellion after the outbreak of the Philippine Revolution. His execution only 
                fueled the revolutionary movement, and he is now remembered as the national hero 
                of the Philippines.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-amber-100">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Historical Context</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                <em>Noli Me Tangere</em> was written during a time of growing unrest in the Philippines. 
                The Spanish had ruled the islands for over 300 years, and during that time, the 
                Philippines had been administered by Spain through Mexico. The system was characterized 
                by the power of the Spanish friars, who controlled not only religious life but also 
                education, local politics, and the economy.
              </p>
              <p className="leading-relaxed mb-4">
                The novel exposes the corruption and abuse of power by the Spanish friars, the 
                ignorance and superstition fostered by the colonial education system, and the 
                racial discrimination faced by Filipinos (called "Indios") in their own country. 
                It also critiques the Filipino elite who collaborated with the colonial system 
                and the masses who accepted their oppression without resistance.
              </p>
              <p className="leading-relaxed">
                Despite being banned in the Philippines, copies of <em>Noli Me Tangere</em> were 
                smuggled into the country and circulated widely. The novel helped awaken Filipino 
                national consciousness and inspired the Propaganda Movement, which sought reforms 
                from Spain. When peaceful reform proved impossible, it helped inspire the Philippine 
                Revolution of 1896.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-amber-100">
            <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Themes and Significance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Colonial Oppression</h3>
                <p className="text-gray-600 text-sm">
                  The novel exposes the abuses of Spanish colonial rule, particularly the power 
                  of the friars who controlled every aspect of Filipino life.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Social Injustice</h3>
                <p className="text-gray-600 text-sm">
                  Rizal depicts the vast gap between the rich and poor, the powerful and the 
                  powerless, and the injustice of a system that privileged birth over merit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Education and Enlightenment</h3>
                <p className="text-gray-600 text-sm">
                  The novel argues for the importance of education in achieving progress and 
                  freedom, and critiques the ignorance fostered by colonial rule.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Love and Sacrifice</h3>
                <p className="text-gray-600 text-sm">
                  At its heart, the novel is a love story set against a backdrop of social 
                  injustice, showing how personal happiness is destroyed by systemic oppression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-amber-100 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            <button
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-2"
            >
              <BookOpen className="w-6 h-6 text-amber-800" />
              <span className="font-serif font-bold text-amber-900 hidden sm:inline">Noli Me Tangere</span>
            </button>
          </div>
          
          <nav className="hidden lg:flex items-center gap-1">
            <Button
              variant={currentView === 'home' ? 'secondary' : 'ghost'}
              onClick={() => setCurrentView('home')}
              className={currentView === 'home' ? 'bg-amber-100 text-amber-900' : ''}
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button
              variant={currentView === 'chapters' || currentView === 'chapter-detail' ? 'secondary' : 'ghost'}
              onClick={() => setCurrentView('chapters')}
              className={currentView === 'chapters' || currentView === 'chapter-detail' ? 'bg-amber-100 text-amber-900' : ''}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Chapters
            </Button>
            <Button
              variant={currentView === 'characters' ? 'secondary' : 'ghost'}
              onClick={() => setCurrentView('characters')}
              className={currentView === 'characters' ? 'bg-amber-100 text-amber-900' : ''}
            >
              <Users className="w-4 h-4 mr-2" />
              Characters
            </Button>
            <Button
              variant={currentView === 'about' ? 'secondary' : 'ghost'}
              onClick={() => setCurrentView('about')}
              className={currentView === 'about' ? 'bg-amber-100 text-amber-900' : ''}
            >
              <Info className="w-4 h-4 mr-2" />
              About
            </Button>
          </nav>

          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Desktop Sidebar */}
      <div className="flex">
        <aside className="hidden lg:block w-72 fixed left-0 top-[57px] bottom-0 border-r border-amber-100 bg-white">
          <SidebarContent />
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-72">
          {currentView === 'home' && <HomeView />}
          {currentView === 'chapters' && <ChaptersView />}
          {currentView === 'chapter-detail' && <ChapterDetailView />}
          {currentView === 'characters' && <CharactersView />}
          {currentView === 'about' && <AboutView />}
        </main>
      </div>
    </div>
  );
}

export default App;
