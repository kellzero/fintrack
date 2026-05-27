import { useState, type FormEvent, type ChangeEvent} from 'react'
import type { Transaction } from '../../types'
import './TransactionForm.css'




interface TransactionFormProps {
    onAdd : (transaction: Transaction) => void
}



function TransactionForm({ onAdd }: TransactionFormProps) {
    const [name, setName] = useState('')
    const [value, setValue] = useState(0)
    const [date, setDate] = useState('')
    const [type, setType] = useState<'income' | 'expense'>('income')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onAdd({ name, value, date, type, status: 'pending' })
        setName('')
        setValue(0)
        setDate('')
        setType('income')
    }
  return (
    <div className="form-container">
      <h2 className="form-title">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <label className="form-group">
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="form-group">
          Value:
          <input type="number" name="value" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        </label>
        <label className="form-group">
          Date:
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label className="form-group">
          Type:
          <select name="type" value={type} onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value as 'income' | 'expense')}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <button type="submit" className="form-button">
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm