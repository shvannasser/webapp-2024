import Avatar from "./Avatar"
// as student for å rename til StudentProps, og da kan denne brukes hvor som helst i filen.
import { Student as StudentProps } from "./types"

// props = { id: 1, name: "Ola Nordmann" } er gammel variant ("Har ikke brukt det selv på 4 år").
// type er bare typene du definerer og props under er hvordan du bruker de.

// Ikke noe forskjell mellom type eller interface (Jeg peronlig bruker type).

export default function Student(props: StudentProps) {
  // const under deconstructer props som krever verdiene i studentProps og de gitte typene for hver verdi.
  const { id, name } = props

  // Lag en AddStudentForm for å legge til nye studenter. La den ta i mot en prop onAddStudent som skal trigges ved submit

  return (
    <div id='containerStudentNames'>
      <Avatar name={name} />
      <p className='student-name'>{name}</p>
    </div>
  )
}
