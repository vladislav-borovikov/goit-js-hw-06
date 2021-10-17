const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// images.forEach(image => {
//   const imegListItem = document.createElement('img')
//   imegListItem.src = image.url
//   imegListItem.alt = image.alt
//   console.log(imegListItem)
//   const galleryList = document.querySelector('.gallery')
//   galleryList.insertAdjacentHTML("afterbegin", `<li> ${imegListItem}</li>`);
// })


const galleryList = document.querySelector('.gallery')
const imgNew = images.map(img =>
  `<li> <img class="gallery-item" src=${img.url} alt=${img.alt}/> </li>`
).join("")
galleryList.insertAdjacentHTML('afterbegin', imgNew)