import React, { useState } from "react";
import { Link, Heading } from "@aws-amplify/ui-react";
import { questions } from "../../data.js";
import RecommendationsPage from '../recommendations/RecommendationsPage.js';
import {
    BrowserRouter as Router,
    Link as ReactRouterLink,
    Routes,
    Route,
  } from "react-router-dom";

function QuizPage(props) {
    const [questionKey, setQuestionKey] = useState("role");
    const [role, setRole] = useState("");
    const [topics, setTopics] = useState([]);
    const [eventPreferences, setEventPreferences] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [selectedMultipleAnswers, setSelectedMultipleAnswers] = useState([]);
  
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
      // Update state based on selected answers
      let filteredArray = questions.filter(
        (question) => question.key === questionKey
      );
      let selectOptionType = filteredArray[0].selectOptions;
      if (selectOptionType === "singular") {
        setSelectedAnswer(answer.answerText);
      } else if (selectOptionType === "multiple") {
        setSelectedMultipleAnswers([
          ...selectedMultipleAnswers,
          answer.answerText,
        ]);
      }
      if (questionKey === "role") {
        setRole(answer.answerText);
      } else if (questionKey === "explore_topics") {
        setTopics([...topics, answer.answerText]);
      } else if (questionKey === "events") {
        setEventPreferences([...eventPreferences, answer.answerText]);
      }
    }
  
    function handleAnswerSelectDisplay(answerText, questionKey, questions) {
      let questionArrayItem = questions.filter(
        (question) => question.key === questionKey
      );
      let selectOptionType = questionArrayItem[0].selectOptions;
      let className = "";
      if (selectOptionType === "singular") {
        if (selectedAnswer === answerText) {
          className += "selected";
        }
      } else if (selectOptionType === "multiple") {
        for (let selectedAnswer of selectedMultipleAnswers) {
          if (selectedAnswer === answerText) {
            className += "selected";
          }
        }
      }
      return className;
    }
  
    function displayAnswerButton(answer, questionKey, questions) {
      let button;
      button = (
        <button
          className={handleAnswerSelectDisplay(
            answer.answerText,
            questionKey,
            questions
          )}
          onClick={() => handleAnswerClick(answer, questionKey, questions)}
        >
          {answer.answerText}
        </button>
      );
      return button;
    }
  
    function handleNextButtonClick(arr, keyName) {
      if (keyName === "events") {
      }
      let questionArrayItem = arr.filter((arrItem) => arrItem.key === keyName);
      let selectOptionType = questionArrayItem[0].selectOptions;
      if (selectOptionType === "multiple") {
        setQuestionKey(questionArrayItem[0].nextStepKey);
      } else {
        let answerOptions = questionArrayItem[0].answerOptions;
        let nextStep = answerOptions.filter(
          (answerOption) => answerOption.answerText == selectedAnswer
        );
        setQuestionKey(nextStep[0].nextStepKey);
      }
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
            {findAnswers(questions, questionKey).map((answer) =>
              displayAnswerButton(answer, questionKey, questions)
            )}
          </div>
          <div className="next-button-container">
            {questionKey == "events" ? (
            <ReactRouterLink 
                to='/recommendations'
                state={{ role: role, topics: topics, eventPreferences: eventPreferences }}
                component={Link}
            >
                View Your Recommendations
            </ReactRouterLink>
            ) : (
              <button
                onClick={() =>
                  handleNextButtonClick(questions, questionKey)
                }
                className="next-button"
              >
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
  </div>
  );
}

export default QuizPage;