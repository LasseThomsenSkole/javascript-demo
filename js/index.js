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

let count = 15; // 15 er start valuen

increaseBtn.addEventListener('click', () =>{
    count++
    pArray.forEach(p => incrementFont(p, count))
})
decreaseBtn.addEventListener('click', () => {
    count--
    pArray.forEach(p => decreaseFont(p, count))
})


function incrementFont(p, fontSize){
    p.style.fontSize = fontSize + 'px'
    console.log(p.style.fontSize);
}
function decreaseFont(p, fontSize){
    p.style.fontSize = fontSize + 'px'
    console.log(p.style.fontSize)
}