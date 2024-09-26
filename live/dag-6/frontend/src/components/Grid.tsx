import { useState } from "react"
import Student from "./Student"
import type { Student as StudentProp } from "./types"
import AddStudentForm from "./AddStudentForm"

type GridProps = {
  students: StudentProp[]
}

export default function Grid(props: GridProps) {
  // props.students ?? []
  const [students, setStudents] = useState<StudentProp[]>(props.students ?? [])

  const onAddStudent = (student: { name: string }) => {
    // one liner under gjøres for å legge til en ny student i listen av studenter, dette for å unngå å mutere state direkte (students.push) og dermed unngå at React ikke oppdager endringen og dermed ikke rerender komponenten (Grid) som er avhengig av students state.
    setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }])
  }

  return (
    <section>
      <article className='grid'>
        {students.map((student) => (
          // key brukes for å gjøre at react klarer å vite og skille mellom elementene som lages. Dette er for å kunne vite hvilke elementer som er endret, lagt til eller fjernet. Dette er for å kunne oppdatere DOMen på en effektiv måte.
          <Student key={student.id} name={student.name} id={student.id} />
        ))}
      </article>
      <AddStudentForm onAddStudent={onAddStudent} />
    </section>
  )
}
