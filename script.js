const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f289318a2fmsh668cbebd523d8ebp163badjsn254057bf7711',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response => response.json())
    .then((response)=>{
        console.log("getWeather ",response);
        // // temp.innerHTML = response.temp;
        // // temp2.innerHTML = response.temp2;
        // feels_like.innerHTML = response.feels_like;
        // humidity.innerHTML = response.humidity;
        // // humidity2.innerHTML = response.humidity;
        // min_temp.innerHTML = response.min_temp;
        // max_temp.innerHTML = response.max_temp;
        // wind_speed.innerHTML = response.wind_speed;
        // wind_speed.innerHTML = response.wind_speed;
        // wind_degrees.innerHTML = response.wind_degrees;
        // sunrise.innerHTML = response.sunrise;
        // sunset.innerHTML = response.sunset;
        // cloud_pct.innerHTML = response.cloud_pct;

    })
    .catch(err => console.log(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
    getWeatherNew(city.value);
    getWeatherForecast(city.value);
})





const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=';
const optionsNew = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f289318a2fmsh668cbebd523d8ebp163badjsn254057bf7711',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeatherNew = (city) =>{
   // cityName2.innerHTML = city;
    fetch(url+city,optionsNew)
    .then(response => response.json())
    .then((response)=>{
        console.log('getWeatherNew ',response);
        
        // temp.innerHTML = response.temp;
        // temp2.innerHTML = response.temp2;
        // feels_like.innerHTML = response.feels_like;
        // humidity.innerHTML = response.humidity;
        // humidity2.innerHTML = response.humidity;
        // min_temp.innerHTML = response.min_temp;
        // max_temp.innerHTML = response.max_temp;
        // wind_speed.innerHTML = response.wind_speed;
        // wind_speed.innerHTML = response.wind_speed;
        // wind_degrees.innerHTML = response.wind_degrees;
        // sunrise.innerHTML = response.sunrise;
        // sunset.innerHTML = response.sunset;

    })
    .catch(err => console.log(err))
}

