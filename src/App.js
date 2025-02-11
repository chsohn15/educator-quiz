import React, { useState } from "react";
import { Link, Heading } from "@aws-amplify/ui-react";
import RecommendationsPage from './components/recommendations/RecommendationsPage.js'
import QuizPage from './components/quiz/QuizPage.js'

import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {

  return (
    <div>
    <Router>
        <Routes>
          {/* <Route path="/recommendations" component={RecommendationsPage} state={{ role: role }}/> */}
          <Route path="/recommendations" element={<RecommendationsPage />}/>
          <Route path="/" element={<QuizPage />}/>
        </Routes>
      </Router>
    </div>
  );
}
