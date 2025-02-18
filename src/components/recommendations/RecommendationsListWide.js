import { recommendations } from "../../data.js";

function RecommendationsListWide(props) {
  const eventPreference = props.eventPreference;

  function displayEventRecommendations(topic, recommendations) {
    let recObj = recommendations.filter(recommendation => recommendation.key === topic);
    const {items} = recObj[0];
    const list = items.map(item => 
        <div class="wide-card">
            <img class="wide-card__image" src={item.image} alt=""/>
            <div class="wide-card__text-wrapper">
              <h3 class="wide-card__title"><a href={item.url}>{item.title}</a></h3>
              <p class="wide-card__date">{item.date}</p>
              <p class="wide-card__introduction">{item.introduction}</p>
            </div>
        </div>
    );
    return list
  }

  return (
    <div className="list-wide">
        <h2>
            Which {eventPreference} {eventPreference === 'Professional Development' ? 'events' : ''} are happening soon?
        </h2>
        <div className="list-wide-wrapper">
          {displayEventRecommendations(eventPreference, recommendations)}
        </div>
    </div>
  );
}

export default RecommendationsListWide;