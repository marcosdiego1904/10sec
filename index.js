function randomNumbers(){
    let arrayNumbers = [1,2,3,4,5,6,7,8,9];
    let first = _.first(_.shuffle(arrayNumbers));
    let second = _.last(_.shuffle(arrayNumbers));
    return {first,second};
}

let answer;
let tiempoRestante = 10;
let intervalo;

function timer(){
    const elementoContador = document.querySelector(".timerjs");

    intervalo = setInterval(() => {
        tiempoRestante--;
        elementoContador.innerHTML = tiempoRestante;

        if (tiempoRestante === 0) {
            clearInterval(intervalo);
            console.log("¡Conteo terminado!");
            // Disable the input field
            $('.userin').prop('disabled', true);
            highScore = Math.max(highScore, scores);
            scores = 0;
            $(".high").text(`${highScore}`);
            $(".sco").text(scores);
            alerts()
        }
    }, 1000);
}

function alerts(){
    let alert1 = prompt("time's up, good job, Do you want to keep Playing?")
    if(alert1 === 'yes'){
        logic();
        $('.userin').prop('disabled', false);
        tiempoRestante = 10
    }else{
        console.log("thanks")
    }
}
let mainValue;
let add = function addNumbers() {
    let injectRandom = document.querySelector(".number");
    let {first, second} = randomNumbers();
    injectRandom.innerHTML = `${first} + ${second}`;
    mainValue = first + second;
};

let subtract = function subtractNumbers() {
    let injectRandom = document.querySelector(".number");
    let {first, second} = randomNumbers();
    
    if(first > second){
        mainValue = first - second;
        injectRandom.innerHTML = `${first} - ${second}`;
    }else if(second>first){
        mainValue = second - first;
        injectRandom.innerHTML = `${second} - ${first}`;
    }
    
};

let multiply = function multiplyNumbers() {
    let injectRandom = document.querySelector(".number");
    let {first, second} = randomNumbers();
    injectRandom.innerHTML = `${first} * ${second}`;
    mainValue = first * second;
};

let divide = function divideNumbers() {
    let injectRandom = document.querySelector(".number");
    let {first, second} = randomNumbers();
    
      let c  = Math.ceil(first * second);
        mainValue = Math.ceil(c/first) 
        injectRandom.innerHTML = `${first} / ${c}`;
};
let highScore = 0;
let scores = 0;
function score(){
    scores++;
    $(".sco").text(scores);
}
$(document).ready(function() {
    $('#but').on('click',function(){
        logic();
        $('.userin').prop('disabled', false);
        tiempoRestante = 10;
    })
   
});

function logic(){
    timer(); 
    let operations = [add, subtract, multiply, divide]; 
    let numberss = [0,1,2,3]
    let randomOperation = operations[_.first(_.shuffle(numberss))]; 
   randomOperation();
    
    $('.userin').on('input', function() {
        operations = [add, subtract, multiply, divide]; 
        let userInput = $(".userin").val();
        if (userInput ==  mainValue) {
            console.log('User input:', userInput);
            let randomOperation2 = operations[_.first(_.shuffle(numberss))];
            randomOperation2();
            $(".userin").val("");
            clearInterval(intervalo); 
            tiempoRestante++; 
            timer();
             score();
        }
    });
}









/*const inputElement = document.getElementById('myInput');
inputElement.addEventListener('input', handleUserInput);
function handleUserInput() {
    const userInput = inputElement.value;
    if(userInput == 45){
        console.log('User input:', userInput);
    }
    
  
    // Perform your desired action with the user input here
    // For example, process the input or store it in a variable
  }*/