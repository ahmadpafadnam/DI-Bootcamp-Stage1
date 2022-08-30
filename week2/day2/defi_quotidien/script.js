let sentence="le film n'est pas si mauvais,je l'aime";
let wordNot=sentence.indexOf("pas");
let wordBa=sentence.indexOf("mauvais");
console.log(wordNot);
console.log(wordBa);
if(wordNot<wordBa){
  console.log("le film est bon,je laime");
}
else{
    console.log(sentence);
}