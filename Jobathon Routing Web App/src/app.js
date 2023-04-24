import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Layout from './layouts/main'
import List from './layouts/list'
import Jobs from './pages/jobs'
import Detail from './pages/detail'
import Error from './pages/error'
import Help from './layouts/help'
import FAQ from './components/faq'
import Contact from './components/contact'
import NotFound from './pages/404'
import { listLoader, jobLoader } from './utils/loader'
import { response } from './utils/action'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = { <Layout /> }>
      <Route index element = { <Home /> } />
      <Route path = 'about' element = { <About /> } />
      <Route path = '/jobs' element = { <List /> } errorElement = { <Error /> }>
        <Route index element = { <Jobs /> } loader = { listLoader } />
        <Route path = ':id' element = { <Detail /> } loader = { jobLoader } />
      </Route>
      <Route path = 'help' element = { <Help /> }>
        <Route path = 'faq' element = { <FAQ /> } />
        <Route path = 'contact' element = { <Contact /> } action = { response } />
      </Route>
      <Route path = '*' element = { <NotFound /> } />
    </Route>
  )
)

function App() {
  return <RouterProvider router = { router } />
}

export default App