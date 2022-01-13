// function to calculate the result of the survey

function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var a1score = 0;
    var a2score = 0;
    var a3score = 0;
    var a4score = 0;
    var a5score = 0;
    
    
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'a1') {
          a1score = a1score + 1;
        }
        if (choices[i].value == 'a2') {
          a2score = a2score + 1;
        }
        if (choices[i].value == 'a3') {
          a3score = a3score + 1;
        }
        if (choices[i].value == 'a4') {
          a4score = a4score + 1;
        }
        if (choices[i].value == 'a5') {
          a5score = a5score + 1;
        }
        // If you add more choices and outcomes, you must add another if statement below.
      }
    }
    
    // Find out which choice got the highest score.
    
    // If you add more choices and outcomes, you must add the variable here.
    var maxscore = Math.max(a1score,a2score,a3score,a4score,a5score);
    
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    if (a1score == maxscore) { 
      answerbox.innerHTML = "You are not showing any signs of ADHD.";
    }
    if (a2score == maxscore) { 
      answerbox.innerHTML = "You are not showing many signs of ADHD.";
    }
    if (a3score == maxscore) { 
      answerbox.innerHTML = "Neurodiversity is a spectrum.";
    }
    if (a4score == maxscore) { 
      answerbox.innerHTML = "You show some signs of ADHD";
    }
    if (a5score == maxscore) {
      answerbox.innerHTML = "You most likely have ADHD.";
    }
   
  }
  
  // program the reset button
  // function resetAnswer() {
  //   var answerbox = document.getElementById('answer');
  //   answerbox.innerHTML = "Your result will show up here!";
  // }