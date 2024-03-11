import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank';

const EndScreen = () => {

    const {score,setScore,setGameState}=useContext(QuizContext);

    const handleRestartQuiz=()=>{
        setScore(0);
        setGameState("menu");
    }
  return (
    <div className='EndScreen'>
        <h1>Quiz Finished</h1>
        <h3>{score} / {Questions.length}</h3>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen
