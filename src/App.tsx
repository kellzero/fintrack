import { useState } from "react"
import type { Transaction } from "./types"
import Navbar from "./components/Navbar/Navbar"
import SummaryCard from "./components/SummaryCard/SummaryCard"
import TransactionTable from "./components/TransactionTable/TransactionTable"
import TransactionForm from "./components/TransactionForm/TransactionForm"




function App() {
const [transactions, setTransactions] = useState<Transaction[]>([
  { name: 'Salary', value: 5000, date: '2024-01-01', type: 'income', status: 'pending' },
  { name: 'Groceries', value: 200, date: '2024-01-02', type: 'expense', status: 'pending' },
])

function handleAddTransaction(transaction: Transaction) {
  setTransactions([...transactions, transaction])
}
  
  return(
    <div>
      <Navbar />
      <div className="summary-cards">
        <SummaryCard title="Income" value={1000} type="income" />
        <SummaryCard title="Expense" value={500} type="expense" />
        <SummaryCard title="Balance" value={500} type="balance" />
      </div>
      <TransactionForm onAdd={handleAddTransaction} />
      <TransactionTable transactions={transactions} />
    </div>
  )
}

export default App