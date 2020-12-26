const container=document.querySelector('container');
const text=document.getElementById('text');
const totalTime=7500;
const breatheTime=(totalTime/5)*2;
const holdTime=totalTime/5;

breathAnimation();

function breathAnimation(){
  text.innerText="लामो सास लिनुस";
  setTimeout(()=>{
    text.innerText="सास रोक्नुस ";
    setTimeout(()=>{
    text.innerText="सास फाल्नुस ";
    },holdTime);
  },breatheTime);
}
setInterval(breathAnimation,totalTime);
