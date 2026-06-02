const BASE_URL = 'https://fintrack-api-hdfk.onrender.com/api'

export async function getTransactions() {
    const response = await fetch(`${BASE_URL}/transactions`)
    return response.json()
}

export async function createTransaction(transaction: {
    name: string
    value: number
    date: string
    type: string
    status: string
}) {
    const response = await fetch(`${BASE_URL}/transactions/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
    })
    return response.json()
}

export async function deleteTransaction(id: number) {
    await fetch(`${BASE_URL}/transactions/${id}/`, { method: 'DELETE', })
}