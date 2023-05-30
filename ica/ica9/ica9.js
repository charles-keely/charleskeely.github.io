
const button = document.querySelector('#js-new-quote');

const btnClick = button.addEventListener('click', newTrivia);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function newTrivia(){
    try{
        console.log("button clicked");
        const response = await fetch(endpoint);
    
        if(!response.ok){
            throw Error(response.statusText);
        }

        const jsonData = await response.json();
        const quoteText = jsonData['question'];
        const quoteArea = document.querySelector('#js-quote-text');
        quoteArea.textContent = quoteText;
    }
    catch(err) {
        console.log(err) 
        alert('failed');
    }
}