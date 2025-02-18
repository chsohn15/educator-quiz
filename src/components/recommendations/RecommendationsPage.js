import React from "react";
import { useLocation } from "react-router-dom";
import RecommendationsListStandard from './RecommendationsListStandard';
import RecommendationsListWide from './RecommendationsListWide';

function RecommendationsPage(props) {
  // Get props from Link
  const location = useLocation();
  const role = location.state.role.toLowerCase();
  const topics = location.state.topics;
  const eventPreferences = location.state.eventPreferences;

  function displayItemsWithCommas(items, item, index) {
    let displayedItem = "";
    if (items.length === 1) {
      displayedItem = `${item}.`;
    } else if (index === items.length - 1) {
      displayedItem = `and ${item}.`;
    } else if (index === items.length - 2) {
      displayedItem = `${item} `;
    } else {
      displayedItem = `${item}, `;
    }
    return displayedItem;
  }
  return (
    <div>
      <div class="introduction">
        <div class="introduction-text">
          <h1>Welcome to Facing History & Ourselves</h1>
          <p>Let us help you find resources that fit your role as a <strong>{role}</strong>.</p>
          <p>
            We've curated below a list of resources that match your interest in{" "}<strong>
            {topics.map((topic, index) => displayItemsWithCommas(topics, topic, index))}</strong>
          </p>
          <p>
            We've also recommended some popular events that match your interest in <strong>{eventPreferences.map((eventPreference, index) => displayItemsWithCommas(eventPreferences, eventPreference, index))}</strong> Sign up to attend or view an event today!
          </p>
        </div>
        <img class="introduction-image" src="https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_680_534_2x/public/2022-06/Facing-History_SJLA_033.webp?h=f2fcf546&itok=uW5UKnA6" alt=""/>
      </div>
      <div class="recommendations-wrapper">
        {topics.map(topic => <RecommendationsListStandard topic={topic}/>)}
        {eventPreferences.map(eventPreference => <RecommendationsListWide eventPreference={eventPreference}/>)}
      </div>
    </div>
  );
}

export default RecommendationsPage;
