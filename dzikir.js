let count = 0;
let target = 33;
let currentDzikir = "tasbih";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const notification = document.getElementById("notification");
const targetDisplay = document.getElementById("target");
const dzikirType = document.getElementById("dzikirType");
const customTargetInput = document.getElementById("customTarget");

/* === GANTI JENIS DZIKIR === */
dzikirType.addEventListener("change", () => {

    const selectedOption = dzikirType.options[dzikirType.selectedIndex];
    currentDzikir = selectedOption.value;
    target = parseInt(selectedOption.dataset.target);

    if (currentDzikir === "custom") {
        customTargetInput.style.display = "block";
        targetDisplay.textContent = "-";
        target = 0;
    } else {
        customTargetInput.style.display = "none";
        targetDisplay.textContent = target;
        resetCounter();
    }
});

/* === INPUT CUSTOM TARGET === */
customTargetInput.addEventListener("input", () => {
    target = parseInt(customTargetInput.value);
    targetDisplay.textContent = target;
    resetCounter();
});

/* === TAMBAH DZIKIR === */
addBtn.addEventListener("click", () => {
    if (!target || target <= 0) return;

    count++;
    counter.textContent = count;

    if (count === target) {
        showCongratulations();
    }
});

/* === RESET === */
resetBtn.addEventListener("click", resetCounter);

function resetCounter() {
    count = 0;
    counter.textContent = 0;
    notification.innerHTML = "";
}

/* === PESAN SELAMAT BERDASARKAN DZIKIR === */
function showCongratulations() {

    let message = "";

    switch (currentDzikir) {
        case "tasbih":
            message = "✨ MasyaAllah! 33 Tasbih selesai. Semoga Allah memuliakanmu.";
            break;
        case "tahmid":
            message = "🌿 Alhamdulillah! 33 Tahmid tercapai. Hati semakin tenang.";
            break;
        case "takbir":
            message = "🌙 Allahu Akbar! 34 Takbir selesai dengan sempurna.";
            break;
        case "istighfar":
            message = "🌟 Luar biasa! 100 Istighfar tercapai. Semoga dosa diampuni.";
            break;
        default:
            message = "🎉 Hebat! Target dzikir berhasil dicapai!";
    }

    notification.innerHTML = message;
}