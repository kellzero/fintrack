import './TransactionTable.css'
import type { Transaction } from '../../types'




interface TransactionTableProps {
    transactions: Transaction[]
}

function TransactionTable({ transactions }: TransactionTableProps) {
    return (
        <table className="transaction-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.name}>
                        <td>{transaction.name}</td>
                        <td>R${transaction.value.toFixed(2)}</td>
                        <td>{transaction.date}</td>
                        <td className={`type-${transaction.type}`}>{transaction.type}</td>
                        <td className={`status-${transaction.status}`}>{transaction.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionTable