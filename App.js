import React, { useState } from 'react';
import CategorySelector from './Components/CategorySelector';
import Question from './Components/Question';
import Timer from './Components/Timer';
import ScoreDisplay from './Components/ScoreDisplay';
import './App.css';

// Sample questions data
const questionsData = {
    Science: [
        { text: "What is the chemical symbol for water?", answers: [{ text: "H2O", isCorrect: true }, { text: "CO2", isCorrect: false }] },
        { text: "What planet is known as the Red Planet?", answers: [{ text: "Mars", isCorrect: true }, { text: "Jupiter", isCorrect: false }] },
        { text: "What gas do plants absorb from the atmosphere?", answers: [{ text: "Oxygen", isCorrect: false }, { text: "Carbon Dioxide", isCorrect: true }] },
        { text: "What is the hardest natural substance on Earth?", answers: [{ text: "Gold", isCorrect: false }, { text: "Diamond", isCorrect: true }] },
        { text: "What is the main element in the sun?", answers: [{ text: "Hydrogen", isCorrect: true }, { text: "Oxygen", isCorrect: false }] },
    ],
    History: [
        { text: "Who was the first President of the United States?", answers: [{ text: "George Washington", isCorrect: true }, { text: "Abraham Lincoln", isCorrect: false }] },
        { text: "In which year did World War II end?", answers: [{ text: "1945", isCorrect: true }, { text: "1939", isCorrect: false }] },
        { text: "Who was the Queen of England during the Spanish Armada?", answers: [{ text: "Elizabeth I", isCorrect: true }, { text: "Mary I", isCorrect: false }] },
        { text: "Who was known as the Iron Lady?", answers: [{ text: "Margaret Thatcher", isCorrect: true }, { text: "Queen Victoria", isCorrect: false }] },
        { text: "Where did the Renaissance begin?", answers: [{ text: "Italy", isCorrect: true }, { text: "France", isCorrect: false }] },
    ],
    Math: [
        { text: "What is the square root of 64?", answers: [{ text: "8", isCorrect: true }, { text: "6", isCorrect: false }] },
        { text: "What is 7 x 6?", answers: [{ text: "42", isCorrect: true }, { text: "36", isCorrect: false }] },
        { text: "What is 15% of 200?", answers: [{ text: "30", isCorrect: true }, { text: "20", isCorrect: false }] },
        { text: "What is the value of π (Pi) to two decimal places?", answers: [{ text: "3.14", isCorrect: true }, { text: "3.12", isCorrect: false }] },
        { text: "What is 100 divided by 4?", answers: [{ text: "25", isCorrect: true }, { text: "50", isCorrect: false }] },
    ]
};

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [quizComplete, setQuizComplete] = useState(false);

    // Define the question background colors
    const questionBackgroundColors = ['#FFB6C1', '#B0E0E6', '#FFD700', '#98FB98', '#FFA07A'];

    const startQuiz = (category) => {
        setSelectedCategory(category);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizComplete(false);
        setTimeLeft(30);
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        setTimeLeft(30);
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questionsData[selectedCategory].length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setQuizComplete(true);
        }
    };

    const handleTimeUp = () => handleAnswer(false);
    const resetQuiz = () => {
        setSelectedCategory(null);
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizComplete(false);
        setTimeLeft(30);
    };

    if (!selectedCategory) {
        return <CategorySelector categories={Object.keys(questionsData)} selectCategory={startQuiz} />;
    }

    if (quizComplete) {
        return <ScoreDisplay score={score} totalQuestions={questionsData[selectedCategory].length} onPlayAgain={resetQuiz} />;
    }

    return (
        <div className="App">
            <h1>Quiz Application</h1>
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleTimeUp} />
            <Question 
                question={questionsData[selectedCategory][currentQuestionIndex]} 
                onAnswer={handleAnswer} 
                backgroundColor={questionBackgroundColors[currentQuestionIndex % questionBackgroundColors.length]} 
            />
        </div>
    );
};

export default App;
