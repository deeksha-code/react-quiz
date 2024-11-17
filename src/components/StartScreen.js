import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestion, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{numQuestion} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
