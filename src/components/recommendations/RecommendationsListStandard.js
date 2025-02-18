import { recommendations } from "../../data.js";

function RecommendationsListStandard(props) {
  const topic = props.topic;

  function displayTopicRecommendations(topic, recommendations) {
    let recObj = recommendations.filter(recommendation => recommendation.key === topic);
    const {items} = recObj[0];
    const list = items.map(item => 
        <div class="standard-card">
            <h3 class="standard-card__introduction">{item.introduction}</h3>
            <img class="standard-card__image" src={item.image} alt=""/>
            <h3 class="standard-card__title"><a href={item.url}>{item.title}</a></h3>
        </div>
    );
    return list
  }

  return (
    <div className="standard-list">
        <h2>
            {topic}
        </h2>
        <div className="standard-list-wrapper">
         {displayTopicRecommendations(topic, recommendations)}
        </div>
    </div>
  );
}

export default RecommendationsListStandard;