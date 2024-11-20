import React from 'react';
import quizImage from '../images/quiz.jpg'; // Adjust the path as needed based on your project structure

const Question = ({ question, onAnswer }) => (
    <div style={{
        backgroundImage: `url(${quizImage})`, // Use template literals to embed the imported image
        backgroundSize: 'cover', // Ensure the image covers the entire div
        backgroundPosition: 'center', // Center the image
        width: '700px', // Set a fixed width for the square box
        height: '400px', // Set the same height to create a square
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        margin: 'auto', // Center the box horizontally
        position: 'relative', // Ensures content remains above the background
        display: 'flex', // Use flexbox to center the content
        flexDirection: 'column', // Align items in a column
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
    }}>
        <h3 style={{
            marginBottom: "15px",
            fontSize: "1.5em",
            textAlign: "center",
            background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 20%, rgba(208,222,33,1) 40%, rgba(79,220,74,1) 60%, rgba(0,212,255,1) 80%, rgba(0,0,255,1) 100%)", // Multicolor gradient
            WebkitBackgroundClip: "text", // Clip the background to the text
            color: "black" // Make the text color transparent to show the gradient
           
        }}>
            {question.text}
        </h3>
        <div>
            {question.answers.map((answer, index) => (
                <button
                    key={index}
                    onClick={() => onAnswer(answer.isCorrect)}
                    style={{
                        backgroundColor: "rgba(106, 17, 203, 0.8)", // Semi-transparent background for better readability
                        color: "#fff",
                        padding: "12px 25px",
                        border: "none",
                        borderRadius: "5px",
                        margin: "5px",
                        cursor: "pointer",
                        transition: "background-color 0.3s, transform 0.2s",
                        fontSize: "1em",
                        fontWeight: "bold",
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#8e44ad"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(106, 17, 203, 0.8)"}
                >
                    {answer.text}
                </button>
            ))}
        </div>
    </div>
);

export default Question;
