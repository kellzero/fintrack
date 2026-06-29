import { useState, useEffect } from "react";
import SummaryCard from "../components/SummaryCard/SummaryCard";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import TransactionTable from "../components/TransactionTable/TransactionTable";
import { getTransactions, createTransaction, deleteTransaction } from "../services/api";
import type { Transaction } from "../types";




function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
    useEffect(() => {
  async function fetchTransactions() {
    const data = await getTransactions()
    setTransactions(data)
  }
  fetchTransactions()
}, [])

async function handleAddTransaction(transaction: Transaction) {
  await createTransaction(transaction)
  const data = await getTransactions()
  setTransactions(data)
}

async function handleEditTransaction(updatedTransaction: Transaction) {
  setTransactions(transactions.map(t => t.id === updatedTransaction.id ? updatedTransaction : t))
  setTransactionToEdit(undefined)
}

function handleSelectEdit(transaction: Transaction) {
  console.log('Edit clicado:', transaction)
  setTransactionToEdit(transaction)
}

async function handleDeleteTransaction(id: number) {
  await deleteTransaction(id)
  setTransactions(transactions.filter(t => t.id !== id))
}
const [transactionToEdit, setTransactionToEdit] = useState<Transaction | undefined>(undefined)
const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + Number(t.value), 0)
const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Number(t.value), 0)
const totalBalance = totalIncome - totalExpense
  
  return(
    <div>
      <div className="summary-cards">
        <SummaryCard title="Income" value={totalIncome} type="income" />
        <SummaryCard title="Expense" value={totalExpense} type="expense" />
        <SummaryCard title="Balance" value={totalBalance} type="balance" />
      </div>
      <TransactionForm onAdd={handleAddTransaction} onEdit={handleEditTransaction} transactionToEdit={transactionToEdit} />
      <TransactionTable transactions={transactions} onEdit={handleSelectEdit} onDelete={handleDeleteTransaction} />
    </div>
  )
}

export default Dashboard