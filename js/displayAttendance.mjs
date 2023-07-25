let table;
const currentURL = window.location.href;
export const changeChamber = () => {

let chamber = document.getElementById("chamber");

if (currentURL.includes("chamber=house")){
 
  chamber.innerText = "House of Representatives at a glance";
}

else if(currentURL.includes("chamber=senate") || currentURL.includes("members.html") || currentURL.includes("attendance.html")|| currentURL.includes("loyalty.html")){
 
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

    if (currentURL.includes("loyalty.html")){

        let total = document.getElementById("n_total");
        n_total.innerText = r + i + d;
    }


    
}

export const displayPerc = (r,d,i) =>{
  
     let rep = document.getElementById("perc_rep");
    rep.innerText = r;
    let dem = document.getElementById("perc_dem");
    dem.innerText = d;

    let ind = document.getElementById("perc_ind");
    
    ind.innerText = i;

    if (currentURL.includes("loyalty.html")){

        let tot = document.getElementById("perc_total");

        if (parseFloat(i) == 0.00){
            tot.innerText = ((parseFloat(r) + parseFloat(d))/2).toFixed(2);
        }
        else{
            tot.innerText = ((parseFloat(r) + parseFloat(d) + parseFloat(i))/3).toFixed(2);
        }
        
    }

   


 
}

//display the 10 most present
export const displayTopTen = (sortedArr, topOrBottom) =>{
    //document.getElementsByClassName("table-body").innerHTML = "";


    if (topOrBottom == "top"){
         table = document.getElementById("table-body2");
 
    }

    else if (topOrBottom == "bottom"){
        table = document.getElementById("table-body");
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
        perc_missed.innerText = i.missed_votes_pct;
    }
    else if (currentURL.includes("loyalty.html")){
        name.innerText = i.first_name + " " + i.last_name;
        missed_votes.innerText = i.total_votes + Math.round(i.votes_with_party_pct/10);
        perc_missed.innerText = i.votes_with_party_pct;
    }
   
    
   }
}