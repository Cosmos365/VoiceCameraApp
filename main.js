var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}   

function speak() {
    var synth = window.speechSynthesis;
    Speak_data = document.getElementById("textbox").value; 
    var utterthis = new SpeechSynthesisUtterance(Speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    console.log("yes");
}

Recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    speak();
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
