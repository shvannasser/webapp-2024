import Grid from "./components/Grid"
// import Student from "./components/Student"

const students = [
  { id: "1", name: "Shvan" },
  { id: "2", name: "Mari" },
  { id: "3", name: "Marius" },
  { id: "4", name: "Mikkel" },
  { id: "5", name: "Morten" },
  { id: "6", name: "Mikael" },
]

function App() {
  return (
    <main>
      {/* Student er en komponent som tar inn to props, id og name.
      Student er card funksjon navnet */}
      {/* <Student name='Shvan' id='1' /> */}
      <Grid students={students} />
    </main>
  )
}

export default App
