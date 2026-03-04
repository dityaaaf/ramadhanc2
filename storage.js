function saveCount(value) {
    localStorage.setItem("dzikirCount", value);
}

function loadCount() {
    return parseInt(localStorage.getItem("dzikirCount")) || 0;
}