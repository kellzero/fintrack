import { useState, type FormEvent, type ChangeEvent} from 'react'
import type { Transaction } from '../../types'



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
    }
  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Value:
          <input type="number" name="value" value={value} onChange={(e) => setValue(Number(e.target.value))} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Type:
          <select name="type" value={type} onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value as 'income' | 'expense')}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default TransactionForm