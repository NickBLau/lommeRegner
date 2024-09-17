/*  let calculatorButton = document.querySelector("calculator-button")
 let calculatorValue = 0 */
 let screen = document.querySelector("#screen")

 let deleteButton = document.querySelector("#delete-button")
 let sevenButton = document.querySelector("#seven-button")
 let eightButton = document.querySelector("#eight-button")
 let nineButton = document.querySelector("#nine-button")
 let divideButton = document.querySelector("#divide-button")

 let fourButton = document.querySelector("#four-button")
 let fiveButton = document.querySelector("#five-button")
 let sixButton = document.querySelector("#six-button")
 let timesButton = document.querySelector("#times-button")

 let oneButton = document.querySelector("#one-button")
 let twoButton = document.querySelector("#two-button")
 let threeButton = document.querySelector("#three-button")
 let minusButton = document.querySelector("#minus-button")

 let zeroButton = document.querySelector("#zero-button")
 let commaButton = document.querySelector("#comma-button")
 let equalButton = document.querySelector("#equal-button")
 let plusButton = document.querySelector("#plus-button")


 deleteButton.addEventListener("click", deleteButtonClick)
 sevenButton.addEventListener("click", numberSevenClick)
 eightButton.addEventListener("click", numberEightClick)
 nineButton.addEventListener("click", numberNineClick)
 divideButton.addEventListener("click", divideButtonClick);

 fourButton.addEventListener("click", numberFourClick)
 fiveButton.addEventListener("click", numberFiveClick)
 sixButton.addEventListener("click", numberSixClick)
 timesButton.addEventListener("click", timesButtonClick);

 oneButton.addEventListener("click", numberOneClick)
 twoButton.addEventListener("click", numberTwoClick)
 threeButton.addEventListener("click", numberThreeClick)
 minusButton.addEventListener("click", minusButtonClick);

 zeroButton.addEventListener("click", numberZeroClick)
 commaButton.addEventListener("click", commaButtonClick);
 plusButton.addEventListener("click", plusButtonClick);
 equalButton.addEventListener("click", showResult);

 let currentOperator = null; 

 //husk det første tal
 let firstNumber = 0;

 let secondNumber = 0;

 function numberSevenClick() {
    //- hvis der står 0, skal det fjernes
    if (screen.value === "0") {
        screen.value = "";
    }
    screen.value += 7;
 }
 function numberEightClick() {
   //- hvis der står 0, skal det fjernes
   if (screen.value === "0") {
       screen.value = "";
   }
   screen.value += 8;
}
function numberNineClick() {
   //- hvis der står 0, skal det fjernes
   if (screen.value === "0") {
       screen.value = "";
   }
   screen.value += 9;
}
function numberFourClick() {
   //- hvis der står 0, skal det fjernes
   if (screen.value === "0") {
       screen.value = "";
   }
   screen.value += 4;
}
function numberFiveClick() {
   //- hvis der står 0, skal det fjernes
   if (screen.value === "0") {
       screen.value = "";
   }
   screen.value += 5;
}
function numberSixClick() {
   //- hvis der står 0, skal det fjernes
   if (screen.value === "0") {
       screen.value = "";
   }
   screen.value += 6;
}
function numberOneClick() {
   //- hvis der står 0, skal det fjernes
   if (screen.value === "0") {
       screen.value = "";
   }
   screen.value += 1;
}
function numberTwoClick() {
   //- hvis der står 0, skal det fjernes
   if (screen.value === "0") {
       screen.value = "";
   }
   screen.value += 2;
}
function numberThreeClick() {
   //- hvis der står 0, skal det fjernes
   if (screen.value === "0") {
       screen.value = "";
   }
   screen.value += 3;
}
function numberZeroClick() {
   //- hvis der står 0, skal det fjernes
   if (screen.value === "0") {
       screen.value = "";
   }
   screen.value += "0";
}
 function plusButtonClick() {
    // husk hvilken operator-knap man trykker
    currentOperator = "plus"; 

    // husk det første tal
    firstNumber = screen.value;

    screen.value = "0";

 }
 function minusButtonClick() {
   // husk hvilken operator-knap man trykker
   currentOperator = "minus"; 

   // husk det første tal
   firstNumber = screen.value;

   screen.value = 0;

}
 function divideButtonClick() {
   // husk hvilken operator-knap man trykker
   currentOperator = "divide"; 

   // husk det første tal
   firstNumber = screen.value;

   screen.value = 0;

}
function timesButtonClick() {
   // husk hvilken operator-knap man trykker
   currentOperator = "times"; 

   // husk det første tal
   firstNumber = screen.value;

   screen.value = 0;
}
function deleteButtonClick() {
   // husk hvilken operator-knap man trykker
   currentOperator = "delete"; 

   // husk det første tal
   firstNumber = screen.value;

   screen.value = 0;
}
function commaButtonClick() {
   // husk hvilken operator-knap man trykker
   currentOperator === "comma"; 
   // husk det første tal
   screen.value += "." ;
}
//  function showResult() {
//    let result;

//    // Husk det andet tal
//    secondNumber = screen.value;

//    // Lav regnestykket
//    if (currentOperator == 'plus') {


//        result = Number(firstNumber) + Number(secondNumber);
//    }
//    else if (currentOperator == 'minus') {


//       result = Number(firstNumber) - Number(secondNumber);
//   }
//    //Vis reslutatet
//    screen.value = result;}

//    function plusButtonClick() {
//       // Husk hvilken operator-knap man trykker på
//       currentOperator = 'plus';
  
//       // Husk det første tal
//       firstNumber = screen.value;
  
//       screen.value = 0;
//   }
  function showResult() {
   let result;

   // Husk det andet tal
   secondNumber = screen.value;

   // Lav regnestykket
   if (currentOperator == 'plus') {
       result = Number(firstNumber) + Number(secondNumber);
   }
   else if (currentOperator == 'minus') {
      result = Number(firstNumber) - Number(secondNumber);
  }
  else if (currentOperator == 'times') {
   result = Number(firstNumber) * Number(secondNumber);
}
   else if (currentOperator == 'divide') {
      if (secondNumber ==0 ) {
         result = "You broke the universe";
      }

      else {
   result = Number(firstNumber) / Number(secondNumber);}
}

  
   
   
   //Vis reslutatet
   screen.value = result;
}   
   // function calculatorButton() {
//  "".addEventListener("click")
// }
    


// console.log();

// firstNumber, operator, secondNumber
// Math.
//return
//const = number


/* 
windows + . for emoji 
 - screen viser 0 ✔
 - når man trykker på en tal-knap skal tallet vises på screen ✔
    - hvis man trykker på flere tal, skal de alle vises ✔
    - hvis der står 0, skal det fjernes ✔
 - husk hvilken operator-knap man trykker ✔
    - husk det første tal ✔
 - når man trykker på det næste tal, skal det nye tal vises
 - når man trykker på = kanppen, skal resultaltet af regnestykker vises
    - husk det andet talet
    - lav regnestykket
        - hvis man har valgt plus, så læg tallene sammen.
    - vis result
 - 

 -------------bonus features------------
  - der skal være en slet-knap
  - vis alle knapper der er trykket på over screen
*/

/* let screen = document.querySelector("#screen")
let numberSevenButton = document.querySelector() */