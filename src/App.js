import React, { useState } from "react";

export default function App() {
  const [questionKey, setQuestionKey] = useState("role");

  const questions = [
    {
      key: "role",
      questionText: "What is your role?",
      endpoint: false,
      answerOptions: [
        {
          answerText: "Teacher",
          nextStepKey: "educator_entry",
        },
        {
          answerText: "Administrator",
          nextStepKey: "educator_entry",
        },
        { answerText: "Donor", nextStepKey: "donor_entry", endpoint: false },
        {
          answerText: "Student",
          nextStepKey: "educator_entry",
        },
        {
          answerText: "Lifelong Learner",
          nextStepKey: "educator_entry",
        },
      ],
    },
    {
      key: "educator_entry",
      questionText: "What best describes what you are looking for?",
      endpoint: false,
      answerOptions: [
        {
          answerText: "Learn more about Facing History's foundational course",
          nextStepKey: "hhb",
          endpoint: true,
        },
        {
          answerText: "I would like to browse by topic",
          nextStepKey: "explore_topics",
        },
        {
          answerText: "I would like to see your most popular resources",
          nextStepKey: "most_popular_resource",
        },
        {
          answerText: "I would like to look up resources by search term",
          isCorrect: false,
        },
      ],
    },
    {
      key: "explore_topics",
      questionText: "Which topic would you like to explore more?",
      endpoint: false,
      answerOptions: [
        { answerText: "Democracy & Civic Engagement", isCorrect: true },
        { answerText: "Antisemitism", isCorrect: false },
        { answerText: "Culture & Identity", isCorrect: false },
        { answerText: "Human & Civil Rights", isCorrect: false },
        { answerText: "Racism", isCorrect: false },
      ],
    },
    {
      key: "hhb",
      questionText:
        "Facing History's foundational course is Holocaust and Human Behavior. It analyzes how human choices shaped the history of the Holocaust.",
      endpoint: true,
      answerOptions: [
        { answerText: "Explore the Holocaust & Human Behavior Collection",
          nextStepKey: 'url',
          url: 'https://www.facinghistory.org/resource-library/holocaust-human-behavior'
        },
        { answerText: "Download the PDF of the course for free",
          nextStepKey: 'url',
          url: 'https://www.facinghistory.org/resource-library/holocaust-human-behavior'
        },
        { answerText: "Attend an event to learn how to teach the course in your classroom",
          nextStepKey: 'url',
          url: 'https://www.facinghistory.org/learning-events?keys=holocaust+and+human+behavior&items_per_page=12',
        },
      ],
    },
  ];

  function findPrompt(arr, keyName) {
    let filteredArray = arr.filter((arrItem) => arrItem.key === keyName);
    let prompt = filteredArray[0].questionText;
    return prompt;
  }

  function findAnswers(arr, keyName) {
    let filteredArray = arr.filter((arrItem) => arrItem.key === keyName);
    let answers = filteredArray[0].answerOptions;
    return answers;
  }

  function findUrl(arr, keyName) {
    let filteredArray = arr.filter((arrItem) => arrItem.key === keyName);
    let url = filteredArray[0].url;
    return url;
  }

  function handleAnswerClick(nextStepKey) {
    setQuestionKey(nextStepKey);
  }

  function displayNextStep (questionKey) {
    let nextStep;
    if (questionKey == 'url') {
      let url = findUrl(questions, questionKey);
      // nextStep = <a href={url}
    }
  }

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {false ? (
        <div className="score-section">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">
              {findPrompt(questions, questionKey)}
            </div>
          </div>
          <div className="answer-section">
            {findAnswers(questions, questionKey).map((answer) => (
              <button onClick={() => handleAnswerClick(answer.nextStepKey)}>
                {answer.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
