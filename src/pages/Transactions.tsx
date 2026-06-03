import { useState, useEffect } from "react"
import { getTransactions, deleteTransaction } from "../services/api"
import type { Transaction } from "../types"
import TransactionTable from "../components/TransactionTable/TransactionTable"


function Transactions() {
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

    return(
        <div>
            <TransactionTable transactions={transactions} onDelete={handleDeleteTransaction} />
        </div>
    )
}

export default Transactions;