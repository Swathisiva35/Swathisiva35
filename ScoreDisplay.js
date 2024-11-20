import React from 'react';

const ScoreDisplay = ({ score, totalQuestions, onPlayAgain }) => {
    const percentage = (score / totalQuestions) * 100;
    const resultMessage = percentage >= 80 ? "🎉 Excellent!" : percentage >= 50 ? "😊 Good job!" : "💪 Keep trying!";

    return (
        <div className="score-container">
            <h2>Your Score</h2>
            <div className="score-details">
                <h3>{resultMessage}</h3>
                <p>You scored {score} out of {totalQuestions}</p>
                <button onClick={onPlayAgain} className="play-again-button">Play Again</button>
            </div>
        </div>
    );
};

export default ScoreDisplay;
