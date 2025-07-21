// Countdown timer
const targetDate = new Date("2025-08-09T20:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}天 ${hours}小時 ${minutes}分 ${seconds}秒`;
}, 1000);

// Simple message board with localStorage
function postMessage() {
    const input = document.getElementById("messageInput");
    const messagesDiv = document.getElementById("messages");
    if (input.value.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = input.value;
        messagesDiv.appendChild(p);
        saveMessage(input.value);
        input.value = "";
    }
}

function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem("beabaMessages")) || [];
    messages.push(message);
    localStorage.setItem("beabaMessages", JSON.stringify(messages));
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem("beabaMessages")) || [];
    const messagesDiv = document.getElementById("messages");
    messages.forEach(msg => {
        const p = document.createElement("p");
        p.textContent = msg;
        messagesDiv.appendChild(p);
    });
}

loadMessages();