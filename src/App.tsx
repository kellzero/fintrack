import SummaryCard from "./components/SummaryCard/SummaryCard"

function App() {
  return(
    <div>
      <h1>FinTrack</h1>
      <div className="summary-cards">
        <SummaryCard title="Income" value={1000} type="income" />
        <SummaryCard title="Expense" value={500} type="expense" />
        <SummaryCard title="Balance" value={500} type="balance" />
      </div>
    </div>
  )
}

export default App