var synth = window.speechSynthesis;

var selectedNoun = "";
var selectedVerb = "";
var selectedAdverb = "";
var selectedNoun2 = "";
var selectedPlace = "";

function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

document.querySelector('.nounButton[data-word="dog"]').onclick = function() {
    selectedNoun = "dog";
    speakNow(selectedNoun);
};

document.querySelector('.nounButton[data-word="teacher"]').onclick = function() {
    selectedNoun = "teacher";
    speakNow(selectedNoun);
};

document.querySelector('.nounButton[data-word="robot"]').onclick = function() {
    selectedNoun = "robot";
    speakNow(selectedNoun);
};

document.querySelector('.verbButton[data-word="jumps"]').onclick = function() {
    selectedVerb = "jumps";
    speakNow(selectedVerb);
};

document.querySelector('.verbButton[data-word="runs"]').onclick = function() {
    selectedVerb = "runs";
    speakNow(selectedVerb);
};

document.querySelector('.verbButton[data-word="paints"]').onclick = function() {
    selectedVerb = "paints";
    speakNow(selectedVerb);
};

document.querySelector('.adverbButton[data-word="quickly"]').onclick = function() {
    selectedAdverb = "quickly";
    speakNow(selectedAdverb);
};

document.querySelector('.adverbButton[data-word="happily"]').onclick = function() {
    selectedAdverb = "happily";
    speakNow(selectedAdverb);
};

document.querySelector('.adverbButton[data-word="carefully"]').onclick = function() {
    selectedAdverb = "carefully";
    speakNow(selectedAdverb);
};

document.querySelector('.noun2Button[data-word="ball"]').onclick = function() {
    selectedNoun2 = "ball";
    speakNow(selectedNoun2);
};

document.querySelector('.noun2Button[data-word="cake"]').onclick = function() {
    selectedNoun2 = "cake";
    speakNow(selectedNoun2);
};

document.querySelector('.noun2Button[data-word="book"]').onclick = function() {
    selectedNoun2 = "book";
    speakNow(selectedNoun2);
};

document.querySelector('.placeButton[data-word="in the park"]').onclick = function() {
    selectedPlace = "in the park";
    speakNow(selectedPlace);
};

document.querySelector('.placeButton[data-word="at school"]').onclick = function() {
    selectedPlace = "at school";
    speakNow(selectedPlace);
};

document.querySelector('.placeButton[data-word="on Monday"]').onclick = function() {
    selectedPlace = "on Monday";
    speakNow(selectedPlace);
};

document.getElementById('speakSentenceButton').onclick = function() {
    let sentence = `${selectedNoun} ${selectedVerb} ${selectedAdverb} a ${selectedNoun2} ${selectedPlace}`;
    speakNow(sentence);
};

document.getElementById('resetButton').onclick = function() {
    selectedNoun = "";
    selectedVerb = "";
    selectedAdverb = "";
    selectedNoun2 = "";
    selectedPlace = "";
};
