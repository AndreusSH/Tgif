const url = "./json/senate.json";
const url_2 = "./json/congress.json";
let first_name;
let selected_party;
//let target;
//let resultElement;
let data;
let data_filtered;
let newArr = [];
let checked_arr = ['R','I','D'];
let filtered_array = [];
 

 

 
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
  //console.log(arr.length);
  //const data = await fetchData();
  //console.log("----------------------" + object);
  document.getElementById("header").innerHTML = ""; 
   let table = document.getElementById("header");
  console.log(arr)
    

//loop through all members of the chamber or senate
for (let i = 0 ; i < arr.length; i++){
  //console.log(object[i]);
   // stampa template
   console.log(" ----------- >>>>" + arr.length)
  let row = table.insertRow() // Add a new row to the table

  // Add cells to the new row
  let name = row.insertCell(0);
  let party = row.insertCell(1);
  let state = row.insertCell(2);
  let years_office = row.insertCell(3);
  let votes = row.insertCell(4);
 // if (obj.party == "R"){
    name.innerHTML = arr[i].first_name;
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
    console.log("Event listener works");
    console.log(event.target.value)
    newArr = data.results[0].members;

    if(event.target.checked){
      //console.log("value is checked " + event.target.value);
      checked_arr.push(event.target.value);
      //console.log(checked_arr);
      filtered_array = newArr.filter((element) => checked_arr.includes(element.party));
 

    }
    
    else if (!event.target.checked){
      checked_arr = checked_arr.filter((element) => element !== event.target.value);
      //console.log(checked_arr);

      //console.log("value is NOT checked " + event.target.value);
      filtered_array = newArr.filter((element) => checked_arr.includes(element.party));
 
    }
    buildTable(filtered_array);

    });



}
      
 
    //getFirstName();
    //click();
    //buildTable();
     data = await fetchData();
    //console.log(data); 
    
    //let checkboxes = filter();
      buildTable(data.results[0].members);
    //filter();

   
 
  
       
   



 


