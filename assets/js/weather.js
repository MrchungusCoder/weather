




import { weather_data } from './data.js';




let loadDayForecastData = (data) => {


    let [ciudad_1, ciudad_2, ciudad_3] = data;

    let element_1 =  document.querySelector("#dropdownMenuButton");
    
    /*
    let output = function(){
        let ciudad_select
        let valores = element_1.value
        let texto = element_1 .options[element_1.selectedIndex].text    
        console.log(texto)
    
        if (texto === "guayaquil"){
            ciudad_select = ciudad_1
        }
        else if(texto === "Ambato"){
            ciudad_select = ciudad_2
        }
        else if(texto === "Tena"){
            ciudad_select = ciudad_3
        }
        console.log(texto)
        return ciudad_select
    }

    let result = output()*/
 
    let onChange = function() {
        let valores = element_1.value
        let texto = element_1 .options[element_1.selectedIndex].text    
    }


    element_1.onchange = onChange;


    let {city: ciudad, date: dia, maxtemperature: max_tempt,
        mintemperature: min_tempt, cloudiness: cloud, wind: wd, 
        rainfall: rain, forecast_today: today, forecast_week: week} = data[1];
    
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
    
    let [chart_1, chart_2] = today
    
    let {lapse: lap,text:td, temperature: cent, forecast:day, icon: ic_1} = chart_1;
    let {lapse: lap_2,text:td_2, temperature: cent_2, forecast:day_2, icon: ic_2} = chart_2;

    let message_td = `<h3 id="late_temperature" class="text-center mb-0">${cent}<!-- late_temperature --></h3>`
    let listTd = document.getElementById("late_temperature");
    listTd.innerHTML = message_td;

    let message_cent = `<span id="late_forecast" class="text-md">${day}<!-- late_forecast --></span>`
    let listCt = document.getElementById("late_forecast");
    listCt.innerHTML = message_cent;

    let message_fore = `<h4 id="late_text" class="mb-0 text-md">${td}<!-- late_text --></h4>`
    let listFr = document.getElementById("late_text");
    listFr.innerHTML = message_fore;

    let message_icon_1 = `<i id="late_icon" class="material-icons opacity-10">${ic_1}<!-- late_icon --></i>`
    let listicon_1 = document.getElementById("late_icon");
    listicon_1.innerHTML = message_icon_1;




    let message_td_2 = `<h3 id="night_temperature" class="text-center mb-0">${cent_2}<!-- night_temperature --></h3>`
    let listTd_2 = document.getElementById("night_temperature");
    listTd_2.innerHTML = message_td_2;

    let message_cent_2 = `<span id="night_forecast" class="text-md">${day_2}<!-- night_forecast --></span>`
    let listCt_2 = document.getElementById("night_forecast");
    listCt_2.innerHTML = message_cent_2;

    let message_fore_2 = `<h4 id="night_text" class="mb-0 text-md">${td_2}<!-- night_text --></h4>`
    let listFr_2 = document.getElementById("night_text");
    listFr_2.innerHTML = message_fore_2;
    
    let message_icon_2 = `<i id="night_icon" class="material-icons opacity-10">${ic_2}<!-- night_icon --></i>`
    let listicon_2 = document.getElementById("night_icon");
    listicon_2.innerHTML = message_icon_2;
	


    return week

}



//CHARTS WEEK WEATHER PER CITY

let loadWeekForecastData = (data_2, fn) => {
	
    let function_today = fn(data_2) //fn(weather-data , week)


    let element = document.getElementById("loadinfo");

    element.addEventListener('click', (event) => {

        
        let days = document.getElementsByClassName('day_cl');
        let date = document.getElementsByClassName('date_cl');
        let temperature_max = document.getElementsByClassName('max-temp');
        let temperature_min = document.getElementsByClassName('min-temp');
        let icon = document.getElementsByClassName('ic');


        let element = document.querySelectorAll(".list-group > .lista");
        element.forEach(list => list.classList.remove("d-none"));

        
        for (let i = 0; i<function_today.length;i++){
            let valor= function_today[i];
    
            let dia=  valor["text"];
            let fecha= valor["date"]
            let temp_max = valor.temperature.max
            let temp_min = valor.temperature.min
            let ic = valor.icon
    
            let daysLP = days[i];
            let dateLP = date[i];
            let temp_maxLP = temperature_max[i];
            let temp_minLP = temperature_min[i];
            let iconLP = icon[i];
    
            daysLP.innerHTML = dia;
            dateLP.innerHTML = fecha;
            temp_maxLP.innerHTML = temp_max;
            temp_minLP.innerHTML = temp_min;
            iconLP.innerHTML = ic;
        }
    });
    
}

//paso 1: 


loadDayForecastData(weather_data);
loadWeekForecastData(weather_data,loadDayForecastData);



/*
1️⃣ Cargue los datos de la predicción del día cuando esté completamente cargado 
(evento DOMContentLoaded) el documento.

2️⃣ (Dentro del callback anterior) Cargue los datos de la predicción de
 la semana cuando haga clic (evento click) en el botón con el texto "Cargar" (id "loadinfo").

3️⃣ Guarde y compruebe los cambios en el navegador.

4️⃣ Guarde los cambios en el repositorio local y remoto.
*/




/*
let loadWeekForecastData = (data) => {
	let boton_charts = document.getElementById("loadinfo");

    boton_charts.addEventListener('click', (event) => {
        
    });
}

*/


        /*
        switch (daysLP){
            case date[0]:
                let message_date = `<h6 class="mb-1 text-dark font-weight-bold text-sm day_cl">${fecha}Mañana</h6>`;
                let listDate= document.getElementsByClassName("cl");
                daysLP.innerHTML = message_date;

            case date[1]:
                let message_date_2 = `<h6 class="mb-1 text-dark font-weight-bold text-sm day_cl">Mañana</h6>`;
                let listDate_2= document.getElementsByClassName("cl");
                listDate_2.innerHTML = message_date_2;
        }

        if (daysLP===daysLP[1]){
            let message_date = `<h6 class="mb-1 text-dark font-weight-bold text-sm day_cl">${fecha}Mañana</h6>`;
            let listDate= document.getElementsByClassName("day_cl");
            listDate.innerHTML = message_date;
        }*/


            /*
    let dayfunc=  function_today.forEach((element, index) => {
        console.log(element)
        let message_day= `<h6 class="mb-1 text-dark font-weight-bold text-sm day_cl">${element["text"]}</h6>`
        let days = document.getElementsByClassName('day_cl');
        days.innerHTML= message_day
    });*/