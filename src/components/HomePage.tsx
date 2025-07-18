import { useState } from 'react';
import { Story } from '../types/Story';
import { mockStories, storyCategories } from '../data/mockStories';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, BookOpen, Star } from 'lucide-react';

interface HomePageProps {
  onStorySelect: (story: Story) => void;
}

export function HomePage({ onStorySelect }: HomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredStories = selectedCategory === 'all' 
    ? mockStories 
    : mockStories.filter(story => story.category === selectedCategory);

  const getAgeGroupColor = (ageGroup: string) => {
    switch (ageGroup) {
      case 'nursery': return 'bg-green-100 text-green-800';
      case 'sunbeam': return 'bg-yellow-100 text-yellow-800';
      case 'ctr': return 'bg-blue-100 text-blue-800';
      case 'valiant': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '⭐';
      case 'medium': return '⭐⭐';
      case 'hard': return '⭐⭐⭐';
      default: return '⭐';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">LDS Primary Read-Along</h1>
                <p className="text-sm text-muted-foreground">Interactive stories for primary children</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-primary">Learn • Read • Grow</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-primary mb-4">Choose a Category</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="h-auto p-4"
            >
              <div className="text-center">
                <div className="text-2xl mb-1">📚</div>
                <div className="font-medium">All Stories</div>
              </div>
            </Button>
            {storyCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="h-auto p-4"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{category.icon}</div>
                  <div className="font-medium">{category.name}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <Card 
              key={story.id} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 animate-fade-in"
              onClick={() => onStorySelect(story)}
            >
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={getAgeGroupColor(story.ageGroup)}>
                    {story.ageGroup}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {story.title}
                  </CardTitle>
                  <span className="text-lg">{getDifficultyIcon(story.difficulty)}</span>
                </div>
                <CardDescription className="text-sm">
                  {story.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{story.readingTime} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{story.pages.length} pages</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-primary hover:bg-primary/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    onStorySelect(story);
                  }}
                >
                  Start Reading
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-muted-foreground mb-2">No stories found</h3>
            <p className="text-muted-foreground">Try selecting a different category.</p>
          </div>
        )}
      </main>
    </div>
  );
}