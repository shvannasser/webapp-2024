type AvatarProps = {
  name: string
}

export default function Avatar(props: AvatarProps) {
  // Deconstruct the props
  const { name } = props

  //Extract the first letter of the name
  // const firstLetter = name.charAt(0).toUpperCase()
  const firstLetter = name
    // split fjerner mellomrom,
    .split(" ")
    //join setter sammen bokstavene,
    .join("")
    .toUpperCase()
    //slice tar første bokstav.
    .slice(0, 1)

  return <p className='avatar'>{firstLetter}</p>
}
