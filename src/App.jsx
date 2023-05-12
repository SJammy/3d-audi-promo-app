import { useRef } from 'react'
import DisplaySection from './components/DisplaySection'
import Jumbotron from './components/Jumbotron'
import Nav from './components/Nav'
import DesignSection from './components/DesignSection'
import WebgiViewer from './components/WebgiViewer'
import Loader from './components/Loader'

function App() {
  const webgiViewerRef = useRef()
  const contentRef = useRef()

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview()
  }

  return (
    <div className='App'>
      <Loader />
      <div ref={contentRef} id='content'>
        <Nav />
        <Jumbotron />
        <DesignSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  )
}

export default App
