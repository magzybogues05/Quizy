import React, {useContext, useState } from 'react'
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

const Quiz = () => {
    const {setGameState,score,setScore}=useContext(QuizContext);
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [optionChosen,setOptionChosen]=useState("");

    const handleFinishQuiz=()=>{
        if(optionChosen===Questions[currentQuestion].answer)
        {
            setScore((prev)=>prev+1);
        }
        setGameState("endscreen");
        
    }
    const handleNextQuestion=()=>{
        console.log(optionChosen, Questions[currentQuestion].answer);
        if(optionChosen===Questions[currentQuestion].answer)
        {
            setScore((prev)=>prev+1);
        }
        console.log(score);
        setCurrentQuestion(currentQuestion+1);
    }

  return (
    <div className='Quiz'>
        <h1>{Questions[currentQuestion].prompt}</h1>
        <div className='options'>
            <button onClick={()=>setOptionChosen("optionA")}>{Questions[currentQuestion].optionA}</button>
            <button onClick={()=>setOptionChosen("optionB")}>{Questions[currentQuestion].optionB}</button>
            <button onClick={()=>setOptionChosen("optionC")}>{Questions[currentQuestion].optionC}</button>
            <button onClick={()=>setOptionChosen("optionD")}>{Questions[currentQuestion].optionD}</button>
        </div>
        {(currentQuestion===Questions.length-1)?
        (<button onClick={handleFinishQuiz}>Finish Quiz</button>):
        (<button onClick={handleNextQuestion}>Next Question</button>)}
    </div>
  )
}

export default Quiz
