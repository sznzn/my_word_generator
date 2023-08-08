//每次输出一个法语单词
let words = ["Bonjour", "Au revoir", "Merci", "S'il vous plaît", "Oui", "Non", "Excusez-moi"];

// let i = Math.floor(Math.random() * words.length);
//console.log(i);
// let word = words[i];
// console.log(word);
let button = document.getElementById("button");
button.addEventListener("click", function() {
    let i = Math.floor(Math.random() * words.length);
    let word = words[i];
    console.log(word);
    document.getElementById("word").innerHTML = word;
});
