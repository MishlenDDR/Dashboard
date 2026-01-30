import "./Hours.css";

const Hours = ({ hourly, Icons }) => {
  return (
    <div className="Hours">
      <img
        className="MonIcon"
        src={Icons[hourly[0].weather[0].icon.slice(0, 2)]}
        alt=""
      />
      <img
        className="MonIcon"
        src={Icons[hourly[1].weather[0].icon.slice(0, 2)]}
        alt=""
      />
      <img
        className="MonIcon"
        src={Icons[hourly[2].weather[0].icon.slice(0, 2)]}
        alt=""
      />
      <img
        className="MonIcon"
        src={Icons[hourly[3].weather[0].icon.slice(0, 2)]}
        alt=""
      />
      <div className="Hour1">
        {Math.round(hourly[0].main.temp)}
        <span>°</span>C
      </div>
      <div className="Hour2">
        {Math.round(hourly[1].main.temp)}
        <span>°</span>C
      </div>
      <div className="Hour3">
        {Math.round(hourly[2].main.temp)}
        <span>°</span>C
      </div>
      <div className="Hour4">
        {Math.round(hourly[3].main.temp)}
        <span>°</span>C
      </div>
    </div>
  );
};
export default Hours;
