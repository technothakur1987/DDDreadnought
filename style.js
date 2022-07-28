
console.log("welcome here")
let profileIcon = document.querySelector(".profileIcon")
let myProfileOptions = document.querySelector(".myProfileOptions")
let mybbbimages = document.querySelector(".mybbbimages")
let mybbbf1 = document.querySelector(".mybbbf1")
let mybbbf2 = document.querySelector(".mybbbf2")
let jasonImage = document.querySelector(".jasonImage")
let jasonMiller = document.querySelector(".jasonMiller")
let smallcourseprogress = document.querySelector(".small-course-progress")

  profileIcon.onclick = function(){
    if (myProfileOptions.style.display !== "none") {
        myProfileOptions.style.display = "none";
      } else {
        myProfileOptions.style.display = "block";
      }
}



/*js for courses*/
mybbbimages.addEventListener("click",()=>{
  console.log("picture clicked")
  location.href="https://dreadnought.school/courses/enrolled/1531365"
})
mybbbf1.addEventListener("click",()=>{
  console.log("text clicked")
  location.href="https://dreadnought.school/courses/enrolled/1531365"
})
mybbbf2.addEventListener("click",()=>{
  console.log("text2 clicked")
  location.href="https://dreadnought.school/courses/enrolled/1531365"
})
jasonImage.addEventListener("click",()=>{
  console.log("jasonImage clicked")
  location.href="https://dreadnought.school/courses/enrolled/1531365"
})
jasonMiller.addEventListener("click",()=>{
  console.log("jasonMiller clicked")
  location.href="https://dreadnought.school/courses/enrolled/1531365"
})
smallcourseprogress.addEventListener("click",()=>{
  console.log("smallcourseprogress clicked")
  location.href="https://dreadnought.school/courses/enrolled/1531365"
})


/*js for profileOptions*/
let myProfileOptionsl1 = document.querySelector(".myProfileOptionsl1")
myProfileOptionsl1.addEventListener("click",()=>{
  console.log("myProfileOptionsl1 is clicked")
  location.href="profile.html";
  
  
  

})
let myProfileOptionsl2 = document.querySelector(".myProfileOptionsl2")
myProfileOptionsl2.addEventListener("click",()=>{
  console.log("myProfileOptionsl2 is clicked")
 location.href="manage_subscription.html";
  
})
let myProfileOptionsl3 = document.querySelector(".myProfileOptionsl3")
myProfileOptionsl3.addEventListener("click",()=>{
  console.log("myProfileOptionsl3 is clicked")
  location.href="creditcard.html";
})
let myProfileOptionsl4 = document.querySelector(".myProfileOptionsl4")
myProfileOptionsl4.addEventListener("click",()=>{
  console.log("myProfileOptionsl4 is clicked")
  location.href="address.html";
})
let myProfileOptionsl5 = document.querySelector(".myProfileOptionsl5")
myProfileOptionsl5.addEventListener("click",()=>{
  console.log("myProfileOptionsl5 is clicked")
  location.href="contact.html";
})
let myProfileOptionsl6 = document.querySelector(".myProfileOptionsl6")
myProfileOptionsl6.addEventListener("click",()=>{
  console.log("myProfileOptionsl6 is clicked")
  location.href="https://dreadnought.school/";
})
