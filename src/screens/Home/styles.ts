import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 0 20%;
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
`

export const UserCard = styled.div`
  border-radius: 10px;
  background: ${(p) => p.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  top: -100px;

  padding: 2rem 2.5rem;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: ${(p) => p.theme['base-title']};
      font-size: 1.5rem;
      font-weight: 700;
    }

    a {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: ${(p) => p.theme.blue};
      text-transform: uppercase;
      border-bottom: 1px solid transparent;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid ${(p) => p.theme.blue};
      }
    }
  }

  .description {
    color: ${(p) => p.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`

export const FooterCard = styled.footer`
  display: flex;
  gap: 1.5rem;

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: ${(p) => p.theme['base-subtitle']};

    svg {
      color: ${(p) => p.theme['base-label']};
    }
  }
`

export const SearchSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 160%;

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(p) => p.theme['base-subtitle']};
  }

  span {
    color: ${(p) => p.theme['base-span']};
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${(p) => p.theme['base-border']};
  background: ${(p) => p.theme['base-input']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  color: ${(p) => p.theme['base-text']};

  &:focus {
    border: 1px solid ${(p) => p.theme.blue};
  }

  &::placeholder {
    color: ${(p) => p.theme['base-label']};
  }
`

export const GridPostCard = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 416px);
  margin-top: 3rem;
  justify-content: space-evenly;
`
