import Card from "./components/Card"
import { useState } from "react"

function App() {
  const [username, setUsername] = useState("Logget inn")
  // Best å kjøres som en boolean, hvordan blir usestate da når vi sette den til false?

  const LoggetUt = () => {
    setUsername("Logget ut")
  }

  const LoggetInn = () => {
    setUsername("Logget inn")
  }

  const produkter = [
    {
      id: "1",
      title: "Produkt 1",
      description: "Beskrivelse av produkt 1",
    },
    { id: "2", title: "Produkt 2", description: "Beskrivelse av produkt 2" },
    { id: "3", title: "Produkt 3", description: "Beskrivelse av produkt 3" },
  ]
  return (
    <section>
      <p>{username}</p>
      <button onClick={LoggetUt}>Logg ut</button>
      <button onClick={LoggetInn}>Logg inn</button>
      {/* ? betyr her at det er optional, bygg det hvis det er data her.  */}
      {produkter?.map((produkt) => (
        <Card
          key={produkt.id}
          title={produkt.title}
          description={produkt.description}
        />
      ))}
      {/* <Title title='Produkter' /> 
      <Title title='Medlemstilbud' /> */}
      {/* <Card title='CardTitle' description='CardDescription' />
      <Card title='CardTitle two' description='CardDescription two' /> */}
    </section>
  )
}
export default App
