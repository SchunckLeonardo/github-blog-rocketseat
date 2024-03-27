import { Route, Routes } from 'react-router-dom'

import { Home } from './screens/Home'
import { DefaultLayout } from './screens/layouts/DefaultLayout'
import { Post } from './screens/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:post" element={<Post />} />
      </Route>
    </Routes>
  )
}
