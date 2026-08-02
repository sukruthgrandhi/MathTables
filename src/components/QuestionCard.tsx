interface QuestionCardProps {
  table: number
  multiplier: number
}

function QuestionCard({ table, multiplier }: QuestionCardProps) {
  return (
    <div>
      {table} × {multiplier} = {table * multiplier}
    </div>
  )
}

export default QuestionCard
