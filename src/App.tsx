import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { StoryReader } from './components/StoryReader';
import { Story } from './types/Story';

function App() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleStorySelect = (story: Story) => {
    setSelectedStory(story);
  };

  const handleBackToHome = () => {
    setSelectedStory(null);
  };

  return (
    <div className="App">
      {selectedStory ? (
        <StoryReader story={selectedStory} onBack={handleBackToHome} />
      ) : (
        <HomePage onStorySelect={handleStorySelect} />
      )}
    </div>
  );
}

export default App;