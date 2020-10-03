function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const teks = ["Welcome", "Selamat Datang"];
let i = 0;
let j = 0;
let currentText = "";
let letter = "";

async function type() {
  if (i === teks.length) {
    i = 0;
  }
  currentText = teks[i];
  letter = currentText.slice(0, ++j);

  document.querySelector(".texts").textContent = letter;
  if (letter.length === currentText.length) {
    await sleep(500);
    i++;
    j = 0;
  }

  setTimeout(type, 200);
}

type();
