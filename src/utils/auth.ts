const TOKEN_KEY = 'prototype_demo_token'
const USER_KEY = 'prototype_demo_user'

export const DEMO_USERNAME = 'demo'
export const DEMO_PASSWORD = '123456'

export function login(username: string, password: string): boolean {
  if (username === DEMO_USERNAME && password === DEMO_PASSWORD) {
    localStorage.setItem(TOKEN_KEY, 'demo-token')
    localStorage.setItem(USER_KEY, username)
    return true
  }
  return false
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_KEY)
}

export function isAuthenticated(): boolean {
  return Boolean(localStorage.getItem(TOKEN_KEY))
}

export function getCurrentUser(): string {
  return localStorage.getItem(USER_KEY) || DEMO_USERNAME
}
