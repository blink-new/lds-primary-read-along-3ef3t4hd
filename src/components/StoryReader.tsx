import { useState, useCallback } from 'react';
import { Story } from '../types/Story';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Home } from 'lucide-react';

interface StoryReaderProps {
  story: Story;
  onBack: () => void;
}

export function StoryReader({ story, onBack }: StoryReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const progress = ((currentPage + 1) / story.pages.length) * 100;

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate text highlighting
      setIsHighlighted(true);
      setTimeout(() => setIsHighlighted(false), 3000);
    }
  }, [isPlaying]);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setIsPlaying(false);
    }
  }, [currentPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < story.pages.length - 1) {
      setCurrentPage(currentPage + 1);
      setIsPlaying(false);
    }
  }, [currentPage, story.pages.length]);

  const currentStoryPage = story.pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Library</span>
              </Button>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-lg font-semibold text-primary">{story.title}</h1>
                <p className="text-sm text-muted-foreground">
                  Page {currentPage + 1} of {story.pages.length}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Story Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img
                  src={currentStoryPage.image}
                  alt={`Page ${currentPage + 1} illustration`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Story Text and Controls */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div 
                  className={`text-lg leading-relaxed ${
                    isHighlighted ? 'highlight-text' : ''
                  } transition-all duration-300`}
                >
                  {currentStoryPage.text}
                </div>
              </CardContent>
            </Card>

            {/* Audio Controls */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="flex items-center space-x-2"
                  >
                    <SkipBack className="w-5 h-5" />
                    <span className="hidden sm:inline">Previous</span>
                  </Button>

                  <Button
                    size="lg"
                    onClick={handlePlayPause}
                    className="flex items-center space-x-2 bg-primary hover:bg-primary/90 px-8"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-5 h-5" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Play</span>
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleNextPage}
                    disabled={currentPage === story.pages.length - 1}
                    className="flex items-center space-x-2"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <SkipForward className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Page Navigation */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Page Navigation
                  </span>
                  <div className="flex space-x-1">
                    {story.pages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentPage(index);
                          setIsPlaying(false);
                        }}
                        className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                          index === currentPage
                            ? 'bg-primary text-white'
                            : 'bg-muted hover:bg-muted-foreground/20'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Completion Message */}
            {currentPage === story.pages.length - 1 && (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Great job reading!
                  </h3>
                  <p className="text-green-700 mb-4">
                    You finished "{story.title}"! You're becoming a great reader.
                  </p>
                  <Button
                    onClick={onBack}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Read Another Story
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}