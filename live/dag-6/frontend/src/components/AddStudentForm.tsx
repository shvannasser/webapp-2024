import { useState } from "react"

type AddStudentFormProps = {
  onAddStudent: ({ name }: { name: string }) => void
}

export default function AddStudentForm(props: AddStudentFormProps) {
  const { onAddStudent } = props
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // if name is empty, return early this saves us from adding an empty student to the list of students in the Grid component (students state) and thus avoid unnecessary rerendering of the Grid component and its children. This is because React will not rerender if the state is the same as before. This is a performance optimization.
    if (!name) return
    onAddStudent({ name })
    setName("")
  }

  return (
    <form onSubmit={handleSubmit} className='add-student-form'>
      <label htmlFor='name'>Navn</label>
      <input
        type='text'
        id='name'
        placeholder='Studentens navn'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type='submit'>Legg til student</button>
    </form>
  )
}
