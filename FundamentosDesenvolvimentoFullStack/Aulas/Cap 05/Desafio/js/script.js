/*
   Estado de aplicacao (state)
*/
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoritesCountries = [];

let countCountries = 0;
let countFavoritesCountries = 0;

let totalPopulationList = 0;
let totalFavoritePopulationList = 0;

let numberFormat = null;

window.addEventListener("load", async ()=>{
   tabCountries = document.querySelector("#tabCountries");
   tabFavorites = document.querySelector("#tabFavorites");
   
   countCountries = document.querySelector("#countCountries");
   countFavoritesCountries = document.querySelector("#countFavorites");

   totalFavoritePopulationList = document.querySelector("#totalPopulationFavorites");
   totalPopulationList = document.querySelector("#totalPopulationList");

   numberFormat = Intl.NumberFormat('pt-BR');

   fetchCountries();

})

async function fetchCountries(){
   const paises = await fetch("http://restcountries.eu/rest/v2/all");
   const json = await paises.json();
   allCountries = json.map(country =>{
      const {numericCode, translations, population, flag} = country
      return {
         id: numericCode,
         name: translations.pt,
         population: population,
         formattedPopulation: formatNumber(population),
         flag: flag
      }
   }).sort((a,b)=>{
      return a.name.localeCompare(b.name);
   });

   render();

}

function render(){
   renderCountryList();
   renderFavorites();
   renderSummary();
   handleCountryButtons();
}

function renderCountryList(){
   let countriesHTML = "<div>";

   allCountries.forEach(country =>{
      const {name,flag,id,population,formattedPopulation} = country;

      const countryHTML = `
      <div class='country'>
         <div>
            <a id="${id}" class='waves-effect waves-light btn'>+</a>
         </div>
         <div>
            <img src="${flag}" alt="${name}" />
         </div>
         <div>
            <ul>
               <li>${name}</li>
               <li>${formattedPopulation}</li>
            </ul>
         </div>
      </div>
      `;
      countriesHTML += countryHTML;
   });
   countriesHTML += "</div>";
   tabCountries.innerHTML = countriesHTML;
}

function renderFavorites(){
   let favoritesHTML = "<div>";

   favoritesCountries.forEach(country=>{
      const {name,flag,id,population, formattedPopulation} = country;

      const favoriteCountryHTML = `
         <div class='country'>
            <div>
               <a id="${id}" class='waves-effect waves-light btn red darken-4'>-</a>
            </div>
            <div>
               <img src="${flag}" alt="${name}" />
            </div>
            <div>
               <ul>
                  <li>${name}</li>
                  <li>${formattedPopulation}</li>
               </ul>
            </div>
         </div>
      `;
      favoritesHTML += favoriteCountryHTML;
   })

   favoritesHTML += "</div>";
   tabFavorites.innerHTML = favoritesHTML;

}

function renderSummary(){
   countCountries.textContent = allCountries.length;
   countFavoritesCountries.textContent = favoritesCountries.length;

   const totalPopulation = allCountries.reduce((accumulator,current)=>accumulator+current.population,0);
   totalPopulationList.textContent = formatNumber(totalPopulation);

   const totalFavoritePopulation = favoritesCountries.reduce((accumulator,current)=>accumulator+current.population,0);
   totalFavoritePopulationList.textContent = formatNumber(totalFavoritePopulation);
}

function handleCountryButtons(){
   var countryButtons = Array.from(tabCountries.querySelectorAll(".btn"));
   var favoriteCountryButtons = Array.from(tabFavorites.querySelectorAll(".btn"));

   countryButtons.forEach(button => {
      button.addEventListener("click", ()=> addToFavorites(button.id))
   });
   favoriteCountryButtons.forEach(button => {
      button.addEventListener("click", ()=> removeFromFavorites(button.id))
   });

}

function addToFavorites(id){
   const countryToAdd = allCountries.find(country => country.id === id);
   favoritesCountries = [...favoritesCountries,countryToAdd];
   favoritesCountries.sort((a,b)=>{
      return a.name.localeCompare(b.name);
   })
   allCountries = allCountries.filter(country=> country.id !== id);
   render();
}

function removeFromFavorites(id){
   const countryToRemove = favoritesCountries.find(country => country.id === id);

   allCountries = [...allCountries,countryToRemove];
   
   allCountries.sort((a,b)=>{
      return a.name.localeCompare(b.name);
   });

   favoritesCountries = favoritesCountries.filter(country=> country.id !== id);
   render();
}

function formatNumber(number){
   return numberFormat.format(number);
}