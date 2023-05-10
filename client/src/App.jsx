import { useAppcontext } from "./context/appcontext"

function App() {

  const {name} = useAppcontext()

  return (
    <>
      <p>App</p>
      <p>{name}</p>
    </>
  )
}

export default App
