import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function RecommendationsPage(props) {
  // Get props from Link
  const location = useLocation();
//   const { title, format, image_url, film_locations } =
//     location.state.production;
    console.log(location.state);
  return (
    <div>
      <h1>Welcome to Facing History</h1>
    </div>
  );
}

export default RecommendationsPage;