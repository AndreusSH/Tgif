const url = "./json/senate.json";
const url_2 = "./json/congress.json";
let first_name;
let selected_party;
let target;
let resultElement;

const response2 = await fetch(url);
const data2 = await response.json();

 const getData = async () => {
   //console.log("trigger the data function");
  try {
    const response = await fetch(url);
    const data = await response.json();
    const members = await  data?.result;
    //first_name = data.results[0].members[0].first_name;
    console.log(members,'test')
    return data;
    //first_name;
  } catch (error) {
    console.log(error);
  }
};


 

//buildtable

const click = () =>{
   let checkboxes = document.querySelectorAll(".checkbox"); 
    
   checkboxes.forEach(function(checkbox) {
     checkbox.addEventListener("change", function() {
       //console.log("-------------------some input-------------------")
       checkboxes.forEach(function(checkbox) {
         if (checkbox.checked) {
         //console.log("checked")
          selected_party = checkbox.value;
          //console.log( typeof selected_party);
          
         }
         getFirstName(selected_party);
      })
     })
 
   })
 
}



const getFirstName = async (selected_party) => {
    const data = await getData();

     // Filter by party
 
      
            //console.log(party);

            for (let obj of data.results[0].members) {
               //faccio troppi loop e ripeto gli stessi nomi. 
                if(selected_party == obj.party){
                   first_name = obj.first_name;
                  //console.log(first_name);
                   target = document.getElementById('name');
                   resultElement = document.createElement('p');
                  resultElement.textContent = first_name;
                  target.appendChild(resultElement);
                }
            
            }
            
              }
            
       
    

     
 
    //getFirstName();
    click();

   
 
  
       
   



 


