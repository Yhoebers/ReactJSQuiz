import React, { useState } from "react";
import { questions } from "../data/questions";
import QuestionContainer from "./QuestionContainer";
import AnswerContainer from "./AnswerContainer";

/*
- This component holds the the question and the answers. 
- Questions and their answers will be passed as props to children components
*/

const QuestionAnswerContainer = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswers] = useState("");

  const toChild = () => {
    setQuestion(questions[0].question); //Objects cannot be passed as props. Using the question property counts as a string which can be passed.
    console.log(question);
  };

  return (
    <div>
      <button onClick={toChild}></button>

      <QuestionContainer questions={question} />
      <AnswerContainer answers={answer} />
    </div>
  );
};

export default QuestionAnswerContainer;
