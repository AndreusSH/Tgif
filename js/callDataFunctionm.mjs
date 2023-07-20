const url_senate = "./json/senate.json";
const url_congress = "./json/congress.json";
let first_name;
let selected_party;
let data;
let data_filtered;
let newArr = [];
let checked_arr = ['R','I','D'];
let filtered_array = [];
let url = "";

import {states} from './states.mjs';

 
function populateDropdown() {
  document.getElementById('states').innerHTML= "";
 
   let dropdownMenu = document.getElementById('states');
   const entries = Object.entries(states);
  for (const [key,value] of entries) {
    //console.log(key);
    const option = document.createElement('p');
  
    option.classList.add('dropdown-item');// this value is important 
    
    option.textContent = key + "  " + value;

      
     //console.log(dropdownMenu)

     dropdownMenu.appendChild(option);
//everytime I choose a state will be selected the senators from the
     option.addEventListener('click',function(){
      alert(option.innerHTML);

      // I call the function to filter and pass the Key of the object I have
      filtermembers(key);
     

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

//filter senators and representatives by State

const filtermembers = (k) =>{
  let filtered_representatives = data.results[0].members.filter((el)=> el.state == k);
  buildTable(filtered_representatives);
}


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


//buildtable

const buildTable =  (arr) => {
 
  document.getElementById("header").innerHTML = ""; 
   let table = document.getElementById("header");
     

//loop through all members of the chamber or senate
for (let i = 0 ; i < arr.length; i++){
   
   let row = table.insertRow() // Add a new row to the table

  // Add cells to the new row
  let name = row.insertCell(0);
  let party = row.insertCell(1);
  let state = row.insertCell(2);
  let years_office = row.insertCell(3);
  let votes = row.insertCell(4);
     name.innerHTML = arr[i].first_name + " " + arr[i].last_name;
    party.innerHTML = arr[i].party;
    state.innerHTML = arr[i].state;
    years_office.innerHTML = arr[i].seniority;
    votes.innerHTML = arr[i].votes_with_party_pct;

 }


}


//dobbiamo pensare meglio a come fare check ed uncheck
let elements = document.getElementsByClassName("checkbox");

for (let i = 0; i < elements.length; i++) {
   elements[i].addEventListener("change", function(event) {
     
    newArr = data.results[0].members;

    if(event.target.checked){
       checked_arr.push(event.target.value);
       filtered_array = newArr.filter((element) => checked_arr.includes(element.party));
 

    }
    
    else if (!event.target.checked){
      checked_arr = checked_arr.filter((element) => element !== event.target.value);
 
       filtered_array = newArr.filter((element) => checked_arr.includes(element.party));
 
    }
        buildTable(filtered_array);

    });


}
      

 
 
 
      data = await fetchData();
     
      buildTable(data.results[0].members);
 
   
 
  
       
   



 


