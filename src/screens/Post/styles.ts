import styled from 'styled-components'

import { TitleAndDescription } from '../Home/styles'

export const TitlePost = styled(TitleAndDescription)`
  gap: 1.25rem;

  .title-post {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(p) => p.theme['base-title']};
  }
`

export const PostContentContainer = styled.section`
  padding: 2.5rem 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  color: ${(p) => p.theme['base-text']};
  text-align: center;
  justify-content: center;
  align-items: center;
`
