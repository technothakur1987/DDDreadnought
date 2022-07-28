console.log("Welcome to style2.js")





let ep1 = document.querySelector(".ep1")
ep1.addEventListener("click",()=>{
  location.href="profile.html";
    
})

let ms1 = document.querySelector(".ms1")
ms1.addEventListener("click",()=>{
  location.href="manage_subscription.html";
  
    

})
 

let crdb = document.querySelector(".crdb")
crdb.addEventListener("click",()=>{
  location.href="creditcard.html";
  
  
})


let add = document.querySelector(".add")

add.addEventListener("click",()=>{
  location.href="address.html";

 })

let con = document.querySelector(".con")
con.addEventListener("click",()=>{
    console.log("con is clicked ")
 
 
    location.href="contact.html";
})


let loggout = document.querySelector(".loggout")
loggout.addEventListener("click",()=>{
  console.log("loggout is clicked ")
  location.href="https://dreadnought.school/"
})



