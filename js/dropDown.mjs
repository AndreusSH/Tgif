import {states} from './states.mjs';
import {filterByState} from './filter.mjs';


let state_key = "";

 
//function which populates dropdown with the states
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
  const currentURL = window.location.href;
 

 if( currentURL.includes("members.html")){
 
  document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dynamicDropdown');
    dropdownButton.addEventListener('click', function () {
       populateDropdown();
    });
  });
}
 


  export {state_key};
