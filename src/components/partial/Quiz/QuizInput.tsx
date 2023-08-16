import { useMemo } from 'react'
import style from './styles.module.scss'
import { useState } from 'react'
import { useModeContext } from '@/context/useModeContext'
import { QUESTIONS } from '@/constants/Questions'

export const QuizInput: React.FC = () => {
  const { mode, setMode } = useModeContext()
  const [selectedAnswer, setSelectedAnswer] = useState<string>()
  const [questionIndex, setQuestionIndex] = useState<number>(0)

  const currentQuestion = useMemo(() => {
    return QUESTIONS[questionIndex]
  }, [])

  const handleClickSelection = (value: string) => {
    setSelectedAnswer(value)
    setMode('answer')
  }

  const handleClickNext = () => {
    setSelectedAnswer(undefined)

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
            <p></p>
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
