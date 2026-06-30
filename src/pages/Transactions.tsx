import { useState, useEffect } from "react"
import { getTransactions, deleteTransaction } from "../services/api"
import type { Transaction } from "../types"
import TransactionTable from "../components/TransactionTable/TransactionTable"


function Transactions() {
    const[typeFilter, setTypeFilter] = useState('all')
    const [transactions, setTransactions] = useState<Transaction[]>([])
      useEffect(() => {
    async function fetchTransactions() {
      const data = await getTransactions()
      setTransactions(data)
    }
    fetchTransactions()
  }, [])

  
  async function handleDeleteTransaction(id: number) {
    await deleteTransaction(id)
    setTransactions(transactions.filter(t => t.id !== id))
  }
  const filteredTransactions = transactions.filter(t => {
    if (typeFilter !== 'all' && t.type !== typeFilter) {
      return false
    }
    return true
    })
    return(
        <div>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="all">All Types</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <TransactionTable transactions={filteredTransactions} onDelete={handleDeleteTransaction} />
        </div>
    )
}

export default Transactions;