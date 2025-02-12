import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function RecommendationsPage(props) {
  // Get props from Link
  const location = useLocation();
  const role = location.state.role.toLowerCase();
  const topics = location.state.topics;
  const eventPreferences = location.state.eventPreferences;
  console.log(eventPreferences);

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
    <div class="introduction">
      <div class="introduction-text">
        <h1>Welcome to Facing History</h1>
        <p>Let us help you find resources that fit your role as a {role}.</p>
        <p>
          We've curated below a list of resources that match your interest in{" "}
          {topics.map((topic, index) => displayItemsWithCommas(topics, topic, index))}
        </p>
        <p>
          We've also recommended some popular events that match your interest in {eventPreferences.map((eventPreference, index) => displayItemsWithCommas(eventPreferences, eventPreference, index))} Sign up to attend or view an event today!
        </p>
      </div>
      <img class="introduction-image" src="https://www.facinghistory.org/sites/default/files/styles/standard_hero_article_680_534_2x/public/2022-06/Facing-History_SJLA_033.webp?h=f2fcf546&itok=uW5UKnA6" />
    </div>
  );
}

export default RecommendationsPage;
