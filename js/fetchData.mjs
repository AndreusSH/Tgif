const url_senate = "./json/senate.json";
const url_congress = "./json/congress.json";
 
let data;
 
let newArr = [];
 
let url = "";
let state_key = "";
let statistics = {};


import {states} from './states.mjs';
import{buildTable} from './buildTable.mjs';
import {filterByState, filterByParty} from './filter.mjs';


 
//populate dropdown
function populateDropdown() {
  document.getElementById('states').innerHTML= "";
 
   let dropdownMenu = document.getElementById('states');
   const entries = Object.entries(states);
    for (const [key,value] of entries) {
     const option = document.createElement('p');
  
    option.classList.add('dropdown-item');// this value is important 
    
    option.textContent = key + "  " + value;

   
     //console.log(dropdownMenu)

     dropdownMenu.appendChild(option);
     //everytime I choose a state will be selected the senators from the
     option.addEventListener('click',function(){
    
     state_key = key;
     
  
      // I call the function to filter and pass the Key of the object I have
      filterByState(state_key);
     

       //filter representatives by state
      
     })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dynamicDropdown');
  dropdownButton.addEventListener('click', function () {
    console.log('does it work?')
    populateDropdown();
  });
});




//switch between senate and congress  ---> Need to refactor this and pass everything from builPagetext
 
const currentURL = window.location.href;
 

if (currentURL.includes("chamber=house")){
 
  url = url_congress;
}

else if(currentURL.includes("chamber=senate") || currentURL.includes("members.html")){
 
  url = url_senate;
}
 

 
 
 
 //fetch data from Json

 export const fetchData = async () => {
   //console.log("trigger the data function");
  try {
    const response = await fetch(url);
    const data = await response.json();
     //console.log(statistics);
     return data;
     
  } catch (error) {
    console.log(error);
  }
};




//dobbiamo pensare meglio a come fare check ed uncheck
let elements = document.getElementsByClassName("checkbox");

for (let i = 0; i < elements.length; i++) {
   elements[i].addEventListener("change", function(event) {
     
     filterByParty(event);


});
      
}

 
      data = await fetchData();
      //console.log(newArr);
      export {data};
      export {state_key};
      buildTable(data.results[0].members);
