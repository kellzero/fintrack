const BASE_URL = 'http://localhost:8000/api'

function getToken() {
    return localStorage.getItem('access_token')
}

function authHeaders() {
    return{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    }
}
export async function login(username: string, password: string) {
    const response = await fetch(`${BASE_URL}/token/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    })
    const data = await response.json()
    if(data.access) {
        localStorage.setItem('access_token', data.access)
        localStorage.setItem('refresh_token', data.refresh)
        return true
    }
    return false
}
export async function logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}

export async function getTransactions() {
    const response = await fetch(`${BASE_URL}/transactions`,{
        headers: authHeaders(),
    })
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
        headers: authHeaders(),
        body: JSON.stringify(transaction),
    })
    return response.json()
}

export async function deleteTransaction(id: number) {
    await fetch(`${BASE_URL}/transactions/${id}/`, { method: 'DELETE', headers: authHeaders() })
}