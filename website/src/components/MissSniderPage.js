import React, { useState } from "react";
import office from "../images/Kindergarten/Game/coal.jpg";
import sticker from "../images/Kindergarten/Game/sticker.png";
import chair from "../images/Kindergarten/Game/chair.jpg";

const questions = [
  {
    question: "I need you to clean up the classroom. What do you do?",
    points: [5, 1],
    buttonText: ["Clean up the classroom", "Ignore Miss Snider"],
  },
  {
    question: "Table 4, please come to the carpet. What do you do?",
    points: [5, -1, -5],
    buttonText: [
      "Go to the carpet",
      "Ignore Miss Snider",
      "Run around the classroom",
    ],
  },
  {
    question: "Can you please go to the office? What do you do?",
    points: [5, -1, -5],
    buttonText: [
      "Say, OK",
      "Ignore Miss Snider",
      "Say No, I don't want to go to the office",
    ],
  },
  {
    question: "Table 4 please line up for lunch? What do you do?",
    points: [5, -1, -5],
    buttonText: ["Line up", "Say yes, but don't line up", "Say No"],
  },
  {
    question:
      "Here's a star for doing good on your morning work. What do you do?",
    points: [5, -1],
    buttonText: ["Say, Thank you", "Ignore and go get your snack"],
  },
];

const MissSniderGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [prizeName, setPrizeName] = useState("");
  const [prizeImg, setPrizeImg] = useState("");

  const handleAnswerClick = (point, cb = () => {}) => {
    const newPoints = points + point;
    setPoints(newPoints);
    setCurrentQuestion(currentQuestion + 1);
    cb();
  };

  const handleGameEnd = () => {
    if (points >= 20) {
      setPrizeImg(chair);
      setPrizeName(`You've get some time on the ball chair`);
    } else if (points >= 5) {
      setPrizeImg(sticker);
      setPrizeName(`You've received star sticker`);
    } else {
      setPrizeImg(office);
      setPrizeName(
        `You have been bad, you get to see Mrs. Dessy in the office`
      );
    }
  };

  return (
    <div style={{ marginTop: 85 }}>
      <section className="section">
        <div className="container  has-text-centered">
          <h1 className="title is-2 has-text-centered">
            Miss Snider's Prize Game
          </h1>
          <hr />

          {questions[currentQuestion] !== undefined && (
            <>
              <h1 class="subtitle is-3 has-text-centered">
                {questions[currentQuestion].question}
              </h1>
              <div class="is-centered">
                {questions[currentQuestion].buttonText.map((text, i) => (
                  <button
                    style={{ marginRight: 15 }}
                    key={i}
                    onClick={() => {
                      handleAnswerClick(
                        questions[currentQuestion].points[i],
                        () => {
                          window.setTimeout(() => {
                            if (currentQuestion === questions.length - 1) {
                              handleGameEnd();
                            }
                          }, 500);
                        }
                      );
                    }}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </>
          )}
          <h1>{prizeName}</h1>
          {prizeImg && <img style={{ width: 400 }} src={prizeImg} />}
          {prizeImg && (
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setPoints(0);
                setPrizeName("");
                setPrizeImg("");
              }}
            >
              Play Again
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default MissSniderGame;
