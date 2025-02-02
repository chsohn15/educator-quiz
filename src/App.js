import React, { useState } from "react";
import { Link } from '@aws-amplify/ui-react';

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
          url: 'https://www.facinghistory.org/resource-library/holocaust-human-behavior-0'
        },
        { answerText: "Attend an event to learn how to teach the course in my classroom",
          nextStepKey: 'url',
          url: 'https://www.facinghistory.org/learning-events/holocaust-human-behavior-winter-2025-online-course',
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

  function handleAnswerClick(nextStepKey) {
    setQuestionKey(nextStepKey);
  }

  function displayButton (answer) {
    let button;
    if (answer.nextStepKey === 'url') {
      let url = answer.url;
      button = <button><Link href={url}>{answer.answerText}</Link></button>
    }
    else {
      button = <button onClick={() => handleAnswerClick(answer.nextStepKey)}>{answer.answerText}</button>;
    }
    return button
  }

  return (
    <div className="app montserrat">
      <div className="question-wrapper">
        {false ? (
          <div className="score-section">
            You scored 1 out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              {/* <div className="question-count">
                <span>Question 1</span>/{questions.length}
              </div> */}
              <div className="question-text">
                {findPrompt(questions, questionKey)}
              </div>
            </div>
            <div className="answer-section">
              {findAnswers(questions, questionKey).map((answer) => (
                displayButton(answer)
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
