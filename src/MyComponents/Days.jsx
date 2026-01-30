import "./Days.css";

const Days = ({ daily, Icons }) => {
  return (
    <div className="otherDayWeatherBox">
      <div className="Day1">
        <div className="DayBoxInsaid">
          <div className="WeekDay">пн |</div>
          <img
            className="MonIconOfDay"
            src={Icons[daily[0].weather[0].icon.slice(0, 2)]}
            alt=""
          />
          <div className="DayInfo">{daily[0].weather[0].description}</div>
          <div className="DayTemp">
            {Math.round(daily[0].main.temp)}
            <span>°</span>C
          </div>
        </div>
      </div>
      <div className="Day2">
        <div className="DayBoxInsaid">
          <div className="WeekDay">вт |</div>
          <img
            className="MonIconOfDay"
            src={Icons[daily[1].weather[0].icon.slice(0, 2)]}
            alt=""
          />
          <div className="DayInfo">{daily[1].weather[0].description}</div>
          <div className="DayTemp">
            {Math.round(daily[1].main.temp)}
            <span>°</span>C
          </div>
        </div>
      </div>
      <div className="Day3">
        <div className="DayBoxInsaid">
          <div className="WeekDay">ср |</div>
          <img
            className="MonIconOfDay"
            src={Icons[daily[2].weather[0].icon.slice(0, 2)]}
            alt=""
          />
          <div className="DayInfo">{daily[2].weather[0].description}</div>
          <div className="DayTemp">
            {Math.round(daily[2].main.temp)}
            <span>°</span>C
          </div>
        </div>
      </div>
      <div className="Day4">
        <div className="DayBoxInsaid">
          <div className="WeekDay">чт |</div>
          <img
            className="MonIconOfDay"
            src={Icons[daily[3].weather[0].icon.slice(0, 2)]}
            alt=""
          />
          <div className="DayInfo">{daily[3].weather[0].description}</div>
          <div className="DayTemp">
            {Math.round(daily[3].main.temp)}
            <span>°</span>C
          </div>
        </div>
      </div>
    </div>
  );
};
export default Days;
