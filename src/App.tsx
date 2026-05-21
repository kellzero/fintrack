import SummaryCard from "./components/SummaryCard/SummaryCard"

function App() {
  return(
    <div>
      <h1>FinTrack</h1>
      <SummaryCard title="Income" value={1000} type="income" />
      <SummaryCard title="Expense" value={500} type="expense" />
      <SummaryCard title="Balance" value={500} type="balance" />
    </div>
  )
}

export default App