import React from "react";
import { questions } from "../data/questions";
import QuestionContainer from "./QuestionContainer";
import AnswerContainer from "./AnswerContainer";

/*
This component holds the the question and the answers. 
*/

const QuestionAnswerContainer = () => {
  return (
    <div>
      <QuestionContainer />
      <AnswerContainer />
    </div>
  );
};

export default QuestionAnswerContainer;
