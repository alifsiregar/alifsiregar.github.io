const teks = ["God's in His heaven", "All's right with the world"];
let i = 0;
let j = 0;
let currentText = "";
let letter = "";

function type(){
    if(i === teks.length){
        i = 0;
    }
    currentText = teks[i];
    letter = currentText.slice(0, ++j);

    document.querySelector(".texts").textContent = letter;
    if(letter.length === currentText.length ){
        i++;
        j=0;
    }

    setTimeout(type, 200);
}

type();