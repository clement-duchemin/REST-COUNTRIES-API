const countryName = new URLSearchParams(window.location.search).get("name");
const flag = document.querySelector(".country-flag img");
const countryTitle = document.querySelector(".country-title");
const NativeName = document.querySelector(".NativeName");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".subRegion");
const capital = document.querySelector(".capital");
const tld = document.querySelector(".tld");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountryList = document.querySelector(".border-countries-li")


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res) => res.json())
.then(([country]) => {
    console.log([country])
    flag.src = country.flags.svg;
    countryTitle.innerText = country.name.common;
    NativeName.innerText = country.name.nativeName ? Object.values(country.name.nativeName)[0].common : country.name.common;
    population.innerText = country.population.toLocaleString("en-US");
    region.innerText = country.region;
    subRegion.innerText = country.subregion;
    capital.innerText = country.capital;
    tld.innerText = country.tld;
    currencies.innerText = country.currencies ? Object.values(country.currencies)[0].name : null;
    languages.innerText = country.languages ? Object.values(country.languages).join(", ") : null;


    if(country.borders) {
    country.borders.forEach((border) => {
    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    .then((res) => res.json())
    .then(([borderCountry]) => {
    //console.log(borderCountry.name.common)
    const borderCountryTag = document.createElement('a');
    borderCountryTag.classList.add("btn");
    borderCountryTag.innerText = borderCountry.name.common;
    borderCountryTag.href = `country.html?name=${borderCountry.name.common}`;
    //console.log(borderCountryTag)
    borderCountryList.append(borderCountryTag);
    })
   })
    }else{
        const noBorder = document.createElement('p');
        noBorder.innerText = 'no border countries';
        noBorder.classList.add("no-border");
        borderCountryList.append(noBorder);
    }
    })



































// const countryContainer = document.querySelector(".country-container")

// const borderCountryList = document.querySelector(".border-countries-li")


// const fetchCountry = async() => {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
//     const data = await res.json();
//     //console.log(data)
//     data.forEach(element => {
//         displaySelectedCountry(element);
//     });
//     //console.log(Object.values(element.name.nativeName)[0].common);

// };
// fetchCountry();



// function displaySelectedCountry(country) {
//     const countryDetails = document.createElement("section")
//     countryDetails.classList.add("country-details")
//     countryDetails.innerHTML = `
//     <div class="country-flag">
//                 <img src=${country.flags.svg} alt=${country.alt} />
//             </div>
//             <div class="country-info">
//                 <div class="col-1">
//                     <h1 class="country-title">${country.name.common}</h1>
//                 </div>
//                 <div class="col-2">
//                     <div class="col-2__A">
//                       <ul>
//                         <li><strong>Native Name: </strong> ${country.name.nativeName ? Object.values(country.name.nativeName)[0].common : country.name.common}</li>
//                         <li><strong>Population: </strong> ${country.population.toLocaleString('en-US')}</li>
//                         <li><strong>Region: </strong> ${country.region}</li>
//                         <li><strong>Sub Region: </strong> ${country.subregion}</li>
//                         <li><strong>Capital: </strong> ${country.capital}</li>
//                       </ul>
//                     </div>
//                     <div class="col-2__B">
//                       <ul>
//                         <li><strong>Top Level Domain: </strong> ${country.tld}</li>
//                         <li><strong>Currencies: </strong> ${country.currencies ? Object.values(country.currencies)[0].name : null}</li>
//                         <li><strong>Languages: </strong> ${country.languages ? Object.values(country.languages).join(", ") : null}</li>
//                       </ul>
//                     </div>
//                 </div>
//                 <div class="col-3">
//                     <h3 class="border-title">Border Countries:</h3>
//                     <div class="border-countries">
//                         <ul class="border-countries-ul">
//                             <li class="border-countries-li">
//                             ${
//                             country.borders.forEach((border) => {
//                                 fetch(`https://restcountries.com/v3.1/alpha/${border}`)
//                                 .then((res) => res.json())
//                                 .then(([borderCountry]) => {
//                                     //console.log(borderCountry.name.common)
                                  
//         const borderCountryTag = document.createElement('a')
//                 borderCountryTag.innerText = borderCountry.name.common
//                 borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
//                 console.log(borderCountryTag)
//                 borderCountryList.append(borderCountryTag)
//                                 })
//                             })
//                         }
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//             </div>`
//             countryContainer.appendChild(countryDetails); 
//           };






