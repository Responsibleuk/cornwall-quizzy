// ============= Nav bar =============
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

// ============= Countdown =============

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  // months are ZERO index based;
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  
  // let futureDate = new Date(2020, 3, 24, 11, 30, 0);
  
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  
  let month = futureDate.getMonth();
  month = months[month];
  const weekday = weekdays[futureDate.getDay()];
  const date = futureDate.getDate();
  giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
  
  const futureTime = futureDate.getTime();
  function getRemaindingTime() {
    const today = new Date().getTime();
  
    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  
    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
  }
  // countdown;
  let countdown = setInterval(getRemaindingTime, 1000);
  //set initial values
  getRemaindingTime();


// ============= Quiz =============

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What are the big plant Geodomes in Cornwall called?",
        choice1: 'Landhydrock Gardens',
        choice2: 'The Eden Project',
        choice3: 'The Lost Gardens of Heligan',
        choice4: 'Trelissick Gardens',
        answer: 2,
    },
    {
        question: "What colour is the Cornwall flag?",
        choice1: "Green & Gold",
        choice2: "Red & White",
        choice3: "Yellow & Blue",
        choice4: "Black & White",
        answer: 4,
    },
    {
        question: "The iconic Tate gallery is in which Cornish town?",
        choice1: "Penzance",
        choice2: "Rock",
        choice3: "St Ives",
        choice4: "Falmouth",
        answer: 3,
    },
    {
        question: "Which of these ingredients does not belong in a traditional Cornish pasty?",
        choice1: "Onion",
        choice2: "Swede",
        choice3: "Carrot",
        choice4: "Potato",
        answer: 3,
    },
    {
        question: "Which of these celebrities is NOT from Cornwall?",
        choice1: "Roger Taylor",
        choice2: "Ben Ainslie",
        choice3: "Helen Glover",
        choice4: "Philip Schofield",
        answer: 1,
    },
    {
        question: "The 1990s adaptation of Roald Dahl’s ‘The Witches’ was partly filmed in which Cornish hotel?",
        choice1: "The Greenbank, Falmouth",
        choice2: "Padstow Harbour Hotel, Padstow",
        choice3: "The Headland Hotel, Newquay",
        choice4: "The Lugger, Portloe",
        answer: 3,
    },
    {
        question: "Cornwall’s only UNESCO World Heritage Site is valued because it is the site of a former…",
        choice1: "Copper and tin mine",
        choice2: "Cotton Mmill",
        choice3: "Neolithic settlement",
        choice4: "Silk factory",
        answer: 1,
    },
    {
        question: "Which British celebrity chef has a restaurant in Padstow?",
        choice1: "Jamie Oliver",
        choice2: "Gordon Ramsay",
        choice3: "Marcus Waring",
        choice4: "Rick Stein",
        answer: 4,
    },
    {
        question: "What is the Cornish name for Cornwall?",
        choice1: "Hornwall",
        choice2: "Kernow",
        choice3: "Cairnwall",
        choice4: "Kernwall",
        answer: 2,
    },
    {
        question: "Which Daphne du Maurier novel is set in Cornwall?",
        choice1: "Rebecca",
        choice2: "The Birds",
        choice3: "Jamaica Inn",
        choice4: "The Scapegoat",
        answer: 3,
    },

]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()

// highscore

// end
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')

    
}