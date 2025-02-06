import React, { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      question: "What's my favorite thing about you?",
      answer: "The way you decode me , I hate you",
    },
    {
      question: "Thing i hate about you?",
      answer: "Your Ciggerattes, kalesh karwayengi ye ek din",
    },
    {
      question: "What’s the cutest thing we’ve done together?",
      answer: "4 am dare😘",
    },
    {
      question: "What’s the best surprise I’ve given you?",
      answer: "Kya surprise chahiye , mai kaafi nahi hu?😤",
    },
    {
      question: "What’s my favorite part of your body?",
      answer: "aapke shoulders 😙, missing it in Pune",
    },
    {
      question: "When did I fell for you",
      answer:
        "neeche milega answer👉👈",
    },
    {
      question: "My favourite moment of us?",
      answer:
        "The Moment when I confessed and the way your expression changed, you were not expecting that, firse kaise recreate kar sakte hai wo moment baby🥺?? ",
    },
    {
      question: "What’s the best part of being together?",
      answer:
        "Scooty ride, and seeing you blush in that mirror , haaaayeee mera dil💖 ",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleRevealClick = () => {
    setShowAnswer(true);
  };

  const handleNextClick = () => {
    setShowAnswer(false);
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevClick = () => {
    setShowAnswer(false);
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="quiz-section">
      <h2 className="quiz-heading">Fun facts!</h2>
      {currentQuestion < questions.length ? (
        <div className="quiz-card">
          <h3>{questions[currentQuestion].question}</h3>
          {showAnswer ? (
            <div className="answer-display">
              <p>{questions[currentQuestion].answer}</p>
            </div>
          ) : (
            <button className="reveal-button" onClick={handleRevealClick}>
             Wanna know?
            </button>
          )}
          <div className="navigation-buttons">
            <ArrowCircleLeftIcon
              className="prev-button"
              onClick={handlePrevClick}
              disabled={currentQuestion === 0}
            />
            <ArrowCircleRightIcon
              className="next-button"
              onClick={handleNextClick}
              disabled={currentQuestion === questions.length - 1}
            />
          </div>
        </div>
      ) : (
        <div className="quiz-card"></div>
      )}
    </div>
  );
};

export default Quiz;
