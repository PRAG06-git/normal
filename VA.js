let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
  let text_speak = new SpeechSynthesisUtterance(text)
  text_speak.volume = 1
  text_speak.rate = 1
  text_speak.pitch = 1
  text_speak.lang = "hi-GB"

  window.speechSynthesis.speak(text_speak)
}

function wishMe(){
  let day = new Date()
  let hours = day.getHours()
  
  if(hours>=0 && hours<12){
    speak("good morning sir")
  }else if(hours>=12 && hours<16){
    speak("good afternoon sir")
  }else{
    speak("good evening sir")
  }
}

window.addEventListener('load',()=>{
  wishMe()
})

// const startV = () =>{
//   if('webkitSpeechRecognition' in window){
//     let recognition = new webkitSpeechRecognition()
//     recognition.lang = 'en-US';
//     recognition.onresult = (e) =>{
//       console.log(e);
//     }
//     recognition.start();
//   }else{
//     alert("your browser")
//   }
// }

// btn.onclick = () =>{
//   startV();
// }


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
  let currentIndex = event.resultIndex
  let transcript = event.results[currentIndex][0].transcript
  content.innerText = transcript
  takeCommand(transcript)
     console.log(event)
}

btn.addEventListener('click',()=>{
  recognition.start()
  btn.style.display = "None";
  voice.style.display = "block";
})

function takeCommand(message){
  btn.style.display = "flex";
  voice.style.display = "none";
  if(message.includes("hello")){
    speak("hello sir,what can I help you?")
  }
  else if(message.includes("who r u")){
    speak("I am virtual Assistant,creted by pragya ma'am")
  }
  else if(message.includes("open youtube")){
    speak("opening youtube")
    window.open("https://www.youtube.com/")
  }
}
