
var CATS_ARRAY = [
  {name: 'Fluffy', Food: 'Kebabs, catImage: 'https://i.ytimg.com/vi/yAIGLAgEa84/hqdefault.jpg'};
  {name: 'Snuggles', Food: 'Chips n cheese', catImage: 'https://i.kinja-img.com/gawker-media/image/upload/s--ewHqqg72--/c_scale,f_auto,fl_progressive,q_80,w_800/17kloag5i0ekojpg.jpg'};
  {name: 'Catface', Food: 'Snickers', catImage: 'https://metrouk2.files.wordpress.com/2014/05/ad_136122323-e1401269149971.jpg?quality=80&strip=all'};

]

var addCat = function(name, food, catPic){
  var newCat = createNewCat();
  var addName = createCatName(name);
  var addFood = createCatsFood(food);
  var catPic = createCatPic(catPic);

  appendElements(addName, addFood, catPic);
}

var createNewCat = function(){
  var newCat = document.createElement('ul');
  newCat.classList.add('cat');
  return newCat;
}

var createCatName = function(newName){
  var catName = document.createElement('li');
  catName.innerText = newName;
  return catName;
}

var createCatsFood = function(food){
  var catsFood = document.createElement('li');
  catsFavouriteFood.innerText = food;
  return catsFood;
}


var createCatPic = function(catPic){
  var newCatPic = document.createElement('img');
  newCatImage.src = catPic;
  return newCatPic;
}

var appendElements = function(addName, addFavouriteFood){

var newCats = document.querySelector('#cats');

  // catImageHolder.appendChild(addCatPic);
  catul.appendChild(addName);
  catul.appendChild(addFood);

}

var app = function(){
  for(var cat of CATS_ARRAY){
    addCat(cat.name, cat.food, cat.catPic);
  }
}

window.onload = app;










// var app = function() {
//   var catList = document.createElement("ul"); /* Create a variable called catList */
//   catList.classList.add('cat'); /* adds a cat into that catlist that we created */
//
//   var catName = document.createElement('li');
//   catName.innerText = ('New cat name');
//
//   var favouriteFood = document.createElement('li');
//   catFood.innerText = ('CatFood');
//
//   var catImage = document.createElement('img');
//   catImage.setAttribute('width', '500');
//   catImage.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg');
//
//   catList.appendChild(catName);
//   catList.appendChild(catFood);
//   catList.appendChild(catImage);
//
//   let cats = document.querySelector('#cats');
//   cats.appendChild(catList);
// }
