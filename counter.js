var saveEl = document.getElementById("save_el");
var countel = document.getElementById("count_el");


var count =0;
console.log(saveEl);

function increment(){
    count = count+1;
    countel.innerText = count;
}
function save(){
    let countr = count + "-";
    saveEl.innerText += countr;
    countel.innerText=0;
    count=0;
}

