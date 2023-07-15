const url = "./json/congress-house.json"


function callDataFunction() {
   fetch(url)
   .then(res => res.json())
   .then(data => {
      console.log(data.copyright);
   })
   .catch((error)=>{
      console.log(error)
   })
  

}

callDataFunction();