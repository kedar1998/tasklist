import { useAppcontext } from "./context/appcontext"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Task from "./pages/Task"
import Protectedroute from "./components/Protectedroute"
import Pagenotfound from "./components/Pagenotfound"


function App() {

  const {name} = useAppcontext()

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={
        <Protectedroute>
          <Task />
        </Protectedroute>
        } />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  )
}

export default App
