import axios from 'axios'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface User {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface GithubContextType {
  user: User | undefined
}

export const GithubContext = createContext({} as GithubContextType)

interface GithubContextProviderProps {
  children: ReactNode
}

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const [user, setUser] = useState<User>()

  const getUser = useCallback(async () => {
    const response = await axios.get(
      'https://api.github.com/users/schunckleonardo',
    )
    setUser(response.data)
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <GithubContext.Provider value={{ user }}>{children}</GithubContext.Provider>
  )
}
