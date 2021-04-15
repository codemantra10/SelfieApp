var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
var textbox=document.getElementById("speechtext");
function photo(){
document.getElementById("speechtext").innerHTML="";
recognition.start();
}
recognition.onresult=function run(event){
console.log(event);
content=event.results[0][0].transcript;
console.log(content);
document.getElementById("speechtext").innerHTML=content;
if(content=="take my selfie"){
speak();
Webcam.attach( '#camera' );
setTimeout(function(){
takeselfie();
save();
},5000)}
}
function speak(){
var synth=window.speechSynthesis;
var speak_data="Taking your selfie in 5,   4,    3,    2,    1"
var utter=new SpeechSynthesisUtterance(speak_data);
synth.speak(utter);
}
Webcam.set({
    width: 320,
    height: 320,
    image_format: 'png',
    png_quality: 90
  });
function takeselfie(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img src='"+data_uri+"'id='selfie'>";
})
}
function save(){
link=document.getElementById("link");
image=document.getElementById("selfie").src;
link.href=image;
link.click();
}