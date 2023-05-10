// function myFunction() {
//     document.getElementsByClassName("country__data--name")[0].style.color = "red"
// }
// myFunction()

//Fecth datas from API
const countriesElem = document.querySelector(".countries-section");

async function getCountries() {
    const allCountries = await fetch("https://restcountries.com/v3.1/all");
    const response = await allCountries.json();
    console.log(response);
    response.forEach(element => {
        displayCountries(element)
    });
}
getCountries()

//Display datas
function displayCountries(data) {
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML=`   <div class="country__flag">
    <img src=${data.flags.svg} alt=${data.alt}>
</div>
<div class="country__data">
    <h3 class="country__data--name">${data.name.common}</h3>
    <p class="country__data--population"><strong>Population:</strong> ${data.population}</p>
    <p class="country__data--region"><strong>Region:</strong> ${data.region}</p>
    <p class="country__data--capital"><strong>Capital:</strong> ${data.capital}</p>
</div>`
countriesElem.appendChild(country)
}




// Get references to the button and dropdown menu
const toggleButton = document.getElementById('toggleButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Add click event listener to the button
toggleButton.addEventListener('click', function() {
  // Toggle the display of the dropdown menu
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
});


//hide dropdown when clicking outside of the trigger element
document.addEventListener("click", function(event) {
    const target = event.target;

    if (target !== toggleButton && !dropdownMenu.contains(target)) {
        dropdownMenu.style.display = 'none';
    }
})



//Select countries by region in dropdown menu
const region = document.querySelectorAll(".region");
const regionName = document.getElementsByClassName("country__data--region");

region.forEach(element => {
    element.addEventListener("click", () => {
        
        Array.from(regionName).forEach(elem => {
            console.log(elem.innerText);
            if(elem.innerText.includes(element.innerText) || element.innerText == "All") {
                elem.parentElement.parentElement.style.display="block"
            }else{
                elem.parentElement.parentElement.style.display="none"
            }
        });
    })
});

//Select country in searchbar

const search = document.querySelector("#search");
const countryName = document.getElementsByClassName("country__data--name");

search.addEventListener("input", function() {
    console.log(search.value.toLowerCase());
    Array.from(countryName).forEach(elem => {
        if(elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display="block"
        }else{
            elem.parentElement.parentElement.style.display="none"
        }
    })
})

//Dark mode

const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");
const body = document.querySelector("#body");
const header = document.querySelector("#header");


toggle.addEventListener("click", ()=> {
    body.classList.toggle("dark")
    header.classList.toggle("dark")
    moon.classList.toggle("fas")
})