import React, { useState } from "react";
import { Link } from '@aws-amplify/ui-react';

export default function App() {
  const [questionKey, setQuestionKey] = useState("role");
  const [role, setRole] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedMultipleAnswers, setSelectedMultipleAnswers] = useState([]);

  const questions = [
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
      answerOptions: [
        { answerText: "Holocaust", isCorrect: true },
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

  function handleAnswerClick(answer, questionKey, questions) {
    let filteredArray = questions.filter((question) => question.key === questionKey);
    let selectOptionType = filteredArray[0].selectOptions;
    if (selectOptionType === 'singular') {
      setSelectedAnswer(answer.answerText);
    }
    else if (selectOptionType === 'multiple') {
      setSelectedMultipleAnswers([
        ...selectedMultipleAnswers,
        answer.answerText
      ]);
    }
    if (questionKey === 'role') {
      setRole(answer.answerText);
    }
    else if (questionKey === 'explore_topics') {
      setTopics([
        ...topics,
        answer.answerText
      ]);
    }
  }

  function handleAnswerSelectDisplay(answerText, questionKey, questions) {
    let filteredArray = questions.filter((question) => question.key === questionKey);
    let selectOptionType = filteredArray[0].selectOptions;
    let className = '';
    if (selectOptionType === 'singular') {
      if (selectedAnswer === answerText) {
        className += 'selected';
      }
    }
    else if (selectOptionType === 'multiple') {
      for (let selectedAnswer of selectedMultipleAnswers) {
        if (selectedAnswer === answerText) {
          className += 'selected';
        }
      }
    }
    return className;
  }

  function displayAnswerButton (answer, questionKey, questions) {
    let button;
    button = <button className={handleAnswerSelectDisplay(answer.answerText, questionKey, questions)} onClick={() => handleAnswerClick(answer, questionKey, questions)}>{answer.answerText}</button>
    // if (answer.nextStepKey === 'url') {
    //   let url = answer.url;
      // button = <button><Link>{answer.answerText}</Link></button>
    // }
    // else {
      //  button = <button onClick={() => handleAnswerClick(answer.nextStepKey)}>{answer.answerText}</button>;
    // }
    return button
  }

  function handleNextButtonClick (arr, keyName) {
    let filteredArray = arr.filter((arrItem) => arrItem.key === keyName);
    let answerOptions = filteredArray[0].answerOptions;
    let nextStep = answerOptions.filter((answerOption) => answerOption.answerText == selectedAnswer);
    setQuestionKey(nextStep[0].nextStepKey);
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
                displayAnswerButton(answer, questionKey, questions)
              ))}
            </div>
            <div className="next-button-container">
              <button onClick={() => handleNextButtonClick(questions, questionKey)} className="next-button">
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
