import { retrieveSpecials, retrieveSuggestions } from './retrieveContent.js';
import "./bootstrap.css"

async function showContent() {
  try {
    const contentSpecials = await retrieveSpecials();

    const contentSuggestions = await retrieveSuggestions();

    contentSpecials.forEach(createSpecials);

    //contentSuggestions.forEach(createSuggestions);

    console.log(contentSuggestions);


  } catch (e) {
    console.log('Error', e);
  }
}

showContent();



function createSpecials(element) {

  let firstDiv = document.createElement('div');
  firstDiv.className = "col card";
  firstDiv.id = element.image.hash;
  firstDiv.style.with = "18rem";

  document.querySelector('#todays_specials').appendChild(firstDiv);


  let imageCard = document.createElement('img');
  imageCard.className = "bd-placeholder-img card-img-top";
  imageCard.src = "https://api.gill-cote-bistro.fr" + element.image.url;
  imageCard.width = "100%";
  imageCard.height = "225";

  document.querySelector('#' + element.image.hash).appendChild(imageCard);

  let secondDiv = document.createElement('div');
  secondDiv.className = "card-body";
  secondDiv.id = element.image.hash + "second";

  document.querySelector('#' + element.image.hash).appendChild(secondDiv);

  let title = document.createElement('h5');
  title.className = "card-title" ;
  title.textContent = element.title;

  document.querySelector('#' + element.image.hash + "second").appendChild(title);

  let content = document.createElement('p');
  content.className = "card-text";
  content.textContent = element.description;

  document.querySelector('#' + element.image.hash + "second").appendChild(content);


}


