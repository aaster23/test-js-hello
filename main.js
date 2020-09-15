let getNumber = function(limit){
    return Math.floor(Math.random() * limit || 1);
}
let pickWord = function(w){
    return w[Math.floor(Math.random() * (w.length - 1))];
}

console.log('Test from Javascript');
let number = getNumber(1000);
console.log('Generated number: ' + number);

let lotteryNumbers = [];
for(let i = 0; i < 10; i++){
    lotteryNumbers.push(getNumber(1000));
}
console.log('Lottery numbers: ' + lotteryNumbers.join(' '));

let words = ['a packet of air', 'a glass of cold water', "you didn't win..."];
console.log(`Did you win - ${lotteryNumbers.indexOf(number) >= 0 ? 'Yes' : pickWord(words)}`)