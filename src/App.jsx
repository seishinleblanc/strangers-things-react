import { useState } from 'react'
import './App.css'
import AllPosts from './components/AllPosts'
// import SinglePost from './components/SingePost'
import Login from './components/Login'
import SignUpForm from './components/SignUpForm'
import Dashboard from './components/Dashboard'
import MakePost from './components/MakePost'
import { Route, Routes, NavLink } from 'react-router-dom'

function App() {
  const [ token, setToken ] = useState('')

  return (
    <>
    <nav>
      <NavLink className="navBarLink" to='/home'>All Posts</NavLink>
      <NavLink className="navBarLink" to='/'>Login</NavLink>
      <NavLink className="navBarLink" to='/dash'>My Profile</NavLink>
      <NavLink className="navBarLink" to='/newlisting'>Sell Something!</NavLink>
      
    </nav>
    <Routes>
      <Route path ='/dash' element={<Dashboard token={token}/>}/>
      <Route path ='/signup' element={<SignUpForm setToken={setToken}/>}/>
      <Route path='/' element={<Login setToken={setToken} />}/>
      <Route path ='/home' element={<AllPosts />}/>
      <Route path='/newlisting' element={<MakePost token={token} />}/>
      {/* <Route path='/:name' element={<SinglePost />}/> */}
    </Routes>
    </>
  )
}

export default App

{/* <Routes>
  <Route path='/' element={<AllPosts />} />
  <Route path='/:name' element={<SinglePost />} />
  <Route path='/users/register' element ={ <SignUpForm setToken={setToken}/> } />
  <Route path ='/users/login' element={<Login token={token}/> } />
</Routes> */}