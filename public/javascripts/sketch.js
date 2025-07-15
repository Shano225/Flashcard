function addFlashcard(front, back, reaction) {
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Front: front,
      Back: back,
      Reaction: reaction
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Flashcard added:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


let x = 0;
let input
let showDefinition = false;

function setup() {input= createInput('');
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {

rectMode(CENTER)
rect(windowWidth/2, windowHeight/2, 750, 250)

  if (showDefinition) {
    textSize(18);
    text(input, width / 2, height / 2);
  } else {
    textSize(32);
    text("Interest", width / 2, height / 2);
  }
}

function mousePressed() {
  x++
  addFlashcard('Interest', 'The cost of borrowing money.', 'Learned');
  showDefinition = !showDefinition;
}

// Resize canvas if window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}