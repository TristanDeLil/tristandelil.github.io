import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BlogPost from './pages/BlogPost.jsx'
import StatusBar from './components/StatusBar.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <StatusBar />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
