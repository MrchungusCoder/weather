



import { weather_data } from './data.js';

let loadDayForecastData = () => {
	
}

let loadWeekForecastData = (data) => {
	
	let [pronostico, today, week] = data;

    let {city: ciudad, date: dia, maxtemperature: max_tempt,
        mintemperature: min_tempt, cloudiness: cloud, wind: wd, 
        rainfall: rain, forecast_today: tod} = pronostico;
    
    let message_ciudad = `<h5 id="city" class="text-golden"> ${ciudad} </h5>`;
    let message_date = `<h5 id="date" class="text-golden text-sm  opacity-8 mb-0">${dia}</h5>`;
    let message_max=  `<span id="maxtemperature">${max_tempt}<!-- maxtemperature --></span>`;
    let message_min=  `<span id="mintemperature" class="opacity-6 mx-2">${min_tempt}<!-- mintemperature --></span>`;
    let message_cloud = `<h6 id="cloudiness" class="text-golden mb-0">${cloud}<!-- cloudiness --></h6>`;
    let message_wind = `<h6 id="wind" class="text-golden mb-0">${wd}<!-- wind --></h6>`
    let message_rainfall = `<h6 id="rainfall" class="text-golden mb-0">${rain}<!-- rainfall --></h6>`


    let listCity = document.getElementById("city");
    listCity.innerHTML = message_ciudad;

    let listDate = document.getElementById("date");
    listDate.innerHTML = message_date;

    let listMax = document.getElementById("maxtemperature");
    listMax.innerHTML = message_max;

    let listMin = document.getElementById("mintemperature");
    listMin.innerHTML = message_min;

    let listCloud = document.getElementById("cloudiness");
    listCloud.innerHTML = message_cloud;

    let listWd = document.getElementById("wind");
    listWd.innerHTML = message_wind;

    let listRd = document.getElementById("rainfall");
    listRd.innerHTML = message_rainfall;


    //OTHER CHARTS
    
    let [chart_1, chart_2] = tod
    
    let {lapse: icon_1,text:td, temperature: cent, forecast:day} = chart_1;
    let {lapse: icon_2,text:td_2, temperature: cent_2, forecast:day_2} = chart_2;

    let message_td = `<h3 id="late_temperature" class="text-center mb-0">${td}<!-- late_temperature --></h3>`
    let listTd = document.getElementById("late_temperature");
    listTd.innerHTML = message_td;

    let message_cent = `<span id="late_forecast" class="text-md">${cent}<!-- late_forecast --></span>`
    let listCt = document.getElementById("late_forecast");
    listCt.innerHTML = message_cent;

    let message_fore = `<h4 id="late_text" class="mb-0 text-md">${day}<!-- late_text --></h4>`
    let listFr = document.getElementById("late_text");
    listFr.innerHTML = message_fore;

    let message_td_2 = `<h3 id="night_temperature" class="text-center mb-0">${td_2}<!-- night_temperature --></h3>`
    let listTd_2 = document.getElementById("night_temperature");
    listTd_2.innerHTML = message_td_2;

    let message_cent_2 = `<span id="night_forecast" class="text-md">${cent_2}<!-- night_forecast --></span>`
    let listCt_2 = document.getElementById("night_forecast");
    listCt_2.innerHTML = message_cent_2;

    let message_fore_2 = `<h4 id="night_text" class="mb-0 text-md">${day_2}<!-- night_text --></h4>`
    let listFr_2 = document.getElementById("night_text");
    listFr_2.innerHTML = message_fore_2;
    
}


loadDayForecastData();
loadWeekForecastData(weather_data);









