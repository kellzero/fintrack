import { useState, useEffect } from "react"
import type { Transaction } from "./types"
import Navbar from "./components/Navbar/Navbar"
import SummaryCard from "./components/SummaryCard/SummaryCard"
import TransactionTable from "./components/TransactionTable/TransactionTable"
import TransactionForm from "./components/TransactionForm/TransactionForm"
import {getTransactions, createTransaction, deleteTransaction} from "./services/api"





function App() {
const [transactions, setTransactions] = useState<Transaction[]>([])
useEffect(() => {
  async function fetchTransactions() {
    const data = await getTransactions()
    setTransactions(data)
  }
  fetchTransactions()
}, [])

async function handleAddTransaction(transaction: Transaction) {
  const newTransaction = await createTransaction(transaction)
  setTransactions([...transactions, newTransaction])
}
async function handleDeleteTransaction(id: number) {
  await deleteTransaction(id)
  setTransactions(transactions.filter(t => t.id !== id))
}
const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + Number(t.value), 0)
const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Number(t.value), 0)
const totalBalance = totalIncome - totalExpense
  
  return(
    <div>
      <Navbar />
      <div className="summary-cards">
        <SummaryCard title="Income" value={totalIncome} type="income" />
        <SummaryCard title="Expense" value={totalExpense} type="expense" />
        <SummaryCard title="Balance" value={totalBalance} type="balance" />
      </div>
      <TransactionForm onAdd={handleAddTransaction} />
      <TransactionTable transactions={transactions} onDelete={handleDeleteTransaction} />
    </div>
  )
}

export default App