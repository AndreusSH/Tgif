 import { changeChamber,display,displayPerc } from "./displayAttendance.mjs";

let republicans = 0;
let democrats = 0;
let independents = 0;


export const getStatistics = (data) => {
console.log(data);
     //countPartiesMembers(data);
     calcPercentageVotes(data);

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

ind_perc =ind_perc/independents ;
changeChamber();
display(republicans, democrats, independents);
displayPerc(rep_perc.toFixed(2), dem_perc.toFixed(2),ind_perc.toFixed(2));
 
}