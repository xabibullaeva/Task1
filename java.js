// let word = prompt("Enter word: ")
// let newWord = word.split("").join("-")
// console.log(newWord);
// alert(newWord);


//!!!remove

// let str = prompt("Enter str: ")
// let num = +prompt("Enter num: ")
// let result = str.slice(num)
// console.log(result);


let str = prompt("Enter str: ")
let num = +prompt("Enter num: ")
function removeStr(str, num) {
    result = ""
    for (let i = num; i < str.length; i++) {
        result += str[i];
    }
    return result; 
}
console.log(removeStr(str,num));

//MAth.questions

// let question = +prompt("How many questions do you want to solve: ")
// let answers = 0
// while(isNaN(question) || question == 0){
//     a = +prompt("NaN Enter another number: ")
// } for (let i = 0; i < question; i++) {
//     let ex1 = Math.random()
//     let ex2 = Math.random()
//     let operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];

//     var answer = +prompt(ex1 + operation + ex2 + "?")
// }if (answers == ){
//     console.log("Your answer is True")
// }else{
//     console.log("Your answer is False");
// }