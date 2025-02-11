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