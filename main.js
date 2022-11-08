function preload()
{
  loadImage(apple.png);
}

x = 0;
y = 0;

screen_width = window.innerWidth;
screen_height = window.innerHeight;

draw_apple = "apple.png";

speak_data = "";

to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

 to_number = Number(content);
 if(Number.isInteger(to_number))
 {
  draw_apple = "set";
 }
 else
 {
  console.log("The speech has not recognized a number");
 }
}

function setup() 
{
  canvas = createCanvas(150, 150);
  canvas.position(125, 125);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i<= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "to_number";

    speak();
}