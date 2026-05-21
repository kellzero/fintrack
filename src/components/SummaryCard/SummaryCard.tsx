interface SummaryCardProps {
  title: string
  value: number
  type: 'income' | 'expense' | 'balance'
}

function SummaryCard({ title, value, type }: SummaryCardProps) {
    const classMap = {
        income: 'card-income',
        expense: 'card-expense',
        balance: 'card-balance'
    }
  return (
    <div className={classMap[type]}>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  )
}
export default SummaryCard