const submitbtn =document.getElementById('submitbutton');
const getInfo= (event) => {
    event.preventDsfault();
    // alert("hlo")
    let url = "api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid=297155d538950cc6bedab65c08d0f5c1"
}
submitbtn.addEventListener('click',getInfo)