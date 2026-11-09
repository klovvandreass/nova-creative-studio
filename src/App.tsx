import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from './Home'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import ProjectDetail from './ProjectDetail'
import Contact from './Contact'
import NotFound from './NotFound'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:slug" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
