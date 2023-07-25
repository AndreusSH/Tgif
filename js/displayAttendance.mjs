let table;
const currentURL = window.location.href;
export const changeChamber = () => {

let chamber = document.getElementById("chamber");

if (currentURL.includes("chamber=house")){
 
  chamber.innerText = "House of Representatives at a glance";
}

else if(currentURL.includes("chamber=senate") || currentURL.includes("members.html")){
 
    chamber.innerText = "Senate at a glance";
}
}

export const display = (r,d,i) => {
     let rep = document.getElementById("n_republican");
    rep.innerText = r;
    let dem = document.getElementById("n_democrat");
    dem.innerText = d;
    let ind = document.getElementById("n_independent");
    ind.innerText = i;
    
}

export const displayPerc = (r,d,i) =>{

     let rep = document.getElementById("perc_rep");
    rep.innerText = r;
    let dem = document.getElementById("perc_dem");
    dem.innerText = d;

    let ind = document.getElementById("perc_ind");
    
    ind.innerText = i;

}

//display the 10 most present
export const displayTopTen = (sortedArr, topOrBottom) =>{
    //document.getElementsByClassName("table-body").innerHTML = "";


    if (topOrBottom == "top"){
         table = document.getElementById("table-body");
 
    }

    else if (topOrBottom == "bottom"){
        table = document.getElementById("table-body2");
     }
     while (table.firstChild) {
        table.removeChild(table.firstChild);
    }


    for (let i of sortedArr){
        let row = table.insertRow();

    let name = row.insertCell(0);
    let missed_votes = row.insertCell(1);
    let perc_missed = row.insertCell(2);


    if (currentURL.includes("attendance.html") ){
        name.innerText = i.first_name + " " + i.last_name;
        missed_votes.innerText = i.missed_votes;
        perc_missed.innerText = i.missed_votes_pct
    }
    else if (currentURL.includes("loyalty.html")){
        name.innerText = i.first_name + " " + i.last_name;
        missed_votes.innerText = i.votes_with_party_pct;
        perc_missed.innerText = i.missed_votes_pct
    }
   
    
   }
}