export const questions = [
  {
    key: "role",
    questionText: "What best describes your role?",
    selectOptions: "singular",
    answerOptions: [
      {
        answerText: "Teacher",
        nextStepKey: "explore_topics",
      },
      {
        answerText: "Administrator",
        nextStepKey: "explore_topics",
      },
      { answerText: "Donor", nextStepKey: "donor_entry" },
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
    selectOptions: "multiple",
    nextStepKey: "events",
    answerOptions: [
      { answerText: "Democracy & Civic Engagement" },
      { answerText: "Antisemitism" },
      { answerText: "The Holocaust" },
      { answerText: "Culture & Identity" },
      { answerText: "Human & Civil Rights" },
      { answerText: "Racism" },
    ],
  },
  {
    key: "events",
    questionText: "What type of events are you interested in?",
    selectOptions: "multiple",
    answerOptions: [
      {
        answerText: "Professional Development",
      },
      {
        answerText: "Community Events",
      },
      { answerText: "In-Person Benefits" },
      {
        answerText: "On-Demand Events",
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
    key: "Democracy & Civic Engagement",
    items: [
      {
        title:
          "Fostering Civil Discourse: Difficult Classroom Conversations in a Diverse Democracy",
        introduction:
          "A must-have guide to teaching civil discourse in the classroom",
        url: "https://www.facinghistory.org/resource-library/fostering-civil-discourse-difficult-classroom-conversations-diverse-democracy",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/scale_800/public/2024-09/Fostering_Civil_Discourse_Cover_2024.webp",
      },
      {
        title: "Facing Ferguson: News Literacy in a Digital Age",
        introduction: "Teach students to think critically in the digital age",
        url: "https://www.facinghistory.org/resource-library/facing-ferguson-news-literacy-digital-age",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-06/2019_SL_190522_0466_FH2101333.webp?h=0f4230fa&itok=eqrcsWPP",
      },
      {
        title: "10 Questions for Young Changemakers",
        introduction:
          "Inspire change and youth activism with this thought-provoking unit",
        url: "https://www.facinghistory.org/resource-library/10-questions-young-changemakers",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-06/2012_131BullySummit2012LA131_FH116219.webp?h=265e640d&itok=EGi4xRI6",
      },
      {
        title: "The Reconstruction Era and the Fragility of Democracy",
        introduction:
          "Delve into Reconstruction and its legacy on today's democracy",
        url: "https://www.facinghistory.org/resource-library/reconstruction-era-and-fragility-democracy-0",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-07/Recon_Crop.webp?h=3d25abbd&itok=RdjE9JNp",
      },
      {
        title: "Current Events Toolkit",
        introduction:
          "Strengthen your skills for teaching current events in the classroom",
        url: "https://www.facinghistory.org/resource-library/current-events-toolkit",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-06/2019_SL_190522_0595_FH2101381.webp?h=0f4230fa&itok=61tSnbBo",
      },
    ],
  },
  {
    key: "The Holocaust",
    items: [
      {
        title:
          "Teaching Holocaust and Human Behavior",
        introduction:
          "A quintessential Facing History course on the power and impact of choices",
        url: "https://www.facinghistory.org/resource-library/teaching-holocaust-human-behavior",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-07/2022_TeachingHolocaustandHumanBehaviorcover%28clip%29_FH2174520.webp?h=ec4f9743&itok=MfM1HpQf",
      },
      {
        title: "Survivors and Witnesses: Video Testimony",
        introduction: "Engage with powerful testimonies from Holocaust survivors",
        url: "https://www.facinghistory.org/resource-library/survivors-witnesses-video-testimony",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-08/Nate_Leipciger_Survivor_Testimony_Hero_Banner.webp?h=287014c6&itok=fw-mRusM",
      },
      {
        title: "Teaching Schindler's List",
        introduction:
          "Integrate a profound Holocaust film into your curriculum",
        url: "https://www.facinghistory.org/resource-library/teaching-schindlers-list",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-12/SCHINDLERS_LIST_8x12_image_0.webp?h=db7f0bb4&itok=3Nftd2bE",
      },
      {
        title: "How Should We Remember?",
        introduction:
          "Lead students in analyzing memorials and creating their own",
        url: "https://www.facinghistory.org/resource-library/how-should-we-remember",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-05/Ch11_image15_Medium_res.webp?h=c6d0d1c4&itok=bUPwZAg6",
      },
      {
        title: "Current Events Toolkit",
        introduction:
          "Strengthen your skills for teaching current events in the classroom",
        url: "https://www.facinghistory.org/resource-library/current-events-toolkit",
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2022-06/2019_SL_190522_0595_FH2101381.webp?h=0f4230fa&itok=61tSnbBo",
      },
    ],
  },
  {
    key: "Professional Development",
    items: [
      {
        title:
          "Borders and Belonging: An All Community Read Authors Event",
        introduction:
          "Join us for a virtual conversation with authors Safia Elhillo and Reyna Grande as part of our 2024-2025 All Community Read.",
        url: "https://www.facinghistory.org/learning-events/borders-belonging-all-community-read-authors-event",
        date: 'March 6, 2025',
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2024-01/Group_of_teenagers_reading_together.webp?h=9d5da6b6&itok=PSyZCr66",
      },
      {
        title: "Beyond a Single Story: Exploring the Diversity of Jewish Identity",
        introduction: "This webinar will elevate authentic stories of joy, diversity, and cultural texture from within the Jewish community.",
        url: "https://www.facinghistory.org/learning-events/beyond-single-story-exploring-diversity-jewish-identity",
        date: 'March 20, 2025',
        image:
          "https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_900_707_2x/public/2024-05/JEPlesson1.webp?h=a49d782d&itok=PdShxckf",
      },
    ],
  },
];
