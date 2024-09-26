import { useState } from "react"
import Avatar from "./Avatar"
import type { Student as StudentProps } from "./types"

export default function Student(
  // & er en union type som gjør at vi kan kombinere flere typer til en type. I dette tilfellet kombinerer vi StudentProps og et objekt med en funksjon onRemoveStudent som tar inn en string.
  props: StudentProps & {
    onRemoveStudent: (id: string) => void
  }
) {
  const { id, name, onRemoveStudent } = props

  const [showRemove, setShowRemove] = useState(false)

  // Implementer funksjonalitet for å vise “delete knapp” når vi tar musen over Student komponenten. Knappen skal slette studenten fra listen av studenter.

  const updateShowState = () => {
    setShowRemove(true)
  }

  return (
    <div
      onMouseOver={updateShowState}
      onMouseLeave={() => setShowRemove(false)}
    >
      <Avatar name={name} />
      <p className='student-name'>{name}</p>
      {showRemove ? (
        <button type='button' onClick={() => onRemoveStudent(id)}>
          Slett
        </button>
      ) : null}
    </div>
  )
}
