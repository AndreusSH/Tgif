export let checked_arr = ['R','I','D'];
let newArr = [];

import{buildTable} from './buildTable.mjs';
import {data} from './fetchData.mjs';
import { state_key } from './dropDown.mjs';

 
 //filter senators and representatives by State

export const filterByState = (k = "") =>{
  
  console.log(checked_arr);
  //I do not have the state filter
  if (checked_arr.length == 0){
     //newArr.push("You have not selected any party")
     newArr = [];

  }
  else{

    if (k == ""){
        newArr = data.results[0].members.filter((el) => checked_arr.includes(el.party));
 
    }
    else {
      
      newArr = data.results[0].members.filter((el) => el.state == k && checked_arr.includes(el.party));

    }
    
    

  }
    buildTable(newArr);
  }

  //I filter the senators and representatives by party
 export const filterByParty = (event) => {
      
    //newArr = data.results[0].members;
  
    if(event.target.checked){
       checked_arr.push(event.target.value);
       //filtered_array = newArr.filter((element) => checked_arr.includes(element.party));
  
  
    }
    
    else if (!event.target.checked){
      checked_arr = checked_arr.filter((element) => element !== event.target.value);
  
   
    }
          
          filterByState(state_key);
  
    }
    
  