export interface Token {
  token: string
}

export interface TokenActions {
  setToken: (token: string) => void
  clearToken: () => void
}