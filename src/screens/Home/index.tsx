import { useCallback, useEffect, useState } from 'react'
import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

import { PostCard } from '@/components/PostCard'
import { QueryResponse } from '@/context/GithubContext'
import { useGithub } from '@/hooks/useGithub'

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
  const [query, setQuery] = useState('')
  const [issues, setIssues] = useState<QueryResponse>()
  const { user, getAllIssues } = useGithub()
  const navigate = useNavigate()

  const handleGetIssues = useCallback(async () => {
    const response = await getAllIssues(query)
    setIssues(response)
  }, [getAllIssues, query])

  useEffect(() => {
    handleGetIssues()
  }, [handleGetIssues])

  return (
    <MainContainer>
      <UserCard>
        <figure>
          <img src={user?.avatar_url} alt="" />
        </figure>
        <UserInfos>
          <TitleAndDescription>
            <header className="title">
              <h3>{user?.name}</h3>
              <a target="_blank" href={user?.html_url} rel="noreferrer">
                Github
                <FaArrowUpRightFromSquare size={12} />
              </a>
            </header>
            <p className="description">{user?.bio}</p>
          </TitleAndDescription>
          <FooterCard>
            <div className="icons">
              <FaGithub size={18} />
              {user?.login}
            </div>
            <div className="icons">
              <FaBuilding size={18} />
              {user?.company}
            </div>
            <div className="icons">
              <FaUserGroup size={18} />
              {user?.followers} seguidores
            </div>
          </FooterCard>
        </UserInfos>
      </UserCard>

      <SearchSection>
        <SearchTitle>
          <h3>Publicações</h3>
          <span>{issues?.total_count} publicações</span>
        </SearchTitle>
        <SearchInput
          onBlur={(e) => setQuery(e.target.value)}
          type="search"
          name="post"
          placeholder="Buscar conteúdo"
        />
      </SearchSection>

      <GridPostCard>
        {issues?.items.map((issue) => (
          <PostCard
            key={issue.number}
            onClick={() =>
              navigate(`/${issue.number}`, {
                state: issue,
              })
            }
            {...issue}
          />
        ))}
      </GridPostCard>
    </MainContainer>
  )
}
