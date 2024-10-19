function convertTemperature() {
    // Get the temperature input value
    const tempValue = parseFloat(document.getElementById('tempInput').value);
    const tempUnit = document.getElementById('tempUnit').value;
    const resultElement = document.getElementById('result');
  
    // Check if input is a valid number
    if (isNaN(tempValue)) {
      resultElement.textContent = "Please enter a valid temperature!";
      return;
    }
  
    let convertedTemp;
  
    // Perform conversion based on the selected unit
    if (tempUnit === 'CtoF') {
      convertedTemp = (tempValue * 9/5) + 32;
      resultElement.textContent = `${tempValue}°C is ${convertedTemp.toFixed(2)}°F`;
    } else {
      convertedTemp = (tempValue - 32) * 5/9;
      resultElement.textContent = `${tempValue}°F is ${convertedTemp.toFixed(2)}°C`;
    }
  }
  



  //Summary:
       //document.getElementById(): Selects an HTML element by its ID.
       //parseFloat(): Converts input from a string to a decimal number.
    //isNaN(): Checks if a value is not a number.
      //if...else: Executes code based on a condition.
   //toFixed(2): Rounds the result to 2 decimal places.
      //onclick: Runs a function when a button is clicked.