import React, { useState } from 'react';
import '../App.css'; // Ensure the path is correct for your project structure

const CategorySelector = ({ categories, selectCategory }) => {
    const [userName, setUserName] = useState('');
    const [showCategories, setShowCategories] = useState(false);

    const handleStartQuiz = () => {
        if (userName) {
            setShowCategories(true);
        } else {
            alert("Please enter your name!");
        }
    };

    return (
        <div className="category-container">
            <h2>Welcome to the Quiz!</h2>
            {!showCategories ? (
                <div className="name-input">
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                        className="name-input-field"
                    />
                    <button className="start-button" onClick={handleStartQuiz}>
                        Start Quiz
                    </button>
                </div>
            ) : (
                <div>
                    <h3>Hello, {userName}! Choose Your Quiz Category</h3>
                    <div className="category-buttons">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="category-button"
                                onClick={() => selectCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategorySelector;
