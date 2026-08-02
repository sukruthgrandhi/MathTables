import QuestionCard from './components/QuestionCard'

function App() {
  return (
    <>
      <h1>Hello Multiplication Tables</h1>
      <QuestionCard table={2} multiplier={"3"} />
    </>
  )
}

export default App
