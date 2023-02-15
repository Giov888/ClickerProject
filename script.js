let myButtonElement = document.getElementsByTagName("button")[0];//Clock button--Event listeners at bottom
let myButtonBuyElement = document.getElementsByTagName("button")[1];//Second button
let myHourButton = document.getElementsByTagName("button")[3];//Hour button
let myMinutesButton = document.getElementsByTagName("button")[2];//Minutes button

let clockCounter = document.getElementById("clock_counter");//big clock counter
let cpsCounter = document.getElementById("cps");//clicks per second counter

let timeOfCounter = 0;//starts counter at 0
let textOfDiv = "Second";//increment measurement
let myProducer = ["Second", "Hour", "Minute"];//array for producers
let costOfProducer = [5, 15, 10];//cost of producers
let producerCount = [0, 0, 0];//starting point of the counter until it reaches producer price

let cps = 0;//Defining variable for clicks per second
//I need this to add time as the viewer is on webpage
function addTime() {
  timeOfCounter = timeOfCounter + 1;
  clockCounter.textContent = timeOfCounter;

  // Check if any producer should become visible
  for (let i = 0; i < myProducer.length; i++) {
    let producerName = myProducer[i];
    let producerCost = costOfProducer[i];

    if (timeOfCounter >= producerCost) {
      // Show the producer button when time matches--THis doesn't work at the moment ask Elle for help
      document.getElementById(`buy_${producerName.toLowerCase()}_button`).style.visibility = "visible";
    }
  }
}


setInterval(addTime, 1000);
myButtonElement.addEventListener("click", addTime);//This makes the button actually click
//Here I wanted a function that would tell the conditions to buy a producer. 
function buyProducer(producerIndex) {
  if (timeOfCounter >= costOfProducer[producerIndex]) {//if time of counter is greater than or equal to cost of producers or [5,10,15]
    timeOfCounter -= costOfProducer[producerIndex];//minus that cost to the time left on the counter
    producerCount[producerIndex]++;//This tells it to look at the producer starting point and array of[0,0,0]
    cps += 1 / (producerIndex + 1);//cost per second add or equal to 1 divided by producer index[Seecond,Minute,Hour]
    updateProducerCounts();//update the producer count
  }
}

function updateProducerCounts() {
  for (let i = 0; i < myProducer.length; i++) {
    let producerTitle = document.getElementById(myProducer[i]);//Returns Seconds,Hours,Minutes of myProducers 
    producerTitle.textContent = myProducer[i] + " (" + producerCount[i] + ")";//I wanted something that wou
  }
}

myButtonBuyElement.addEventListener("click", function() {
  buyProducer(0); // buy second
});
myHourButton.addEventListener("click", function() {
  buyProducer(1); // buy hour
});
myMinutesButton.addEventListener("click", function() {
  buyProducer(2); // buy minute
});
