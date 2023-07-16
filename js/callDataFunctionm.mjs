const url = "./json/senate.json";
let first_name;

 const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //first_name = data.results[0].members[0].first_name;
    return data;
    //first_name;
  } catch (error) {
    console.log(error);
  }
};


const getFirstName = async () => {
    const data = await getData();
    
      //console.log(typeof data.results)
      //console.log(data.results[0].members[1].title)

      //first_name = data.results[0].members[0].first_name;  
      console.log(data.results[0].members);  
      for (let obj of data.results[0].members) {
       first_name = obj.first_name;
       const target = document.getElementById('name');
       const resultElement = document.createElement('p');
       resultElement.textContent = first_name;
       target.appendChild(resultElement);

       
      }
    

       
    }
 
    getFirstName();
    





