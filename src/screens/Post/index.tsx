import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import Markdown from 'react-markdown'
import { useLocation, useNavigate } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

import { FooterCard, MainContainer, UserCard, UserInfos } from '../Home/styles'
import { PostContentContainer, TitlePost } from './styles'

export function Post() {
  const { state } = useLocation()
  const navigate = useNavigate()

  return (
    <MainContainer>
      <UserCard>
        <UserInfos>
          <TitlePost>
            <header className="title">
              <a onClick={() => navigate(-1)}>
                <FaChevronLeft size={12} />
                Voltar
              </a>
              <a target="_blank" href={state.html_url} rel="noreferrer">
                Github
                <FaArrowUpRightFromSquare size={12} />
              </a>
            </header>
            <h2 className="title-post">{state.title}</h2>
          </TitlePost>
          <FooterCard>
            <div className="icons">
              <FaGithub size={18} />
              {state.user.login}
            </div>
            <div className="icons">
              <FaCalendarDay size={18} />
              {formatDistanceToNow(state.created_at, {
                locale: ptBR,
                addSuffix: true,
              })}
            </div>
            <div className="icons">
              <FaComment size={18} />
              {state.comments} comentários
            </div>
          </FooterCard>
        </UserInfos>
      </UserCard>
      <PostContentContainer>
        <Markdown remarkPlugins={[remarkGfm]}>{state.body}</Markdown>
      </PostContentContainer>
    </MainContainer>
  )
}
