const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storytext = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
// new section might need to move down
    
    var newStory = storytext;
    var xItem, yItem, zItem;
    
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:",xItem);
    newStory = newStory.replace(":inserty:",yItem);
    newStory = newStory.replace(":insertz:",zItem);
    newStory = newStory.replace(":insertx:",xItem);

//end


    if(customName.value !== '') {
        var name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        var stonesPerPound = 0.0714286;
        var weight = Math.round(300*stonesPerPound) + ' stone';
        var temperature =  Math.round((94-32)/1.8) + ' centigrade';
        newStory = newStory.replace("94 farenheit", temperature);
        newStory = newStory.replace("300 pounds", weight);
    }  

    story.textContent = newStory;
    story.style.visibility = 'visible';
}