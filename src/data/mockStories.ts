import { Story, StoryCategory } from '../types/Story';

export const storyCategories: StoryCategory[] = [
  {
    id: 'scripture',
    name: 'Scripture Stories',
    description: 'Learn from the great stories in the scriptures',
    icon: '📖',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'prophet',
    name: 'Prophet Stories',
    description: 'Stories about modern-day prophets and pioneers',
    icon: '⭐',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'gospel',
    name: 'Gospel Principles',
    description: 'Learn important gospel principles through stories',
    icon: '💝',
    color: 'bg-pink-100 text-pink-800'
  }
];

export const mockStories: Story[] = [
  {
    id: 'noahs-ark',
    title: "Noah's Ark",
    category: 'scripture',
    ageGroup: 'sunbeam',
    difficulty: 'easy',
    readingTime: 5,
    description: 'Learn about Noah and how he obeyed God by building an ark.',
    coverImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
    pages: [
      {
        id: 1,
        text: 'Long ago, there lived a good man named Noah. God asked Noah to build a big boat called an ark.',
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop'
      },
      {
        id: 2,
        text: 'Noah obeyed God and built the ark. He gathered two of every kind of animal to keep them safe.',
        image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop'
      },
      {
        id: 3,
        text: 'It rained for many days and nights. But Noah, his family, and all the animals were safe in the ark.',
        image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&h=400&fit=crop'
      },
      {
        id: 4,
        text: 'When the rain stopped, God put a beautiful rainbow in the sky as a promise to Noah.',
        image: 'https://images.unsplash.com/photo-1419833479618-c595710a1b8c?w=600&h=400&fit=crop'
      }
    ]
  },
  {
    id: 'david-goliath',
    title: 'David and Goliath',
    category: 'scripture',
    ageGroup: 'ctr',
    difficulty: 'medium',
    readingTime: 6,
    description: 'The story of young David who trusted in God to defeat the giant Goliath.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    pages: [
      {
        id: 1,
        text: 'David was a young shepherd boy who loved God and took care of his sheep.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      },
      {
        id: 2,
        text: 'A giant named Goliath challenged the army of Israel. Everyone was afraid of him.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      },
      {
        id: 3,
        text: 'David said, "I will fight Goliath because God will help me." He took his sling and five smooth stones.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      },
      {
        id: 4,
        text: 'With God\'s help, David defeated Goliath with just one stone. God helped David because he had faith.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      }
    ]
  },
  {
    id: 'first-vision',
    title: "Joseph Smith's First Vision",
    category: 'prophet',
    ageGroup: 'ctr',
    difficulty: 'medium',
    readingTime: 7,
    description: 'Learn about when young Joseph Smith prayed and saw Heavenly Father and Jesus Christ.',
    coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    pages: [
      {
        id: 1,
        text: 'Joseph Smith was 14 years old and wanted to know which church was true.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
      },
      {
        id: 2,
        text: 'Joseph read in the Bible that if he lacked wisdom, he should ask God.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
      },
      {
        id: 3,
        text: 'Joseph went into the woods to pray. A bright light appeared, and he saw Heavenly Father and Jesus Christ.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
      },
      {
        id: 4,
        text: 'They told Joseph not to join any church because the true church would be restored through him.',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
      }
    ]
  },
  {
    id: 'pioneer-children',
    title: 'Pioneer Children',
    category: 'prophet',
    ageGroup: 'sunbeam',
    difficulty: 'easy',
    readingTime: 4,
    description: 'Learn about the brave pioneer children who walked to Utah.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    pages: [
      {
        id: 1,
        text: 'Long ago, pioneer children had to leave their homes and walk to a new place called Utah.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      },
      {
        id: 2,
        text: 'The children walked many miles every day. They were brave and helped their families.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      },
      {
        id: 3,
        text: 'Sometimes it was hard, but they sang songs and played games to stay happy.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      },
      {
        id: 4,
        text: 'Finally, they reached Utah and built a new home. They were grateful for God\'s help.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      }
    ]
  },
  {
    id: 'being-kind',
    title: 'Being Kind',
    category: 'gospel',
    ageGroup: 'nursery',
    difficulty: 'easy',
    readingTime: 3,
    description: 'Learn how being kind to others makes Jesus happy.',
    coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
    pages: [
      {
        id: 1,
        text: 'Jesus wants us to be kind to everyone we meet.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop'
      },
      {
        id: 2,
        text: 'We can be kind by sharing our toys and helping our friends.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop'
      },
      {
        id: 3,
        text: 'When we are kind, we feel happy inside and make others happy too.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop'
      },
      {
        id: 4,
        text: 'Jesus smiles when we choose to be kind every day.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop'
      }
    ]
  },
  {
    id: 'learning-to-pray',
    title: 'Learning to Pray',
    category: 'gospel',
    ageGroup: 'sunbeam',
    difficulty: 'easy',
    readingTime: 4,
    description: 'Learn how to talk to Heavenly Father through prayer.',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    pages: [
      {
        id: 1,
        text: 'Heavenly Father loves us and wants us to talk to Him through prayer.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      },
      {
        id: 2,
        text: 'We can pray anywhere - at home, at church, or even outside in nature.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      },
      {
        id: 3,
        text: 'We can thank Heavenly Father for our blessings and ask for help when we need it.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      },
      {
        id: 4,
        text: 'When we pray with a sincere heart, Heavenly Father hears and answers our prayers.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      }
    ]
  }
];