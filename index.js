// function myFunction() {
//     document.getElementsByClassName("country__data--name")[0].style.color = "red"
// }
// myFunction()

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