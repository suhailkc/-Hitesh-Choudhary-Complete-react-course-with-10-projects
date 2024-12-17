import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Company from './components/About/Company.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about/' element={<About />}>
        <Route path='company' element={<Company />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>
      <Route loader={githubLoader} path='github' element={<Github />}/>
      <Route path='*' element={<div className='bg-orange-500 text-black text-3xl text-center py-5'>404</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
