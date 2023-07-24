export const changeChamber = () => {
    const currentURL = window.location.href;
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