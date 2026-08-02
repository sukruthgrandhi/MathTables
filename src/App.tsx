import QuestionCard, { type Question } from './components/QuestionCard'

const questions: Question[] = [
  { table: 2, multiplier: 1 },
  { table: 2, multiplier: 2 },
  { table: 2, multiplier: 3 },
  { table: 2, multiplier: 4 },
  { table: 2, multiplier: 5 },
  { table: 2, multiplier: 6 },
  { table: 2, multiplier: 7 },
  { table: 2, multiplier: 8 },
  { table: 2, multiplier: 9 },
  { table: 2, multiplier: 10 },
]

function App() {
  return (
    <>
      <h1>Hello Multiplication Tables</h1>
      {questions.map((q) => (
        <QuestionCard key={`${q.table}x${q.multiplier}`} question={q} />
      ))}
    </>
  )
}

export default App
