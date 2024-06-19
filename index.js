const btn = document.querySelector('#new-quote');
const quoteText = document.querySelector('.quote');
const personText = document.querySelector('.person');

const quotes = [
    { quote: "Be the change that you wish to see in the world.", person: "Mahatma Gandhi" },
    { quote: "Arise, awake and stop not until the goal is reached.", person: "Swami Vivekananda" },
    { quote: "Do not take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.", person: "APJ Abdul Kalam" },
    { quote: "You cannot cross the sea merely by standing and staring at the water.", person: "Rabindranath Tagore" },
    { quote: "Manpower without unity is not a strength unless it is harmonized and united properly, then it becomes a spiritual power.", person: "Sardar Vallabhbhai Patel" },
    { quote: "Success often comes to those who dare to act. It seldom goes to the timid who are ever afraid of the consequences.", person: "Jawaharlal Nehru" },
    { quote: "Every tiny molecule of Ash is in motion with my heat I am such a Lunatic that I am free even in Jail.", person: "Bhagat Singh" },
    { quote: "You must learn to be still in the midst of activity and to be vibrantly alive in repose.", person: "Indira Gandhi" },
    { quote: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.", person: "APJ Abdul Kalam" },
    { quote: "Kind words can be short and easy to speak, but their echoes are truly endless.", person: "Mother Teresa" },
];

btn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.quote;
    personText.textContent = randomQuote.person;
});
