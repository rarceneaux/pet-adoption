const pets = [

          {
            image:'https://i1.wp.com/www.PartisanIssues.com/wp-content/uploads/2019/02/AI-cat-9.jpg?ssl=1',
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
            image:'https://i1.wp.com/www.PartisanIssues.com/wp-content/uploads/2019/02/AI-cat-9.jpg?ssl=1',
            name:'Lil Bit',
            color:'Blue',
            specialSkill:'Barking Loudly',
            typeofPet:'Dog',
          },
          {
            image:'https://global-free-classified-ads-s02.r.worldssl.net/user_images/6882910.jpg',
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
            image:'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/c6/fc/67/c6fc6788-14ab-ef49-ee64-7b773b3a6811/source/256x256bb.jpg',
            name:'Kerry',
            color:'Red',
            specialSkill:'Basketball',
            typeofPet:'Dino',
          },
          {
            image:'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/c6/fc/67/c6fc6788-14ab-ef49-ee64-7b773b3a6811/source/256x256bb.jpg',
            name:'Baby Sinclair',
            color:'Red',
            specialSkill:'Football',
            typeofPet:'Dino',
          }];

const printToDom = (stringToPrint, divId) =>{
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

const cardBuilder = () => {
  petString = '';
  pets.forEach((animal) =>{
  petString += `<div class='card'>`;
  petString += `<h1 class='title'>${animal.name}</h1>`;
  petString += `<div class='pic'>`;
  petString += `<img src='${animal.image}' class='pic'>`;
  petString +=  `</div>`;
  petString +=  `<h4 class='color'>${animal.color}</h4>`;
  petString +=  `<h4 class='pet-info'>${animal.specialSkill}</h4>`;
  petString +=  `<footer class='type-color>'${animal.color}</footer>`;
  petString += `</div>`;
})
printToDom(petString,'pets')
}
cardBuilder();





