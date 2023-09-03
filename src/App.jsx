/* eslint-disable no-undef */
import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import { BlogPost } from './components/blog/BlogPost'
import { Landing } from './views/Landing'
import ScrollToTop from './ScrollToTop'
import { ParallaxProvider } from 'react-scroll-parallax'

import { ScreenPost } from './components/blog/ScreenPost'
import { InLessPost } from './components/blog/InLessPost'
import { FilmsPost } from './components/video/FilmsPost'
import { About } from './views/About'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import Screenplay from './views/Screenplay'

const App = () => {

  const matchFilms = useMatch('/films/:id')
  const filmsId = matchFilms ? matchFilms.params.id : null
  const matchBlog = useMatch('/blogs/:id')
  const blogId = matchBlog ? matchBlog.params.id : null
  const matchScript = useMatch('/screenplays/:id')
  const screenplayId = matchScript ? matchScript.params.id : null
  const matchInLess = useMatch('/inless/:id')
  const inLessId = matchInLess ? matchInLess.params.id : null

  return (

    <div className="App w-screen box-border overflow-hidden min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <ParallaxProvider>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/screenplay" element={<Screenplay />} />
            <Route path="/films/:id" element={<FilmsPost filmsId={filmsId} />} />
            <Route path="/blogs/:id" element={<BlogPost blogId={blogId} />} />
            <Route path="/screenplays/:id" element={<ScreenPost screenplayId={screenplayId} />} />
            <Route path="/inless/:id" element={<InLessPost inLessId={inLessId} />} />
          </Routes>
        </ScrollToTop>
        <Contact />
      </ParallaxProvider>
    </div>
  )

}

export default App