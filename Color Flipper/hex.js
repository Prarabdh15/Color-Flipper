const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//example of hex color: #f15025

btn.addEventListener("click",function(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        let num = randomGenrator();
        hexColor += hex[num]
    }
   // console.log(hexColor);
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})
function randomGenrator(){
    return Math.floor(Math.random()*hex.length);

}