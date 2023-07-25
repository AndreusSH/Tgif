import {buildTable} from './buildTable.mjs';
import { filterByParty} from './filter.mjs';
import { getStatistics } from './getStatistics.mjs';

const url_senate = "./json/senate.json";
const url_congress = "./json/congress.json";
 
let data;
 
let newArr = [];
 
let url = "";



//switch between senate and congress  ---> Need to refactor this and pass everything from builPagetext
 
const currentURL = window.location.href;
 

if (currentURL.includes("chamber=house")){
 
  url = url_congress;
}

else if(currentURL.includes("chamber=senate") || currentURL.includes("members.html") ||currentURL.includes("attendance.html")||currentURL.includes("loyalty.html")){
 
  url = url_senate;
}
 

 
 
 
 //fetch data from Json

 export const fetchData = async () => {
   //console.log("trigger the data function");
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log (data);
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
      export {data};
      console.log(data);
      const destructuredData = data.results[0].members;
      
 
    
      if(currentURL.includes("members.html") ){
        buildTable(destructuredData);
      }

      else if(currentURL.includes("attendance.html") || currentURL.includes("loyalty.html") ){
         getStatistics(destructuredData);
      }