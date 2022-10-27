let homeText = document.getElementById("home-text");
let guestText = document.getElementById("guest-text");

let count1 = 0
let count2 = 0

function addPlusOne() {
   count1 += 1
   homeText.textContent = count1
}
function addPlusTwo() {
    count1 += 2
    homeText.textContent = count1
 }
 function addPlusThree() {
    count1 += 3
    homeText.textContent = count1
 }

 function addSecPlusOne() {
    count2 += 1
    guestText.textContent = count2
 }
 function addSecPlusTwo() {
    count2 += 2
    guestText.textContent = count2
 }
 function addSecPlusThree() {
    count2 += 3
    guestText.textContent = count2
 }
