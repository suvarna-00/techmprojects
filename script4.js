const quotes = [
    "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Our lives begin to end the day we become silent about things that matter. – Martin Luther King Jr.",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "The best way to predict the future is to create it. – Peter Drucker",
    "The only way to do great work is to love what you do. – Steve Jobs"
];
document.addEventListener("DOMContentLoaded", function(){
     document.getElementById("quoteButton").addEventListener("click",generateQuote);
});
function generateQuote() {
    const randomIndex = Math.floor(Math.random()* quotes.length);
    document.getElementById("quote").innerText=quotes[randomIndex];
    
}
