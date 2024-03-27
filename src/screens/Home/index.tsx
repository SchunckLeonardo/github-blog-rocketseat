import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from 'react-icons/fa6'

import { PostCard } from '@/components/PostCard'

import {
  FooterCard,
  GridPostCard,
  MainContainer,
  SearchInput,
  SearchSection,
  SearchTitle,
  TitleAndDescription,
  UserCard,
  UserInfos,
} from './styles'

export function Home() {
  return (
    <MainContainer>
      <UserCard>
        <figure>
          <img
            src="https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg"
            alt=""
          />
        </figure>
        <UserInfos>
          <TitleAndDescription>
            <header className="title">
              <h3>Cameron Willianson</h3>
              <a href="">
                Github
                <FaArrowUpRightFromSquare size={12} />
              </a>
            </header>
            <p className="description">
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </TitleAndDescription>
          <FooterCard>
            <div className="icons">
              <FaGithub size={18} />
              cameronvwll
            </div>
            <div className="icons">
              <FaBuilding size={18} />
              Rocketseat
            </div>
            <div className="icons">
              <FaUserGroup size={18} />
              32 seguidores
            </div>
          </FooterCard>
        </UserInfos>
      </UserCard>

      <SearchSection>
        <SearchTitle>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </SearchTitle>
        <SearchInput type="search" name="post" placeholder="Buscar conteúdo" />
      </SearchSection>

      <GridPostCard>
        {Array.from({ length: 10 }).map((item, i) => (
          <PostCard key={i} />
        ))}
      </GridPostCard>
    </MainContainer>
  )
}
