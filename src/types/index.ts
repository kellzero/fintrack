export interface Transaction {
    name: string
    value: number
    date: string
    type: 'income' | 'expense'
    status: 'pending' | 'completed'
}
