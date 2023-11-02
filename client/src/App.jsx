


import {Routes, Route,Navigate} from "react-router-dom"

import Home from "./home"
import NewPage from "./newPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
