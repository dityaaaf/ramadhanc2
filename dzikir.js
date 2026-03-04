const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const notification = document.getElementById("notification");

let count = loadCount();
let target = 33;

updateDisplay();

function updateDisplay() {
    countElement.textContent = count;
}

incrementBtn.addEventListener("click", () => {
    count++;
    saveCount(count);
    updateDisplay();

    if (count === target) {
        notification.textContent = "🎉 Target tercapai!";
        notification.style.color = "green";
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    saveCount(count);
    updateDisplay();
    notification.textContent = "";
});