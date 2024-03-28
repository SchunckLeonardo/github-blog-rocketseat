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

interface Issue {
  title: string
  html_url: string
  created_at: Date
  body: string
  number: number
  user: User
  comments: number
}

export interface QueryResponse {
  total_count: number
  items: Issue[]
}

interface GithubContextType {
  user: User | undefined
  getAllIssues: (query?: string) => Promise<QueryResponse | undefined>
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

  const getAllIssues = async (query?: string) => {
    try {
      const response = await axios.get<QueryResponse>(
        `https://api.github.com/search/issues?q=${query}%20repo:schunckleonardo/github-blog-rocketseat`,
      )
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    <GithubContext.Provider value={{ user, getAllIssues }}>
      {children}
    </GithubContext.Provider>
  )
}
