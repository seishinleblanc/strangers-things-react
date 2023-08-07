import { useState } from 'react'
import './App.css'
import AllPosts from './components/AllPosts'
import SinglePost from './components/SinglePost'
import SignUpForm from './components/SignUpForm'
import Login from './components/Login'

import { Route, Routes } from 'react-router-dom'

function App() {
  const [ token, setToken ] = useState(null)

  return (
    <>
    <Routes>
      <Route path='/' element={<AllPosts />} />
      <Route path='/:name' element={<SinglePost />} />
      <Route path='/users/register' element ={ <SignUpForm setToken={setToken}/> } />
      <Route path ='/users/login' element={<Login token={token}/> } />
    </Routes>
      
    </>
  )
}

export default App
