import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages & Components
import Home from './pages/Home'
import Navbar from './components/Nav'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;