import { fetchData } from './fetchData.mjs';
import {text} from './pageText.mjs'


//switch between senate and congress
 
const currentURL = window.location.href;
const urlParams = new URLSearchParams(window.location.search);
//alert(urlParams);

let title;;
let body;
 

if (currentURL.includes("chamber=house") ){
 
  title = text.congress.title;
  body = text.congress.body;
}

else if(currentURL.includes("chamber=senate") || currentURL.includes("members.html")){
 
    title = text.senate.title;
     body = text.senate.body;
  }

  export const insertText = () => {
    let container = document.querySelector(".display-text");
    container.innerHTML = `<h2>${title}</h2><p>${body}</p>`;

  };

insertText();
fetchData();
