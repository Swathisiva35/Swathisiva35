import React, { useEffect, useState } from 'react';

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }
        const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearInterval(timerId);
    }, [timeLeft, setTimeLeft, onTimeUp]);

    return <h4>Time Left: {timeLeft}s</h4>;
};

export default Timer;
