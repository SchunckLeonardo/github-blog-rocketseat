import styled from 'styled-components'

import BackgroundCover from '@/assets/cover-background.svg'

export const HeaderComponent = styled.header`
  width: 100%;
  height: 35vh;
  background: url(${BackgroundCover}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 0;
`
