function updateQuantity(displayQuantity) {
    let gbCookies= document.querySelector('#qty-gb')
    gbCookies.textContent = displayQuantity
}




let yourName = "Erik Cazares" // HINT: Replace this with your own name!

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0     // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = gb + cc + sugar

let totalCookies = document.querySelector('#qty-total')
totalCookies.getAttribu= `Total ${total}`

//buttons
const gbUp = document.querySelector('#add-gb')
const gbDown = document.querySelector('#minus-gb')



// Event listeners to add/subtract gingerbread cookies
gbUp.addEventListener('click', function(e){
    gb++
    updateQuantity(gb)
})

gbDown.addEventListener('click', function(e){
    if (gb > 0) {
    gb--
    }
    updateQuantity(gb)
})

// Event listeners to add/subtract chocolate chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    console.log('cc button was clicked')
})


// Event listeners to add/subtract sugar sprinkle
document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('sugar button was clicked')
})

