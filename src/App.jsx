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
import { AboutPost } from './components/about/AboutPost'
import { Features } from './views/Features'
import { Filmmaking } from './views/Filmmaking'
import { VideosPost } from './components/video/VideoPost'
import { ShortStoryPost } from './components/blog/ShortStoryPost'
import { Video } from './views/Video'
import { Web } from './views/Web'
import { TvSeries } from './views/Tvseries'
import { ShortFilms } from './views/Shortfilms'
import { ShortStories } from './views/Shortstories'

const App = () => {

  const matchAbout = useMatch('/reel/:id')
  const aboutId = matchAbout ? matchAbout.params.id : null
  const matchFilms = useMatch('/films/:id')
  const filmsId = matchFilms ? matchFilms.params.id : null
  const matchVideos = useMatch('/videos/:id')
  const videoId = matchVideos ? matchVideos.params.id : null
  const matchBlog = useMatch('/blogs/:id')
  const blogId = matchBlog ? matchBlog.params.id : null
  const matchScript = useMatch('/screenplays/:id')
  const screenplayId = matchScript ? matchScript.params.id : null
  const matchShort = useMatch('/shortstories/:id')
  const shortId = matchShort ? matchShort.params.id : null
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
            <Route path="/features" element={<Features />} />
            <Route path="/tvseries" element={<TvSeries />} />
            <Route path="/shortfilms" element={<ShortFilms />} />
            <Route path="/shortstories" element={<ShortStories />} />
            <Route path="/filmmaking" element={<Filmmaking />} />
            <Route path="/video" element={<Video />} />
            <Route path="/web" element={<Web />} />
            <Route path="/films/:id" element={<FilmsPost filmsId={filmsId} />} />
            <Route path="/videos/:id" element={<VideosPost videoId={videoId} />} />
            <Route path="/reel/:id" element={<AboutPost aboutId={aboutId} />} />
            <Route path="/blogs/:id" element={<BlogPost blogId={blogId} />} />
            <Route path="/screenplays/:id" element={<ScreenPost screenplayId={screenplayId} />} />
            <Route path="/shortstories/:id" element={<ShortStoryPost shortId={shortId} />} />
            <Route path="/inless/:id" element={<InLessPost inLessId={inLessId} />} />
          </Routes>
        </ScrollToTop>
        <Contact />
      </ParallaxProvider>
    </div>
  )

}

export default App