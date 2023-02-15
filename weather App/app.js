    function displayTemp(response) {
    console.log(response.data);
    let cityTemp = document.querySelector("#temperature");
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    cityTemp.innerHTML = `${temperature } °C`;
    let City = document.querySelector(".city");
    console.log(response.data.name);
    City.innerHTML = response.data.name;
  }
  
  function displaytime() {
    let now = new Date();
    let date = now.getDate();
    let monthI = now.getMonth();
    let year = now.getFullYear();
    let dayI = now.getDay();
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let dateToday = document.querySelector(".date");
    dateToday.innerHTML = `${date} ${month[monthI]} ${year}`;
    let daySelected = document.querySelector(".date");
    daySelected.innerHTML = `${day[dayI]}`;
  }
  function searchCity(event) {
    event.preventDefault();
    let cityName = document.querySelector("#city-input").value;
    console.log(cityName);
    let City = document.querySelector(".city");
    City.innerHTML = cityName;
    let apiKey = "40e49b122e29c4dd55fdd5f4f16eac2d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemp);
    displaytime();
  }
  
  function showLocation(response) {
    let lat = response.coords.latitude;
    let lon = response.coords.longitude;
    console.log(response);
    let apiKey = "40e49b122e29c4dd55fdd5f4f16eac2d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemp);
    displaytime();
  }
  function displayCurrent() {
    navigator.geolocation.getCurrentPosition(showLocation);
  }
  
  let submitForm = document.querySelector(".form-control");
  submitForm.addEventListener("submit", searchCity);
  let current = document.querySelector(".btn-primary");
  current.addEventListener("click", displayCurrent);
  