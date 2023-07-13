import { Routes, Route } from 'react-router-dom'

import RegPage from './components/reg_page/index.jsx'
import StartPage from './components/start_page/index.jsx'

import Container from './Container.jsx'



function App() {
  return (
    <div className="App">

      <Container>
        <Routes>
            <Route path="/" element={<StartPage/>} />
            <Route path="/reg" element={<RegPage/>} />
            <Route path='/*' element={<><p>Wrong URL</p></>}/>
            <Route element={<><p>Page Not Founf</p></>}/>
        </Routes>
      </Container>

      {/* <RegPage/> */}

    </div>
  );
}

export default App;
