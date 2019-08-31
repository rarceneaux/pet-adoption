
// Pets Array of pet objects to Loop Over

let pets = [

          {
            image:'https://bondvet.com/wp-content/uploads/2019/04/xPeach-Bond-Vet-256x256.jpg.pagespeed.ic.DPUXieWfAF.jpg',
            name:'Ed',
            color:'Green',
            specialSkill:'Eating',
            typeofPet:'Cat',
          },
          {
            image:'https://images-na.ssl-images-amazon.com/images/I/71GgwokxpJL._CR0,132,1288,1288_UX256.jpg',
            name:'Vincent',
            color:'Green',
            specialSkill:'Sleeping',
            typeofPet:'Cat',
          },
          {
            image:'https://cdn131.picsart.com/304362737044201.jpg?c256x256',
            name:'Ted',
            color:'Green',
            specialSkill:'Jumping',
            typeofPet:'Cat',
          },
          {
            image:'https://i1.wp.com/www.PartisanIssues.com/wp-content/uploads/2019/02/AI-cat-9.jpg?ssl=1',
            name:'Sally',
            color:'Green',
            specialSkill:'Eating',
            typeofPet:'Cat',
          },
          {
            image:'https://www.clubk9.com/wp-content/uploads/2018/06/french-bulldog-summer-smile-joy-160846-256x256.jpg',
            name:'Leo',
            color:'Blue',
            specialSkill:'Hunting',
            typeofPet:'Dog',
          },
          {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OrcK9AuzX6W-yu7SAagyxL7mS93rwhhZOWeV3w7X5W2kOzCINA',
            name:'Winston',
            color:'Blue',
            specialSkill:'Climbing',
            typeofPet:'Dog',
          },
          {
            image:'https://global-free-classified-ads-s02.r.worldssl.net/user_images/6882910.jpg',
            name:'Lil Bit',
            color:'Blue',
            specialSkill:'Barking Loudly',
            typeofPet:'Dog',
          },
          {
            image:'https://news.artnet.com/app/news-upload/2018/01/2.-Riley-the-dog-at-the-Museum-of-Fine-Arts-Boston-256x256.jpg',
            name:'Kobe',
            color:'Blue',
            specialSkill:'Swimming',
            typeofPet:'Dog',
          },
          {
            image:'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/8c/d1/8c/8cd18c29-34c2-beb8-33b0-8e8afa181785/source/256x256bb.jpg',
            name:'T-Rex',
            color:'Red',
            specialSkill:'Being Dead',
            typeofPet:'Dino',
          },
          {
            image:'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/c6/fc/67/c6fc6788-14ab-ef49-ee64-7b773b3a6811/source/256x256bb.jpg',
            name:'Steve',
            color:'Red',
            specialSkill:'Going Back in Time',
            typeofPet:'Dino',
          },
          {
            image:'https://vignette.wikia.nocookie.net/solforge/images/3/36/Stouthide_Stegadon_1.jpg/revision/latest?cb=20151122063022',
            name:'Kerry',
            color:'Red',
            specialSkill:'Basketball',
            typeofPet:'Dino',
          },
          {
            image:'https://miro.medium.com/fit/c/256/256/0*Rg_tOPLo9WXq2K-P.jpg',
            name:'Baby Sinclair',
            color:'Red',
            specialSkill:'Football',
            typeofPet:'Dino',
          }];


// Print-To-Dom = (PTD) Function
const printToDom = (stringToPrint, divId) =>{
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

// Card Builder Function to loop over pet array & build pet cards and PTD 
const cardBuilder = () => {
  petString = '';
  for(let i =0;i< pets.length;i++){
  petString += `<div class='card'>`;
  petString += `<div class='top'>`;
  petString += `<h1 class='title'>${pets[i].name}</h1>`;
  petString += `</div>`;
  petString += `<div class='pic'>`;
  petString += `<img src='${pets[i].image}' class='pic'>`;
  petString +=  `</div>`;
  petString +=  `<h4 class='color'>${pets[i].color}</h4>`;
  petString +=  `<h4 class='pet-info'>${pets[i].specialSkill}</h4>`;
  petString +=  `<h3 class='type'>${pets[i].typeofPet}</h3>`;
  petString += `</div>`;
}
printToDom(petString,'petsDiv');

};
// cardBuilder();

// Pet Btns Click Events 
const petsBtnEvents  = (e) => {
  const petBtnClicked = e.target.id;
  if (petBtnClicked === 'cats') {
    let catString = '';
   for(let i =0;i<pets.length;i++)
   if (pets[i].typeofPet === 'Cat'){
     catString += petsFilterBuilder(pets[i]);
    //  clearPetsDiv();
     petColor(catString);  
   } 
   printToDom(catString,'petsDiv')
  } else if 
    (petBtnClicked === 'dogs'){
      let dogString = '';
      for (let i = 0;i<pets.length;i++){
        if(pets[i].typeofPet === 'Dog'){
          dogString += petsFilterBuilder(pets[i]);
          clearPetsDiv();
          petColor(dogString);  
        }
      }
      printToDom(dogString,'petsDiv');
      } else {
        (petBtnClicked === 'dinos')
        let dinoString = '';
        for(let i =0;i<pets.length;i++){
        if (pets[i].typeofPet === 'Dino'){
          dinoString += petsFilterBuilder(pets[i]);
          clearPetsDiv();
          petColor(dinoString);  
        }
      }
printToDom(dinoString,'petsDiv');
}  
};    
    
// Function to clear out petsDiv after cat,dog,dino btns are clicked
const clearPetsDiv = () => {
 let pDiv = document.getElementById('petsDiv').innerHTML = '';
};

// Pet Btns captured and event listeners added
const btnEvents = () =>{
const catsBtn =  document.getElementById('cats').addEventListener('click', petsBtnEvents);
const dogsBtn =  document.getElementById('dogs').addEventListener('click', petsBtnEvents);
const dinosBtn =  document.getElementById('dinos').addEventListener('click', petsBtnEvents);  
};
btnEvents();


// Function to filter thru the pets btns click to show desired pet
const petsFilterBuilder =(pet)=> {
  let filterString = '';
  filterString += `<div class='card'>`;
  filterString += `<div class='top'>`;
  filterString += `<h1 class='title'>${pet.name}</h1>`;
  filterString += `</div>`;
  filterString += `<div class='pic'>`;
  filterString += `<img src='${pet.image}' class='pic'>`;
  filterString +=  `</div>`;
  filterString +=  `<h4 class='color'>${pet.color}</h4>`;
  filterString +=  `<h4 class='pet-info'>${pet.specialSkill}</h4>`;  
  filterString +=  `<h3 class='type'>${pet.typeofPet}</h3>`;
  filterString +=   `</div>`
  return filterString;
};

// Show ALL Pets Function-- Btn ('all')
const allPets = (e) => {
  const all = e.target.id;
  if(all === 'all'){
    clearPetsDiv();
    cardBuilder(pets);
  }
};
// Show All Btn captured and event listener added
const showAll = () => {
  const allBtn = document.getElementById('all').addEventListener('click',allPets);
}
showAll();

const petColor = () => {
  let cardColor = document.getElementsByClassName('type');
  for(let i =0;i<cardColor.length;i++){
    if (cardColor[i].textContent === "Dog") {
       cardColor[i].style.backgroundColor = "blue";
    } else if (cardColor[i].textContent === "Dino") {
       cardColor[i].style.backgroundColor = "red";
    } else { cardColor[i].textContent === "Cat"
     cardColor[i].style.backgroundColor = "green";
      }
    }
  };
  petColor();  