import SummaryCard from "./components/SummaryCard/SummaryCard"
import TransactionTable from "./components/TransactionTable/TransactionTable"
import type { Transaction } from "./types"

function App() {
  const transactions: Transaction[] = [
    { name: 'Salary', value: 1000, date: '2024-06-01', type: 'income', status: 'completed' },
    { name: 'Groceries', value: 200, date: '2024-06-02', type: 'expense', status: 'completed' },
    { name: 'Electricity Bill', value: 300, date: '2024-06-03', type: 'expense', status: 'pending' }
  ]

  return(
    <div>
      <h1>FinTrack</h1>
      <div className="summary-cards">
        <SummaryCard title="Income" value={1000} type="income" />
        <SummaryCard title="Expense" value={500} type="expense" />
        <SummaryCard title="Balance" value={500} type="balance" />
      </div>
      <TransactionTable transactions={transactions} />
    </div>
  )
}

export default App