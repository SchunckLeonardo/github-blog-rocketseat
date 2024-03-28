import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { PostCardContent } from './styles'

interface PostCardProps {
  onClick: () => void
  title: string
  created_at: Date
  body: string
}

// eslint-disable-next-line camelcase
export function PostCard({ onClick, title, created_at, body }: PostCardProps) {
  return (
    <PostCardContent onClick={onClick}>
      <div className="title">
        <h2>{title}</h2>
        <span>
          {formatDistanceToNow(created_at, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
      </div>
      <p className="description">{body}</p>
    </PostCardContent>
  )
}
