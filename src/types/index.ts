export interface Transaction {
    id?: number
    name: string
    value: number
    date: string
    type: 'income' | 'expense'
    status: 'pending' | 'completed'
}
