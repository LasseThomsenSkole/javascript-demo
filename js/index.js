let inpColorValue = document.querySelector(".inpColorValue");
let pbCol = document.querySelector(".pbSetColor");
let body = document.querySelector("body");
const increaseBtn = document.getElementById("incFont");
const decreaseBtn = document.getElementById("decFont");
const colorPicker = document.getElementById("colorPicker");
const pTags =  document.getElementsByTagName("p")
const pArray = Array.from(pTags);

function useColorPicker(){
    let col = colorPicker.value;
    body.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = body.style.backgroundColor;
}


pbCol.addEventListener('click', useColorPicker);
colorPicker.addEventListener('input', useColorPicker)

increaseBtn.addEventListener('click', () =>{
    pArray.forEach(p => incrementFont(p))
})
decreaseBtn.addEventListener('click', () => {
    pArray.forEach(p => decreaseFont(p))
})

let count = 15; // 15 er start valuen

function incrementFont(p){
    count++
    p.style.fontSize = count + 'px'
    console.log(p.style.fontSize);
}
function decreaseFont(p){
    count--
    p.style.fontSize = count + 'px'
    console.log(p.style.fontSize)
}