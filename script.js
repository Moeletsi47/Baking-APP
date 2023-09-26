
const body = document.body
const service = document.querySelectorAll("#nav");
const display = document.querySelector("sub-box-child1");
const btn2 = document.querySelector("#next");
const image = document.createElement("img");
const child1 = document.querySelector(".grand-child1");
const child2 = document.querySelector(".grand-child2");
const child3 = document.querySelector(".grand-child3");
const home = document.querySelector("#home_body");
const wish = document.querySelectorAll(".fa-regular");
const products = document.querySelectorAll(".products");
const wishList = document.querySelector(".wishList");
const subContainer = document.querySelector(".subContainer");
const cross = document.querySelector(".fa-xmark");
var state = false;


const square = document.createElement("div")
square.classList.add("kurl")

 //home Endpoint
  const getRatings = async () => {

  try{
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    data = await res.json();

    if(!res.ok){
      console.log("failed")
      return;
    }

    function setup () {
      const oop = document.createElement("div");
      oop.innerText= data.setup;
      oop.classList.add("setup", "jokes");
      home.append(oop);
      setTimeout(() => oop.remove(), 10000)
    }

    setup();

    function punchline(){
      const oop = document.createElement("div");
      oop.innerText= data.punchline;
      oop.classList.add("punchline", "jokes");
      home.append(oop);
      setTimeout(() => oop.remove(), 5000)
    }

    setTimeout(punchline, 5000);
    setTimeout(getRatings, 11000)

  }catch (err){
    console.log(err);
  }
 }

  getRatings();

  


//end of Home Endpoint




 


 
    











