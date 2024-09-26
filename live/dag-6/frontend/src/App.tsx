import { useState } from "react"
import Grid from "./components/Grid"
import Total from "./components/Total"
import { Student } from "./components/types"

const initialStudent = [
  { id: "1", name: "Ola Normann" },
  { id: "2", name: "Kari Normann" },
]

// const [students, setStudents] = useState<StudentProp[]>(props.students ?? [])

function App() {
  // ?? means if initialStudent is null or undefined, then use the value after ?? (in this case an empty array)
  const [students, setStudents] = useState<Student[]>(initialStudent ?? [])

  // logikken under er avhengig av state, så kan flyttes til app.tsx
  const onAddStudent = (student: { name: string }) => {
    // one liner under gjøres for å legge til en ny student i listen av studenter, dette for å unngå å mutere state direkte (students.push) og dermed unngå at React ikke oppdager endringen og dermed ikke rerender komponenten (Grid) som er avhengig av students state.
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }])
  }
  return (
    <main>
      {/* <Student name="Marius" id="123" /> */}
      <Grid students={students} onAddStudent={onAddStudent} />
      <Total total={students.length} />
    </main>
  )
}

export default App
