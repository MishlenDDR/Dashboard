import { Icons, TableOfWeather } from "./Data";
import { useEffect, useState } from "react";
import Days from "./MyComponents/Days.jsx";
import Hours from "./MyComponents/Hours.jsx";
import Footer from "./MyComponents/Footer.jsx";
import "./App.css";

function App() {
  const [City, setCity] = useState("Moscow");
  const [InputValue, setInputValue] = useState("");
  const [WeatherData, setWeatherData] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchStart = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=ru&appid=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "200") {
          setWeatherData(data);
        } else {
          alert("Город не найден!");
        }
      });
  };
  useEffect(() => {
    fetchStart(City);
  }, []);
  const Conventer = (event) => {
    if (event.key === "Enter" && InputValue.trim() != "") {
      fetchStart(InputValue);
      setCity(InputValue);
      setInputValue("");
    }
  };
  const handleRefresh = () => {
    if (InputValue.trim() !== "") {
      fetchStart(InputValue);
      setCity(InputValue);
      setInputValue("");
    }
  };
  if (!WeatherData) return <div>Загрузка...</div>;

  if (WeatherData.cod !== "200")
    return <div className="error">Ошибка: {WeatherData.message}</div>;
  const current = WeatherData.list[0];

  const currentTemp = Math.round(current.main.temp);

  const hourly = WeatherData.list.slice(1, 5);

  const daily = WeatherData.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(1, 5);

  return (
    <>
      <div className="appBox">
        <div className="phone">
          <img className="phoneCard" src="/phone.png" alt="" />
        </div>
        <div className="backGround">
          <div className="weatherBox">
            <div className="CityNameNow">{City}</div>
            <div className="header">
              <img
                className="ImageOfWeather"
                src={TableOfWeather[hourly[0].weather[0].icon.slice(0, 2)]}
                alt=""
              />
              <div className="WeatherIndicatorBox">
                <div className="DegreesAndIcon">
                  <img
                    className="IconOfPartlyCloudy"
                    src={Icons[hourly[0].weather[0].icon.slice(0, 2)]}
                    alt=""
                  />
                  <div className="DegreesOfCelsius">
                    {currentTemp}
                    <span>°</span>C
                  </div>
                </div>
                <Hours hourly={hourly} Icons={Icons} />
              </div>
            </div>
            <Days daily={daily} Icons={Icons} />
          </div>
          <Footer
            handleRefresh={handleRefresh}
            InputValue={InputValue}
            setInputValue={setInputValue}
            Conventer={Conventer}
          />
        </div>
      </div>
    </>
  );
}

export default App;
