import React, { Suspense, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { CountContext } from './context'
//import { Dashboard } from './components/Dashboard'
//import { Landing } from './components/Landing'

// const Dashboard = React.lazy(() => import('./components/Dashboard'))
// const Landing = React.lazy(() => import('./components/Landing'))

// function App() {

//   return (
//     <div>
//       <BrowserRouter>
//         <AppBar />
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>}></Route>
//           <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function AppBar() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <button onClick={() => {
//         navigate("/")
//       }}>Landing Page</button>
//       <button onClick={() => {
//         navigate("/dashboard")
//       }}>Dashboard</button>
//     </div>
//   )
// }

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
          <Count count={count} setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount}/>
    </div>
  )
}

function CountRenderer() {
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease</button>
    </div>
  )
}

export default App
