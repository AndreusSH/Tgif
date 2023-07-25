const currentURL = window.location.href;
import { changeChamber,display, displayPerc, displayTopTen } from "./displayAttendance.mjs";

let republicans = 0;
let democrats = 0;
let independents = 0;
 


export const getStatistics = (data) => {
    calcPercentageVotes(data);

     if(currentURL.includes("attendance.html")){
        
        calcTopTen(data);
        bottomTen(data);

     }

     else if (currentURL.includes("loyalty.html")){
        loyaltyTopTen(data);
        loyaltyBottomTen(data);
     }
    
  

}

/*
const countPartiesMembers = (data) =>{

        republicans = data.filter((el) => el.party == "R").length;
        democrats = data.filter((el) => el.party == "D").length;

         independents= data.filter((el) => el.party == "I").length;
         
         display(republicans, democrats, independents);
        }

        */

const calcPercentageVotes = (data) => {

    let rep_perc = 0;
    let dem_perc = 0;
    let ind_perc = 0;

for (let d of data){
    if (d.party == "R"){
        republicans += 1;
        rep_perc += d.votes_with_party_pct;
 
    }
    else if (d.party == "D"){
        democrats += 1;
        dem_perc += d.votes_with_party_pct;


    }
    else if (d.party == "I"){
        independents += 1;
        ind_perc += d.votes_with_party_pct;
        
    } 
}

rep_perc= rep_perc/republicans;
dem_perc = dem_perc/democrats;

ind_perc = isNaN(ind_perc/independents) ?  0 : ind_perc/independents ;
 
changeChamber();
display(republicans, democrats, independents);

 

displayPerc(rep_perc.toFixed(2), dem_perc.toFixed(2),ind_perc.toFixed(2));
 

}


//top 10 most loyal
const loyaltyTopTen = (data) =>{
    const sortedArray = data.sort((a,b) => a.votes_with_party_pct
    - b.votes_with_party_pct).slice(0,10);
    console.log(sortedArray);
    displayTopTen(sortedArray, "top");
}


//top 10 least loyal
const loyaltyBottomTen = (data) =>{
    const sortedArray = data.sort((a,b) => 
    a.votes_against_party_pct - b.votes_against_party_pct
    ).slice(0,10);
    console.log(sortedArray);
    displayTopTen(sortedArray, "bottom");
}
  
//top 10 most engaged 

const calcTopTen = (data) =>{
    const sortedArray = data.sort((a,b) => a.missed_votes -b.missed_votes).slice(0,10);
   
    displayTopTen(sortedArray, "top");
}

const bottomTen = (data) =>{
    const sortedArray = data.sort((a,b) => b.missed_votes - a.missed_votes).slice(0,10);
    displayTopTen(sortedArray, "bottom");
}