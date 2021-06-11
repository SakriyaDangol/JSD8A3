// loop for number
var runNumber = prompt('Type "Number" :');
var numberArray = [1, 2, 3, 4, 5];

if (runNumber == 'Number'){
    for (let i of numberArray){
        document.write(i + ',' + '\n'); // this statement prints the item from the array
    }
} else {
    alert('Welcome insect brain!');
}

document.write('<br>'); // this statement breaks a line

// loop for string
var runString = prompt('Type "String" :');
var stringArray = ['apple', 'banana', 'carrot', 'daisy'];

if (runString == 'String'){
    for (let i of stringArray){
        document.write(i + ',' + '\n'); // this statement prints item from the array
    }
} else {
    alert('Why do I even bother!');
}