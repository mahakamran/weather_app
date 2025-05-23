import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import clear from '../images/clear.png';
import cloud from '../images/cloud.png';
import haze from '../images/haze.png';
import mist from '../images/mist.png';
import rain from '../images/rain.png';

const First = () => {
  const [data, setData] = useState('');
  const [get, setGet] = useState('');
  const [error, setError] = useState('');
  const API_Key = "9571d68010dde5237aae298470c87672";

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_Key}&units=metric`
      );
      const output = await response.json();

      if (response.ok) {
        setGet(output);
        setError('');
      } else {
        setGet('');
        setError(output.message || "City not found. Please check the spelling.");
      }
    } catch (err) {
      setGet('');
      setError("An error occurred. Please try again.");
    }
  };

  const maha = (e) => {
    setData(e.target.value);
  };

  const getWeatherImage = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return clear;
      case 'Clouds':
        return cloud;
      case 'Mist':
        return mist;
      case 'Haze':
        return haze;
      case 'Rain':
        return rain;
      default:
        return null;
    }
  };

  return (

       <div className="w-full min-h-screen m-0 p-0 bg-gradient-to-r from-[#3a1c71] to-[#5f3dc4] flex items-start justify-center">
    <div id="box1" className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <p className="text-white font-bold text-xl">&lt;</p>
        <p className="text-sm font-bold text-white">Choose a city</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <input
          value={data}
          onChange={maha}
          type="text"
          className="bg-white text-xs w-full h-[28px] rounded px-3 border border-gray-300 placeholder:text-[10px]"
          placeholder="Select Your City..."
        />
        <button
          onClick={getData}
          className="w-[24px] h-[24px] rounded-[50%] bg-[#48228d] flex items-center justify-center"
        >
          <CiSearch className="text-white text-sm" />
        </button>
      </div>

      {error && (
        <div className="text-red-500 text-xs mb-2 text-center">
          {error}
        </div>
      )}

      {get && get.weather && (
        <div className="text-center mt-4">
          <img
            src={getWeatherImage(get.weather[0].main)}
            alt={get.weather[0].main}
            className="w-24 h-24 mx-auto object-contain mb-3"
          />
          <h2 className="text-lg font-semibold text-[#48228d]">{get.name}</h2>
          <h2 className="text-2xl font-bold text-gray-800">{Math.trunc(get.main?.temp)}°C</h2>
          <p className="text-sm text-gray-600 capitalize">{get.weather?.[0]?.description}</p>
        </div>
      )}
    </div>
       </div>
  );
};

export default First;
