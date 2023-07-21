//buildtable function creates a table with senators and congressmen data

export const buildTable =  (arr) => {
 
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


    // Add a link around the name
    const link = document.createElement("a");
    link.href = arr[i].url;
    link.textContent = arr[i].first_name + " " + arr[i].last_name;
    name.appendChild(link);

      //name.innerHTML =  arr[i].first_name + " " + arr[i].last_name;
      
      party.innerHTML = arr[i].party;
      state.innerHTML = arr[i].state;
      years_office.innerHTML = arr[i].seniority;
      votes.innerHTML = arr[i].votes_with_party_pct;
  
   }
  
  
  }
  