const getWeatherForecast = (city) =>{
    // cityName2.innerHTML = city;
    let urlForecast = 'https://forecast9.p.rapidapi.com/rapidapi/forecast/' +city + '/summary/';
    console.log("NEW URL FORECAT", urlForecast)
     fetch(urlForecast,optionsForecast)
     .then(response => response.json())
     .then((response)=>{
        
         console.log('getWeatherForecast ',response);
         
         response = {
            "location": {
                "code": "IN0MH0006",
                "name": "Mumbai",
                "timezone": "Asia/Kolkata",
                "coordinates": {
                    "latitude": 19.0728,
                    "longitude": 72.8826
                }
            },
            "forecast": {
                "items": [
                    {
                        "date": "2023-05-02",
                        "dateWithTimezone": "2023-05-01T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 7,
                        "rainHours": null,
                        "temperature": {
                            "min": 27,
                            "max": 32,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Westwind",
                            "text": "W",
                            "avg": null,
                            "min": 2,
                            "max": 13,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 29,
                            "max": 35,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-02T05:47:22+05:30",
                            "sunrise": "2023-05-02T06:10:19+05:30",
                            "suntransit": "2023-05-02T12:35:34+05:30",
                            "sunset": "2023-05-02T19:01:03+05:30",
                            "dusk": "2023-05-02T19:24:02+05:30",
                            "moonrise": "2023-05-02T16:08:54+05:30",
                            "moontransit": "2023-05-02T22:21:02+05:30",
                            "moonset": "2023-05-02T03:56:03+05:30",
                            "moonphase": 4,
                            "moonzodiac": 6
                        }
                    },
                    {
                        "date": "2023-05-03",
                        "dateWithTimezone": "2023-05-02T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 9,
                        "rainHours": null,
                        "temperature": {
                            "min": 28,
                            "max": 27,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Nordwestwind",
                            "text": "NW",
                            "avg": null,
                            "min": 0,
                            "max": 2,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 31,
                            "max": 36,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-03T05:46:46+05:30",
                            "sunrise": "2023-05-03T06:09:45+05:30",
                            "suntransit": "2023-05-03T12:35:27+05:30",
                            "sunset": "2023-05-03T19:01:23+05:30",
                            "dusk": "2023-05-03T19:24:25+05:30",
                            "moonrise": "2023-05-03T16:59:44+05:30",
                            "moontransit": "2023-05-03T23:03:26+05:30",
                            "moonset": "2023-05-03T04:29:01+05:30",
                            "moonphase": 4,
                            "moonzodiac": 7
                        }
                    },
                    {
                        "date": "2023-05-04",
                        "dateWithTimezone": "2023-05-03T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 9,
                        "rainHours": null,
                        "temperature": {
                            "min": 28,
                            "max": 33,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Nordwestwind",
                            "text": "NW",
                            "avg": null,
                            "min": 0,
                            "max": 13,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 31,
                            "max": 36,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-04T05:46:11+05:30",
                            "sunrise": "2023-05-04T06:09:12+05:30",
                            "suntransit": "2023-05-04T12:35:21+05:30",
                            "sunset": "2023-05-04T19:01:44+05:30",
                            "dusk": "2023-05-04T19:24:48+05:30",
                            "moonrise": "2023-05-04T17:52:47+05:30",
                            "moontransit": "2023-05-04T23:48:10+05:30",
                            "moonset": "2023-05-04T05:03:16+05:30",
                            "moonphase": 4,
                            "moonzodiac": 7
                        }
                    },
                    {
                        "date": "2023-05-05",
                        "dateWithTimezone": "2023-05-04T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 9,
                        "rainHours": null,
                        "temperature": {
                            "min": 28,
                            "max": 34,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Nordwestwind",
                            "text": "NW",
                            "avg": null,
                            "min": 2,
                            "max": 13,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 30,
                            "max": 37,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-05T05:45:36+05:30",
                            "sunrise": "2023-05-05T06:08:40+05:30",
                            "suntransit": "2023-05-05T12:35:16+05:30",
                            "sunset": "2023-05-05T19:02:05+05:30",
                            "dusk": "2023-05-05T19:25:12+05:30",
                            "moonrise": "2023-05-05T18:49:02+05:30",
                            "moontransit": null,
                            "moonset": "2023-05-05T05:40:08+05:30",
                            "moonphase": 5,
                            "moonzodiac": 8
                        }
                    },
                    {
                        "date": "2023-05-06",
                        "dateWithTimezone": "2023-05-05T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 8,
                        "rainHours": null,
                        "temperature": {
                            "min": 28,
                            "max": 33,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Nordwestwind",
                            "text": "NW",
                            "avg": null,
                            "min": 2,
                            "max": 13,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 30,
                            "max": 36,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-06T05:45:03+05:30",
                            "sunrise": "2023-05-06T06:08:09+05:30",
                            "suntransit": "2023-05-06T12:35:11+05:30",
                            "sunset": "2023-05-06T19:02:26+05:30",
                            "dusk": "2023-05-06T19:25:35+05:30",
                            "moonrise": "2023-05-06T19:49:00+05:30",
                            "moontransit": "2023-05-06T00:36:37+05:30",
                            "moonset": "2023-05-06T06:21:08+05:30",
                            "moonphase": 5,
                            "moonzodiac": 8
                        }
                    },
                    {
                        "date": "2023-05-07",
                        "dateWithTimezone": "2023-05-06T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 8,
                        "rainHours": null,
                        "temperature": {
                            "min": 28,
                            "max": 33,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Nordwestwind",
                            "text": "NW",
                            "avg": null,
                            "min": 2,
                            "max": 13,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 30,
                            "max": 36,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-07T05:44:30+05:30",
                            "sunrise": "2023-05-07T06:07:39+05:30",
                            "suntransit": "2023-05-07T12:35:07+05:30",
                            "sunset": "2023-05-07T19:02:48+05:30",
                            "dusk": "2023-05-07T19:25:59+05:30",
                            "moonrise": "2023-05-07T20:52:18+05:30",
                            "moontransit": "2023-05-07T01:29:38+05:30",
                            "moonset": "2023-05-07T07:07:40+05:30",
                            "moonphase": 6,
                            "moonzodiac": 8
                        }
                    },
                    {
                        "date": "2023-05-08",
                        "dateWithTimezone": "2023-05-07T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 8,
                        "rainHours": null,
                        "temperature": {
                            "min": 28,
                            "max": 34,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Nordwestwind",
                            "text": "NW",
                            "avg": null,
                            "min": 2,
                            "max": 13,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 30,
                            "max": 37,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-08T05:43:58+05:30",
                            "sunrise": "2023-05-08T06:07:10+05:30",
                            "suntransit": "2023-05-08T12:35:03+05:30",
                            "sunset": "2023-05-08T19:03:10+05:30",
                            "dusk": "2023-05-08T19:26:24+05:30",
                            "moonrise": "2023-05-08T21:57:11+05:30",
                            "moontransit": "2023-05-08T02:27:23+05:30",
                            "moonset": "2023-05-08T08:00:40+05:30",
                            "moonphase": 6,
                            "moonzodiac": 9
                        }
                    },
                    {
                        "date": "2023-05-09",
                        "dateWithTimezone": "2023-05-08T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 9,
                        "rainHours": null,
                        "temperature": {
                            "min": 28,
                            "max": 34,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Nordwestwind",
                            "text": "NW",
                            "avg": null,
                            "min": 0,
                            "max": 13,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 31,
                            "max": 37,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-09T05:43:27+05:30",
                            "sunrise": "2023-05-09T06:06:41+05:30",
                            "suntransit": "2023-05-09T12:35:00+05:30",
                            "sunset": "2023-05-09T19:03:32+05:30",
                            "dusk": "2023-05-09T19:26:48+05:30",
                            "moonrise": "2023-05-09T23:00:39+05:30",
                            "moontransit": "2023-05-09T03:28:48+05:30",
                            "moonset": "2023-05-09T08:59:55+05:30",
                            "moonphase": 6,
                            "moonzodiac": 9
                        }
                    },
                    {
                        "date": "2023-05-10",
                        "dateWithTimezone": "2023-05-09T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 9,
                        "rainHours": null,
                        "temperature": {
                            "min": 28,
                            "max": 35,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Westwind",
                            "text": "W",
                            "avg": null,
                            "min": 0,
                            "max": 13,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 31,
                            "max": 39,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-10T05:42:57+05:30",
                            "sunrise": "2023-05-10T06:06:14+05:30",
                            "suntransit": "2023-05-10T12:34:57+05:30",
                            "sunset": "2023-05-10T19:03:54+05:30",
                            "dusk": "2023-05-10T19:27:13+05:30",
                            "moonrise": "2023-05-10T23:59:41+05:30",
                            "moontransit": "2023-05-10T04:31:34+05:30",
                            "moonset": "2023-05-10T10:03:37+05:30",
                            "moonphase": 6,
                            "moonzodiac": 10
                        }
                    },
                    {
                        "date": "2023-05-11",
                        "dateWithTimezone": "2023-05-10T18:30:00Z",
                        "freshSnow": null,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 9,
                        "rainHours": null,
                        "temperature": {
                            "min": 29,
                            "max": 35,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Westwind",
                            "text": "W",
                            "avg": null,
                            "min": 0,
                            "max": 13,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 31,
                            "max": 39,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-11T05:42:28+05:30",
                            "sunrise": "2023-05-11T06:05:47+05:30",
                            "suntransit": "2023-05-11T12:34:55+05:30",
                            "sunset": "2023-05-11T19:04:16+05:30",
                            "dusk": "2023-05-11T19:27:37+05:30",
                            "moonrise": null,
                            "moontransit": "2023-05-11T05:32:55+05:30",
                            "moonset": "2023-05-11T11:08:54+05:30",
                            "moonphase": 6,
                            "moonzodiac": 10
                        }
                    },
                    {
                        "date": "2023-05-12",
                        "dateWithTimezone": "2023-05-11T18:30:00Z",
                        "freshSnow": 0,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 0,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 7,
                        "rainHours": null,
                        "temperature": {
                            "min": 28,
                            "max": 31,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Westwind",
                            "text": "W",
                            "avg": null,
                            "min": 2,
                            "max": 22,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 30,
                            "max": 34,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-12T05:42:00+05:30",
                            "sunrise": "2023-05-12T06:05:21+05:30",
                            "suntransit": "2023-05-12T12:34:54+05:30",
                            "sunset": "2023-05-12T19:04:38+05:30",
                            "dusk": "2023-05-12T19:28:02+05:30",
                            "moonrise": "2023-05-12T00:52:15+05:30",
                            "moontransit": "2023-05-12T06:30:52+05:30",
                            "moonset": "2023-05-12T12:13:06+05:30",
                            "moonphase": 7,
                            "moonzodiac": 11
                        }
                    },
                    {
                        "date": "2023-05-13",
                        "dateWithTimezone": "2023-05-12T18:30:00Z",
                        "freshSnow": 0,
                        "snowHeight": null,
                        "weather": {
                            "state": 1,
                            "text": "leicht bewölkt",
                            "icon": "d_1.svg"
                        },
                        "prec": {
                            "sum": 0,
                            "probability": 10,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 7,
                        "rainHours": null,
                        "temperature": {
                            "min": 29,
                            "max": 30,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Südwestwind",
                            "text": "SW",
                            "avg": null,
                            "min": 9,
                            "max": 21,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 31,
                            "max": 33,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-13T05:41:33+05:30",
                            "sunrise": "2023-05-13T06:04:57+05:30",
                            "suntransit": "2023-05-13T12:34:53+05:30",
                            "sunset": "2023-05-13T19:05:01+05:30",
                            "dusk": "2023-05-13T19:28:28+05:30",
                            "moonrise": "2023-05-13T01:38:56+05:30",
                            "moontransit": "2023-05-13T07:24:46+05:30",
                            "moonset": "2023-05-13T13:14:48+05:30",
                            "moonphase": 7,
                            "moonzodiac": 11
                        }
                    },
                    {
                        "date": "2023-05-14",
                        "dateWithTimezone": "2023-05-13T18:30:00Z",
                        "freshSnow": 0,
                        "snowHeight": null,
                        "weather": {
                            "state": 2,
                            "text": "wolkig",
                            "icon": "d_2.svg"
                        },
                        "prec": {
                            "sum": 0.03,
                            "probability": 15,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 3,
                        "rainHours": null,
                        "temperature": {
                            "min": 29,
                            "max": 30,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Südwestwind",
                            "text": "SW",
                            "avg": null,
                            "min": 18,
                            "max": 26,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 31,
                            "max": 33,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-14T05:41:07+05:30",
                            "sunrise": "2023-05-14T06:04:33+05:30",
                            "suntransit": "2023-05-14T12:34:52+05:30",
                            "sunset": "2023-05-14T19:05:24+05:30",
                            "dusk": "2023-05-14T19:28:53+05:30",
                            "moonrise": "2023-05-14T02:20:54+05:30",
                            "moontransit": "2023-05-14T08:15:07+05:30",
                            "moonset": "2023-05-14T14:13:52+05:30",
                            "moonphase": 8,
                            "moonzodiac": 12
                        }
                    },
                    {
                        "date": "2023-05-15",
                        "dateWithTimezone": "2023-05-14T18:30:00Z",
                        "freshSnow": 0,
                        "snowHeight": null,
                        "weather": {
                            "state": 3,
                            "text": "bedeckt",
                            "icon": "d_3.svg"
                        },
                        "prec": {
                            "sum": 0.05,
                            "probability": 15,
                            "sumAsRain": null,
                            "class": 0
                        },
                        "sunHours": 2,
                        "rainHours": null,
                        "temperature": {
                            "min": 29,
                            "max": 30,
                            "avg": null
                        },
                        "wind": {
                            "unit": "km/h",
                            "direction": "Südwestwind",
                            "text": "SW",
                            "avg": null,
                            "min": 21,
                            "max": 25,
                            "gusts": {
                                "value": null,
                                "text": null
                            },
                            "significationWind": false
                        },
                        "windchill": {
                            "min": 31,
                            "max": 33,
                            "avg": null
                        },
                        "snowLine": {
                            "avg": null,
                            "min": null,
                            "max": null,
                            "unit": "m"
                        },
                        "astronomy": {
                            "dawn": "2023-05-15T05:40:41+05:30",
                            "sunrise": "2023-05-15T06:04:11+05:30",
                            "suntransit": "2023-05-15T12:34:53+05:30",
                            "sunset": "2023-05-15T19:05:47+05:30",
                            "dusk": "2023-05-15T19:29:18+05:30",
                            "moonrise": "2023-05-15T02:59:43+05:30",
                            "moontransit": "2023-05-15T09:02:59+05:30",
                            "moonset": "2023-05-15T15:10:59+05:30",
                            "moonphase": 8,
                            "moonzodiac": 12
                        }
                    }
                ],
                "forecastDate": "2023-05-02T08:20:57Z",
                "nextUpdate": "2023-05-02T17:30:00Z",
                "source": "w3Data",
                "point": "global",
                "fingerprint": "Uv+BAwEBC0ZpbmdlcnByaW50Af+CAAEFAQdWZXJzaW9uAQwAAQtSZXF1ZXN0VGltZQH/hAABA0xuZwEIAAEDTGF0AQgAAQZNb2RlbHMB/4gAAAAQ/4MFAQEEVGltZQH/hAAAADb/hwIBASdbXXN0cnVjdCB7IE5hbWUgc3RyaW5nOyBSdW4gdGltZS5UaW1lIH0B/4gAAf+GAAAe/4UDAQL/hgABAgEETmFtZQEMAAEDUnVuAf+EAAAA/gFw/4IBBHNrLTgBDwEAAAAO2+K/WSbki6gAAAH4xty1hHw4UkAB+BgmUwWjEjNAAQsBDmV4cG9zZWRfbW9zbWl4AQ8BAAAADtvic7AAAAAAAAAAAQ5leHBvc2VkX21vc21peAEPAQAAAA7b4crwAAAAAAAAAAEHaWNvbl9ldQEPAQAAAA7b4kmAAAAAAAAAAAEHaWNvbl9ldQEPAQAAAA7b4aDAAAAAAAAAAAELbmFtX2NvbnVzXzUBDwEAAAAO2+JJgAAAAAAAAAABC25hbV9jb251c181AQ8BAAAADtvhoMAAAAAAAAAAAQZtb3NtaXgBDwEAAAAO2+JzsAAAAAAAAAABBm1vc21peAEPAQAAAA7b4crwAAAAAAAAAAEJZ2ZzX3NmbHV4AQ8BAAAADtviSYAAAAAAAAAAAQlnZnNfc2ZsdXgBDwEAAAAO2+GgwAAAAAAAAAABBmF3ZV9kZQEPAQAAAA7b4h9QAAAAAAAAAAA="
            }
        }
        console.log('getWeatherForecast hardcode',response);
         date.innerHTML = response.forecast.items[0].date;
         temp0.innerHTML = response.forecast.items[0].temperature.max;
         temp1.innerHTML = response.forecast.items[1].temperature.max;
         wind_speed0.innerHTML =  response.forecast.items[0].wind.max;
         wind_speed1.innerHTML =  response.forecast.items[1].wind.max;
         humidity0.innerHTML = response.forecast.items[0].rainHours && response.forecast.items[0].rainHours != null? response.forecast.items[0].rainHours: "0";
         humidity1.innerHTML = response.forecast.items[1].rainHours && response.forecast.items[1].rainHours != null? response.forecast.items[1].rainHours: "0";

         first_name.innerHTML = response.forecast.items[0].temperature.max;
         last_name.innerHTML =  response.forecast.items[0].wind.max;
         _name.innerHTML = response.forecast.items[0].rainHours && response.forecast.items[0].rainHours != null? response.forecast.items[0].rainHours: "0";

         first_name.value = response.forecast.items[0].temperature.max;
         last_name.value =  response.forecast.items[0].wind.max;
         _name.value = response.forecast.items[0].rainHours && response.forecast.items[0].rainHours != null? response.forecast.items[0].rainHours: "0";
         document.getElementById('first_name').value = response.forecast.items[0].temperature.max;
         document.getElementById('last_name').value =  response.forecast.items[0].wind.max;
         document.getElementById('_name').value = response.forecast.items[0].rainHours && response.forecast.items[0].rainHours != null? response.forecast.items[0].rainHours: "0";



         let daydata1 = [];
         daydata1.push({


            "temp":  response.forecast.items[0].temperature.max,
            "wind_speed":  response.forecast.items[0].wind.max,
            "rainhours":  response.forecast.items[0].rainHours && response.forecast.items[0].rainHours != null? response.forecast.items[0].rainHours: "0",
         })

         let daydata2 = [];
         daydata2.push({
            "temp":  response.forecast.items[1].temperature.max,
            "wind_speed":  response.forecast.items[1].wind.max,
            "rainhours":  response.forecast.items[1].rainHours && response.forecast.items[1].rainHours != null? response.forecast.items[1].rainHours: "0",
         })

         console.log('daydata1 ',daydata1);
         console.log('daydata2 ',daydata2);
 
     })
     .catch(err => {
        console.log(err)
        // TO BE COMMENTED//
        //TO BE COMMENTED//
    
    })
 }
 

//const urlForecast = 'https://forecast9.p.rapidapi.com/rapidapi/forecast/Mumbai/summary/';
const optionsForecast = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f289318a2fmsh668cbebd523d8ebp163badjsn254057bf7711',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};



// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


getWeather("Delhi")
getWeatherNew("Delhi")
getWeatherForecast("Delhi")