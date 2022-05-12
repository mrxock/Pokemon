let elPokemonsList = $(".js-pokemons-list");

let createPokemonItem = function (i){
  let elNewLi = createElement("li","card w-25 m-3 text-center");

let elNewImg = createElement("img","card-img-top");
elNewImg.src = pokemons[i].img;
elNewImg.width = 300;
elNewImg.height = 250;

let elNewWrapper = createElement("div", "card-body");

let elNewHeading = createElement("h3","card-title h5",pokemons[i].name);

let elNewText = createElement("p","card-text",pokemons[i].type.join(", "));

elNewWrapper.append(elNewHeading, elNewText);
elNewLi.append(elNewImg,elNewWrapper);
elPokemonsList.append(elNewLi);

}


for (let i = 0; i < pokemons.length; i++){
  createPokemonItem(i)
}

