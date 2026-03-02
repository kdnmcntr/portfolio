import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Repetoire from './pages/Repetoire'
import About from './pages/About'

let routes = [
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {index: true, element: <Home/>},
      {path: "projects", element: <Projects/>},
      {path: "repetoire", element: <Repetoire/>},
      {path: "about", element: <About/>}
    ]
  },
]
const router = createBrowserRouter(routes)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
