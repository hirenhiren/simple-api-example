let apiKey = 'VDEfUAwmYYwZCkI7MaanYr9bcFjwLdKSr2SdrBcVXxXhIBLDZmdaWmRj';
let page = 1;

let genImageBtn = document.getElementById('randomImageBtn');
let randomImage = document.getElementById('memeImage');
let cameraManName = document.getElementById('imageTakerName');
let photoImageTitle = document.getElementById('memeTitle');

function fetchRandomImage(){
  
  let apiUrl = `https://api.pexels.com/v1/curated?page=${page}&per_page=1`;

  fetch(apiUrl,{
    headers:{
      'Authorization': apiKey
    }
  }).then(response =>{
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    return response.json()
  }).then((data) =>{
    console.log(data);
    const imageURL = data.photos[0].src.large;
    randomImage.src = imageURL;
    page++
    const ImagePhotographer = data.photos[0].photographer;
    cameraManName.innerText = `By : ${ImagePhotographer}`;
    const ImageTitle = data.photos[0].alt;
    photoImageTitle.innerText = ImageTitle;

  }).catch((error) =>{
    console.error('Error fetching image:', error);
  })
}

fetchRandomImage();