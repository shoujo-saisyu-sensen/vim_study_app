import { useMemo } from 'react'
import style from './styles.module.scss'
import { useState } from 'react'
import { useModeContext } from '@/context/useModeContext'
import { QUESTIONS } from '@/constants/Questions'

export const QuizInput: React.FC = () => {
  const { mode, setMode } = useModeContext()
  const [selectedAnswer, setSelectedAnswer] = useState<string>()
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [correctCount, setCorrectCount] = useState<number>(0)

  const currentQuestion = useMemo(() => {
    return QUESTIONS[questionIndex]
  }, [questionIndex])

  const handleClickSelection = (value: string) => {
    setSelectedAnswer(value)

    // 正解の場合
    if (value === currentQuestion.answer) {
      setCorrectCount(correctCount + 1)
    }

    setMode('answer')
  }

  const handleClickNext = () => {
    setSelectedAnswer(undefined)

    // 最終問題の時
    if (questionIndex === QUESTIONS.length - 1) {
      setMode('complete')
      return
    }

    setQuestionIndex(questionIndex + 1)
    setMode('question')
  }

  const getQuestionsArea = () => {
    switch (mode) {
      case 'answer':
        return (
          <div>
            <p>{currentQuestion.answer}</p>
            <br />
            <p>{currentQuestion.explanation}</p>
            <button onClick={() => handleClickNext()}>Next</button>
          </div>
        )
      case 'question':
        return (
          <div>
            <p>{currentQuestion.question}</p>
            {currentQuestion.selection.map((answerValue) => (
              <button
                key={answerValue}
                onClick={() => handleClickSelection(answerValue)}
              >
                {answerValue}
              </button>
            ))}
          </div>
        )
      case 'complete':
        return <div>終わりー</div>
      // ケースとしては起こり得ない、何も返さない
      default:
        return
    }
  }

  return (
    <div className={style.inputWrapper}>
      <div>{getQuestionsArea()}</div>
    </div>
  )
}
