const claveApi = '371384a328084ae9ab3225823252504' ;
const idioma  = 'es' ;
const ciudad = 'Cusco' ;

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const response = await fetch(apiClimaActual) ;
let data = await response.json();

console.log(data.location.localtime);