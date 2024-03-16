import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import About from './About'
import Missing from './Missing'
import PostPage from './PostPage'
import { Route, Routes, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
        {/* <Route path="/">
          <Home />
        </Route>
        <Route path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/about" Component={About} />
        <Route path="*" Component={Missing} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
