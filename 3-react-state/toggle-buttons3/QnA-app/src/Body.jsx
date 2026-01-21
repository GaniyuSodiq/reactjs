import React from "react";
import Question from "./Question";
import questions from "./assets/questions";

export default function Body() {
  // i can be getting the data directly from the questions.js array but
  // the doesnt seem right... so I will bring the array into my own array
  // and use my newly created array the way i want to
  // i can even save this new array in state,
  // const theQuestions = questions

  const theQuestions = questions;
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const [switchQnA, setSwitchQnA] = React.useState(true);

  function toggleQnA() {
    setSwitchQnA((prevSwitch) => !prevSwitch);
  }

  function nextQuestion() {
    setQuestionNumber((prevQNumber) =>
      prevQNumber + 1 === theQuestions.length ? 0 : prevQNumber + 1,
    );
    setSwitchQnA(true);
  }
  function lastQuestion() {
    setQuestionNumber((prevQNumber) =>
      prevQNumber === 0 ? theQuestions.length - 1 : prevQNumber - 1,
    );
    setSwitchQnA(true);
  }

  return (
    <main>
      <Question
        qn={theQuestions[questionNumber]}
        handleSwitchQna={toggleQnA}
        switchQnA={switchQnA}
      />
      <div className="controls">
        <span onClick={lastQuestion}>⬅️</span>
        <span onClick={nextQuestion}>➡️</span>
      </div>
    </main>
  );
}
