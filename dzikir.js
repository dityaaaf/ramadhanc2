let count = 0;
const target = 33;

const counter = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const notification = document.getElementById("notification");

addBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;

    if (count === target) {
        notification.innerHTML = "🎉 Target Tercapai! MasyaAllah!";
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counter.textContent = 0;
    notification.textContent = "";
});