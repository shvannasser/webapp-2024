import Title from "./Title"

type cardProps = {
  title: string
  description: string
}

export default function Card(props: cardProps) {
  const { title = "Default title", description = "Default description" } = props
  return (
    <article>
      {/* <h2>{title}</h2> */}
      <Title title={title} />
      <p>{description}</p>
    </article>
  )
}
