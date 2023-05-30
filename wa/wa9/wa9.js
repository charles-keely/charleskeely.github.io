const button = document.querySelector('#randomDog');
const btnClick = button.addEventListener('click', newDog);

const api = "https://random.dog/woof.json";

async function newDog(){
    
    try{
        const response = await fetch(api);
        if(!response.ok){
            throw Error(response.statusText);
        }

        const jsonData = await response.json();
        const dogPicURL = jsonData['url'];
        console.log(dogPicURL);
        const img = document.querySelector("img");
        img.src = dogPicURL;
        
    }
    catch(err) {
        console.log(err) 
        alert('failed');
    }

}