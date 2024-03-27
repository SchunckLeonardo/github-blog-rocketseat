import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

import { FooterCard, MainContainer, UserCard, UserInfos } from '../Home/styles'
import { PostContentContainer, TitlePost } from './styles'

export function Post() {
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
              <a>
                Github
                <FaArrowUpRightFromSquare size={12} />
              </a>
            </header>
            <h2 className="title-post">
              JavaScript data types and data structures
            </h2>
          </TitlePost>
          <FooterCard>
            <div className="icons">
              <FaGithub size={18} />
              cameronvwll
            </div>
            <div className="icons">
              <FaCalendarDay size={18} />
              Há 1 dia
            </div>
            <div className="icons">
              <FaComment size={18} />5 comentários
            </div>
          </FooterCard>
        </UserInfos>
      </UserCard>
      <PostContentContainer></PostContentContainer>
    </MainContainer>
  )
}
