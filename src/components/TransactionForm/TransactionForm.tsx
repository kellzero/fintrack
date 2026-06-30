import { useEffect, useState, type ChangeEvent} from 'react'
import type { Transaction } from '../../types'
import './TransactionForm.css'
import { updateTransaction } from '../../services/api'




interface TransactionFormProps {
    onAdd : (transaction: Transaction) => void | Promise<void>
    onEdit?: (transaction: Transaction) => void | Promise<void>
    transactionToEdit?: Transaction
}


function TransactionForm({ onAdd, onEdit, transactionToEdit }: TransactionFormProps) {

  useEffect(() => {
    if (transactionToEdit) {
      setName(transactionToEdit.name)
      setValue(transactionToEdit.value)
      setDate(transactionToEdit.date)
      setType(transactionToEdit.type)
    }else{
      setName('')
      setValue(0)
      setDate('')
      setType('income')
    }
  }, [transactionToEdit])

  const [name, setName] = useState(transactionToEdit?.name ?? '')
  const [value, setValue] = useState(transactionToEdit?.value ?? 0)
  const [date, setDate] = useState(transactionToEdit?.date ?? '')
  const [type, setType] = useState<'income' | 'expense'>(transactionToEdit?.type ?? 'income')
  const [error, setError] = useState({
      name: false,
      value: false,
      date: false,
  })

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
      const newError = {
        name: !name,
        value: value <= 0,
        date: !date,
      }
      setError(newError)

      if (newError.name || newError.value || newError.date) return

      if (transactionToEdit?.id) {
        const updated = await updateTransaction(transactionToEdit.id, { name, value, date, type})
        if (onEdit) onEdit(updated)


      }else{
        await onAdd({ name, value, date, type })
      }

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
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className={error.name ? 'input-error' : ''} />
        </label>
        <label className="form-group">
          Value:
          <input type="number" name="value" value={value} onChange={(e) => setValue(Number(e.target.value))} className={error.value ? 'input-error' : ''} />
        </label>
        <label className="form-group">
          Date:
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} className={error.date ? 'input-error' : ''} />
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