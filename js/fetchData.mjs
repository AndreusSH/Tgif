const url_senate = "./json/senate.json";
const url_congress = "./json/congress.json";
 
let data;
 
let newArr = [];
let checked_arr = ['R','I','D'];
 
let url = "";
let state_key = "";

import {states} from './states.mjs';
import{buildTable} from './buildTable.mjs';

 
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




//switch between senate and congress
 
const currentURL = window.location.href;
 

if (currentURL.includes("congress.html")){
 
  url = url_congress;
}

else if(currentURL.includes("senate.html")){
 
  url = url_senate;
}
 

 
 
 
 //fetch data from Json

 export const fetchData = async () => {
   //console.log("trigger the data function");
  try {
    const response = await fetch(url);
    const data = await response.json();
     //console.log(data.results[0].members);
     return data;
    //first_name;
    buildTable(data);
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
      
//I filter the senators and representatives by party
 const filterByParty = (event) => {
      
  //newArr = data.results[0].members;

  if(event.target.checked){
     checked_arr.push(event.target.value);
     //filtered_array = newArr.filter((element) => checked_arr.includes(element.party));


  }
  
  else if (!event.target.checked){
    checked_arr = checked_arr.filter((element) => element !== event.target.value);

     //filtered_array = newArr.filter((element) => checked_arr.includes(element.party));

  }
       //buildTable(filtered_array);
        filterByState(state_key);

  }
 
 }
 //filter senators and representatives by State

const filterByState = (k = "") =>{
  console.log(checked_arr);
  //I do not have the state filter
  if (checked_arr.length == 0){
     //newArr.push("You have not selected any party")
     newArr = [];

  }
  else{

    if (k== ""){
        newArr = data.results[0].members.filter((el) => checked_arr.includes(el.party));
       //&& el.state == state_key

    }
    else{
      newArr = data.results[0].members.filter((el) => el.state == k && checked_arr.includes(el.party));

    }
    
    console.log(newArr);

  }
    buildTable(newArr);
}

 
      data = await fetchData();
      //console.log(newArr);
      
      buildTable(data.results[0].members);
 
   
 
  
       
   



 


