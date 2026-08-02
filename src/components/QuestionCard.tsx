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
    <div>
      {table} × {multiplier} = {table * multiplier}
    </div>
  )
}

export default QuestionCard
