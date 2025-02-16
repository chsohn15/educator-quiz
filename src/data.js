export const questions = [
    {
      key: "role",
      questionText: "What best describes your role?",
      selectOptions: 'singular',
      answerOptions: [
        {
          answerText: "Teacher",
          nextStepKey: "explore_topics",
        },
        {
          answerText: "Administrator",
          nextStepKey: "explore_topics",
        },
        { answerText: "Donor", nextStepKey: "donor_entry"},
        {
          answerText: "Student",
          nextStepKey: "explore_topics",
        },
        {
          answerText: "Lifelong Learner",
          nextStepKey: "explore_topics",
        },
      ],
    },
    // {
    //   key: "educator_entry",
    //   questionText: "What best describes what you are looking for?",
    //   answerOptions: [
    //     {
    //       answerText: "Learn more about Facing History's foundational course",
    //       nextStepKey: "hhb",
    //     },
    //     {
    //       answerText: "I would like to browse by topic",
    //       nextStepKey: "explore_topics",
    //     },
    //     {
    //       answerText: "I would like to see your most popular resources",
    //       nextStepKey: "most_popular_resource",
    //     },
    //     {
    //       answerText: "I would like to look up resources by search term",
    //       isCorrect: false,
    //     },
    //   ],
    // },
    {
      key: "explore_topics",
      questionText: "Which topics would you like to explore more?",
      selectOptions: 'multiple',
      nextStepKey: "events",
      answerOptions: [
        { answerText: "Holocaust"},
        { answerText: "Democracy & Civic Engagement"},
        { answerText: "Antisemitism"},
        { answerText: "Culture & Identity"},
        { answerText: "Human & Civil Rights"},
        { answerText: "Racism"},
      ],
    },
    {
      key: "events",
      questionText: "What type of events are you interested in?",
      selectOptions: 'multiple',
      answerOptions: [
        {
          answerText: "Professional Development"
        },
        {
          answerText: "Community Events"
        },
        { answerText: "In-Person Benefits"},
        {
          answerText: "On-Demand Events"
        },
      ],
    },
    // {
    //   key: "hhb",
    //   questionText:
    //     "Facing History's foundational course is Holocaust and Human Behavior. It analyzes how human choices shaped the history of the Holocaust.",
    //   answerOptions: [
    //     { answerText: "Explore the Holocaust & Human Behavior Collection",
    //       nextStepKey: 'url',
    //       url: 'https://www.facinghistory.org/resource-library/holocaust-human-behavior'
    //     },
    //     { answerText: "Download the PDF of the course for free",
    //       nextStepKey: 'url',
    //       url: 'https://www.facinghistory.org/resource-library/holocaust-human-behavior-0'
    //     },
    //     { answerText: "Attend an event to learn how to teach the course in my classroom",
    //       nextStepKey: 'url',
    //       url: 'https://www.facinghistory.org/learning-events/holocaust-human-behavior-winter-2025-online-course',
    //     },
    //   ],
    // },
  ];

export const recommendations = [
  {
  key: 'Democracy & Civic Engagement',
  items: [
    { title: 'Fostering Civil Discourse: Difficult Classroom Conversations in a Diverse Democracy',
      introduction: 'A must-have guide to teaching civil discourse in the classroom',
      url: 'https://www.facinghistory.org/resource-library/fostering-civil-discourse-difficult-classroom-conversations-diverse-democracy',
      image: 'https://www.facinghistory.org/sites/default/files/styles/scale_800/public/2024-09/Fostering_Civil_Discourse_Cover_2024.webp',
    },
    { title: 'Facing Ferguson: News Literacy in a Digital Age',
      introduction: 'Teach students to think critically in the digital age',
      url: 'https://www.facinghistory.org/resource-library/facing-ferguson-news-literacy-digital-age',
      image: 'https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-06/2019_SL_190522_0466_FH2101333.webp?h=0f4230fa&itok=eqrcsWPP',
    },
    { title: '10 Questions for Young Changemakers',
      introduction: 'Inspire change and youth activism with this thought-provoking unit',
      url: 'https://www.facinghistory.org/resource-library/10-questions-young-changemakers',
      image: 'https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-06/2012_131BullySummit2012LA131_FH116219.webp?h=265e640d&itok=EGi4xRI6',
    },
    { title: 'The Reconstruction Era and the Fragility of Democracy',
      introduction: 'Delve into Reconstruction and its legacy on today\'s democracy',
      url: 'https://www.facinghistory.org/resource-library/reconstruction-era-and-fragility-democracy-0',
      image: 'https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-07/Recon_Crop.webp?h=3d25abbd&itok=RdjE9JNp',
    },
  ]
  }
]