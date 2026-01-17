import "./ActivityCard.css";
import ellipsis from "/images/icon-ellipsis.svg";

const cardStyles = {
  Work: { color: "hsl(15, 100%, 70%)", icon: "icon-work.svg" },
  Play: { color: "hsl(195, 74%, 62%)", icon: "icon-play.svg" },
  Study: { color: "hsl(348, 100%, 68%)", icon: "icon-study.svg" },
  Exercise: { color: "hsl(145, 58%, 55%)", icon: "icon-exercise.svg" },
  Social: { color: "hsl(264, 64%, 52%)", icon: "icon-social.svg" },
  "Self Care": { color: "hsl(43, 84%, 65%)", icon: "icon-self-care.svg" },
};

const labelMap = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

const ActivityCard = ({ data, timeframe }) => {
  const title = data.title;
  const timeframes = data.timeframes;

  const { color, icon } = cardStyles[title];

  // 현재 선택된 timeframes이 무엇인지에 따라 데이터를 불러온다.
  const currentViewData = timeframes[timeframe];

  return (
    <div className="activity-container" style={{ backgroundColor: color }}>
      <div
        className="activity-top"
        style={{ backgroundImage: `url(/images/${icon})` }}
      ></div>
      <div className="activity-content">
        <div className="activity-name">
          <span>{title}</span>
          <div>
            <img src={ellipsis} alt="ellipsis" />
          </div>
        </div>
        <div className="activity-time">
          <h1>{currentViewData.current}hrs</h1>
          <p>
            {labelMap[timeframe]} - {currentViewData.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
