import { Icons, TableOfWeather } from './Data';
import { useEffect, useState } from 'react';
import { Button, Input } from "@chakra-ui/react"
import { LuRefreshCcw } from "react-icons/lu";
import { FiList } from "react-icons/fi";
import './App.css'

function App() {
  const [City, setCity] = useState("Moscow");
  const [InputValue, setInputValue] = useState("");
  const [WeatherData, setWeatherData] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchStart = (cityName) => {
     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=ru&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
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
      if(event.key === "Enter" && InputValue.trim() != "") {
        fetchStart(InputValue);
        setCity(InputValue)
        setInputValue("");
      }
    }
    const handleRefresh = () => {
    if (InputValue.trim() !== "") {
    fetchStart(InputValue);
    setCity(InputValue);
    setInputValue("");
    }
    };
    if (!WeatherData) return <div>Загрузка...</div>;

    if (WeatherData.cod !== "200") return <div className="error">Ошибка: {WeatherData.message}</div>;
    const current = WeatherData.list[0];

    const currentTemp = Math.round(current.main.temp);

    const hourly = WeatherData.list.slice(1, 5);

    const daily = WeatherData.list.filter((item) => item.dt_txt.includes("12:00:00")).slice(1, 5);

  return (
    <>
    <div className="appBox">
      <div className="phone">
        <img className='phoneCard' src="/phone.png" alt="" />
        </div>
          <div className="backGround">
            <div className="weatherBox">
              <div className="CityNameNow">{City}</div>
            <div className="header">
              <img className='ImageOfWeather' src={TableOfWeather[hourly[0].weather[0].icon.slice(0, 2)]} alt="" />
                <div className="WeatherIndicatorBox">
                  <div className="DegreesAndIcon">
                  <img className='IconOfPartlyCloudy' src={Icons[hourly[0].weather[0].icon.slice(0, 2)]} alt="" />
                    <div className="DegreesOfCelsius">
                      {currentTemp}<span>°</span>C
                    </div>
                    </div>
                    <div className="Hours">
                      <img className='MonIcon' src={Icons[hourly[0].weather[0].icon.slice(0, 2)]} alt="" />
                      <img className='MonIcon' src={Icons[hourly[1].weather[0].icon.slice(0, 2)]} alt="" />
                      <img className='MonIcon' src={Icons[hourly[2].weather[0].icon.slice(0, 2)]} alt="" />
                      <img className='MonIcon' src={Icons[hourly[3].weather[0].icon.slice(0, 2)]} alt="" />
                    <div className="Hour1">{Math.round(hourly[0].main.temp)}<span>°</span>C</div>
                    <div className="Hour2">{Math.round(hourly[1].main.temp)}<span>°</span>C</div>
                    <div className="Hour3">{Math.round(hourly[2].main.temp)}<span>°</span>C</div>
                    <div className="Hour4">{Math.round(hourly[3].main.temp)}<span>°</span>C</div>
                    </div>
                  
              </div>
            </div>
            <div className="otherDayWeatherBox">
              <div className="Day1">
                <div className="DayBoxInsaid">
                <div className="WeekDay">пн |</div>
                <img className='MonIconOfDay' src={Icons[daily[0].weather[0].icon.slice(0, 2)]} alt="" />
                <div className="DayInfo">{daily[0].weather[0].description}</div>
                <div className="DayTemp">{Math.round(daily[0].main.temp)}<span>°</span>C</div>
                </div>
              </div>
              <div className="Day2">
                <div className="DayBoxInsaid">
               <div className="WeekDay">вт |</div>
                <img className='MonIconOfDay' src={Icons[daily[1].weather[0].icon.slice(0, 2)]} alt="" />
                <div className="DayInfo">{daily[1].weather[0].description}</div>
                <div className="DayTemp">{Math.round(daily[1].main.temp)}<span>°</span>C</div>
                </div>
              </div>
              <div className="Day3">
                <div className="DayBoxInsaid">
                <div className="WeekDay">ср |</div>
                <img className='MonIconOfDay' src={Icons[daily[2].weather[0].icon.slice(0, 2)]} alt="" />
                <div className="DayInfo">{daily[2].weather[0].description}</div>
                <div className="DayTemp">{Math.round(daily[2].main.temp)}<span>°</span>C</div>
                </div>
              </div>
              <div className="Day4">
                <div className="DayBoxInsaid">
                <div className="WeekDay">чт |</div>
                <img className='MonIconOfDay' src={Icons[daily[3].weather[0].icon.slice(0, 2)]} alt="" />
                <div className="DayInfo">{daily[3].weather[0].description}</div>
                <div className="DayTemp">{Math.round(daily[3].main.temp)}<span>°</span>C</div>
                </div>
              </div>
            </div>
          </div>
          <div className="BottomDisplay">
               <Button className='RefreshButton' onClick={handleRefresh} variant="unstyled">
                <LuRefreshCcw className='Lu'/>
               </Button>
               <Input className='Input'
                      placeholder="Enter any city"
                      value={InputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={Conventer} />
               <FiList className='Ti'/>
              </div>
        </div>
      
    </div>
    </>
  )
}

export default App
