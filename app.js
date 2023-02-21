const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const counterInput = document.getElementById("counter");

let count = 0;

function updateCounter(value) {
    count = value;
    counterInput.value = value;
}

decrementButton.addEventListener("click", function() {
    if (count > -10) {
        updateCounter(count - 1);
    }
});

incrementButton.addEventListener("click", function() {
    if (count < 10) {
        updateCounter(count + 1);
    }
});const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const counterInput = document.getElementById("counter");

let count = 0;
function updateCounter(value) {
    count = value;

    counterInput.value = value;
}

decrementButton.addEventListener("click", function() {
    if (count > -10) {
        updateCounter(count - 1);
    }
});

incrementButton.addEventListener("click", function() {
    if (count < 10) {
        updateCounter(count + 1);
    }
});