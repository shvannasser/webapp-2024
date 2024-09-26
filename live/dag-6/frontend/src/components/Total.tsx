type TotalProps = {
  total: number
}

//Readonly er en TypeScript type som gjør at objektet som blir sendt inn som prop ikke kan muteres/endres. Dette er en god praksis for å unngå utilsiktede endringer i props.
export default function Total(props: TotalProps) {
  const { total } = props
  // Hvis total er 0, returner null. Dette er for å unngå at det vises 0 studenter i klassen. Hvis det er 0 studenter i klassen, så skal det ikke vises noe.
  if (total === 0) return null

  return <div>Total students: {total}</div>
}

//Lag en Total komponent som skal vises i App.tsx
// Total skal skrive ut hvor mange studenter som er i klasselisten (Løfte state ut av Grid).
//Total tar i mot total som prop. Gjør nødvendige endringer for at dette skal fungere.
