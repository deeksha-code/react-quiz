import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  // questions[index]
  // console.log(question);
  const { questions ,index}=useQuiz();
  console.log("question", questions[index].question);

  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options question={questions[index]}/>
     
    </div>
  );
}

export default Question;
