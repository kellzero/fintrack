import './TransactionTable.css'
import type { Transaction } from '../../types'




interface TransactionTableProps {
    transactions: Transaction[]
    onDelete?: (id: number) => void
}

function TransactionTable({ transactions, onDelete }: TransactionTableProps) {
    return (
        <table className="transaction-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.name}</td>
                        <td>R${Number(transaction.value).toFixed(2)}</td>
                        <td>{transaction.date}</td>
                        <td className={`type-${transaction.type}`}>{transaction.type}</td>
                        <td className={`status-${transaction.status}`}>{transaction.status}</td>
                        {onDelete && (
                            <td>
                                <button onClick={() => onDelete(transaction.id!)}>
                                    Delete
                                </button>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TransactionTable