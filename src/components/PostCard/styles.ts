import styled from 'styled-components'

export const PostCardContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border-radius: 10px;
  background: ${(p) => p.theme['base-post']};
  padding: 2rem;
  line-height: 160%;
  border: 2px solid transparent;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(p) => p.theme['base-label']};
  }

  .title {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(p) => p.theme['base-title']};
      width: 70%;
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(p) => p.theme['base-span']};
    }
  }

  .description {
    display: -webkit-box;
    color: ${(p) => p.theme['base-text']};
    font-size: 1rem;
    font-weight: 400;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
