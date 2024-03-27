import LogoGithubBlog from '@/assets/logo-github-blog.svg'

import { HeaderComponent } from './styles'

export function Header() {
  return (
    <HeaderComponent>
      <figure>
        <img src={LogoGithubBlog} alt="Logo do Github Blog" />
      </figure>
    </HeaderComponent>
  )
}
