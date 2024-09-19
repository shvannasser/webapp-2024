// ta imot parametere, i react caller vi dette props

type TitleProps = {
  title?: string
}

export default function Title(props: TitleProps) {
  const { title = "Default title" } = props
  return <h2>{title}</h2>
}
