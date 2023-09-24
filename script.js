const addButton = document.querySelectorAll("button");
const body = document.body
const numOfItems = document.getElementById("numOfItems");
const service = document.querySelectorAll("#nav");
const display = document.querySelector("sub-box-child1");
let num = 0;
const btn2 = document.querySelector("#next");
const image = document.createElement("img");
const child1 = document.querySelector(".grand-child1");
const child2 = document.querySelector(".grand-child2");
const child3 = document.querySelector(".grand-child3");
const home = document.querySelector("#home_body")



for(let i = 0; i < addButton.length; i++){

    addButton[i].onclick = () =>{
    numOfItems.innerText = `${++num}`;
    numOfItems.style.opacity="1";
  }
}
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
      console.log(data)
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




 


 
    











/*
const newuser = {
  name : "jason",
  job  : "programmer"
};

 const clickHandler = async () => {
 
  const res = await  fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

        if(!res.ok){
          console.log("problem");
          return;
        }
       
        console.log(data.message);
        
        image.setAttribute("src", data.message)
        image.classList.add("email")
        body.append(image)

    }
     btn2.onclick = () => clickHandler();
*/