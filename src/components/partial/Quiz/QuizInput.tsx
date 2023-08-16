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

  /**
   * 回答を選択する
   * @param value 選択肢
   */
  const handleClickSelection = (value: string) => {
    setSelectedAnswer(value)

    // 正解の場合
    if (value === currentQuestion.answer) {
      setCorrectCount(correctCount + 1)
    }

    setMode('answer')
  }

  /**
   * 次へを押下
   * @returns
   */
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
            <p>{currentQuestion.explanation}</p>
            <button onClick={() => handleClickNext()}>Next</button>
          </div>
        )
      case 'question':
        return (
          <div className={style.questionWrapper}>
            <p>{currentQuestion.question}</p>
            <div className={style.buttons}>
              {currentQuestion.selection.map((answerValue) => (
                <button
                  key={answerValue}
                  className={style.button}
                  onClick={() => handleClickSelection(answerValue)}
                >
                  {answerValue}
                </button>
              ))}
            </div>
          </div>
        )
      case 'complete':
        return <div>終わりー</div>
      // ケースとしては起こり得ない、何も返さない
      default:
        return
    }
  }

  return <>{getQuestionsArea()}</>
}
