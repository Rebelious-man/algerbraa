function sendMessage() {
    const userText = document.getElementById('userInput').value;
    
    if (userText.trim() === "") return; // Prevent sending empty messages

    document.getElementById('chatbox').innerHTML += `<div>User: ${userText}</div>`;
    document.getElementById('userInput').value = '';

    // Basic AI responses
    let botResponse = "I'm not sure how to respond to that.";
    if (userText.toLowerCase().includes("hello")) {
        botResponse = "Ho ho ho! Hello! How can I assist you this festive season?";
    } else if (userText.toLowerCase().includes("how are you")) {
        botResponse = "I'm just a jolly bunch of code, enjoying the Christmas spirit!";
    }

    document.getElementById('chatbox').innerHTML += `<div>Bot: ${botResponse}</div>`;
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight; // Scroll to the bottom
}
