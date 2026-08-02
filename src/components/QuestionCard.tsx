import './QuestionCard.css'

export interface Question {
  table: number
  multiplier: number
}

interface QuestionCardProps {
  question: Question
}

function QuestionCard({ question }: QuestionCardProps) {
  const { table, multiplier } = question
  return (
    <div className="question-card">
      {table} × {multiplier} = {table * multiplier}
    </div>
  )
}

export default QuestionCard
