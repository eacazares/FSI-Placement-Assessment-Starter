// My name
let yourName = "Erik Cazares" // HINT: Replace this with your own name!


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


// We'll use these variables to track the counts of each cookie type
let gb = 0     // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle


//buttons
const gbUp = document.querySelector('#add-gb')
const gbDown = document.querySelector('#minus-gb')

const ccUp = document.querySelector('#add-cc')
const ccDown = document.querySelector('#minus-cc')

const sugarUp = document.querySelector('#add-sugar')
const sugarDown = document.querySelector('#minus-sugar')


// Event listeners to add/subtract gingerbread cookies
gbUp.addEventListener('click', function(e){
    gb++;
    document.getElementById('qty-gb').textContent=gb;
    document.getElementById('qty-total').textContent=gb+cc+sugar; 
})

gbDown.addEventListener('click', function(e){
    if (gb > 0) {
    gb--;
    }
    document.getElementById('qty-gb').textContent=gb;
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

ccUp.addEventListener('click', function(e){
    cc++;
    document.getElementById('qty-cc').textContent=cc;
    document.getElementById('qty-total').textContent=gb+cc+sugar; 
})

ccDown.addEventListener('click', function(e){
    if (cc > 0) {
    cc--;
    }
    document.getElementById('qty-cc').textContent=cc;
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})

sugarUp.addEventListener('click', function(e){
    sugar++;
    document.getElementById('qty-sugar').textContent=sugar;
    document.getElementById('qty-total').textContent=gb+cc+sugar; 
})

sugarDown.addEventListener('click', function(e){
    if (sugar > 0) {
    sugar--;
    }
    document.getElementById('qty-sugar').textContent=sugar;
    document.getElementById('qty-total').textContent=gb+cc+sugar;
})
