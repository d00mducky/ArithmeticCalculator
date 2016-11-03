$(document).ready(function() {

  console.log('working1');
  var userInput = [""];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var operators = ["/", "*", "-", "+", "^"];
  var resultString = "";

  function checkElement(input) {
    console.log('1st ', input);
    if (userInput.length === 1 && operators.includes(input) === false && input !== ")") {
      userInput.push(input);
      console.log('A1');
    }
    else if (numbers.includes(Number(input))) {
      userInput.push(input);
      console.log('A2');
    }
    else if (userInput.length !== 1 && operators.includes(input) && operators.includes(userInput[userInput.length-1]) === false) {
      userInput.push(input);
      console.log('A3');
    }
    else if(input === "." && userInput[userInput.length-1] === ".") {
      console.log('A4 error, incorrect use of operator ', userInput[userInput.length-1]);
    }

    else if(input === ")" && numbers.includes(Number(userInput[userInput.length-1]))) {
      userInput.push(input);
      console.log('A8.3');
    }
    else if(input === "(" && userInput[userInput.length-1] === ")") {
      userInput.push(input);
      console.log('A8.4');
    }
    else if(input === ")" && userInput[userInput.length-1] === ".") {
      console.log('A7 error, incorrect use of paren');
    }
    else if(input === ")" && userInput[userInput.length-1] === "(") {
      console.log('A7 error, incorrect use of paren');
    }
    updateOutputString(); // reset output string
    console.log('A5');
  }

  function updateOutputString () {
    resultString = userInput.join(""); // build resultString by joining each string element in userInput
    $("#output").html(resultString); // set output string
  }

  function computeResult () {
    resultString = userInput.join(""); // build resultString by joining each string element in userInput
    console.log(resultString);
    console.log('Result: ', math.eval(resultString));
    $("#output").html(math.eval(resultString)); // set output string
  }

  // jQuery's .on function implemented to recognize click events (documentation: https://api.jquery.com/on/)
  $("input.btn").on("click", function() {
    console.log('working2 ', this.id);
    if (this.id === "equals") { // if user selects the 'equals' button
      computeResult(); // evaluate arithmetic expression
    }
    else if(this.id === "clearAll") { // if user selects the 'AC' button
      userInput = [""]; // erase userInput
      updateOutputString(); // reset output string
    }
    else if (this.id === "clearLast") { // if user selects the 'CE' button
      userInput.pop(); // erase last userInput item
      updateOutputString(); // reset output string
    }
    else { // otherwise, if user selects anything else
      console.log(userInput.length, ' 1');
      checkElement(this.id); // check this element for potential syntax violations
    }
  });
});
