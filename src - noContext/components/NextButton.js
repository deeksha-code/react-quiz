
function NextButton({dispatch,answer,index,numQuestions}) {
    console.log(index,numQuestions);
    

    if(answer===null) return null;
    if(index<numQuestions-1){
         console.log("if block of next button");
         
         return (
           <button
             className="btn btn-ui"
             onClick={() => dispatch({ type: "nextQuestion" })}
           >
             Next
           </button>
         );
    }

     if (index === numQuestions - 1) {
       return (
         <button
           className="btn btn-ui"
           onClick={() => dispatch({ type: "finish" })}
         >
           Finish
         </button>
       );
     }
}

export default NextButton
