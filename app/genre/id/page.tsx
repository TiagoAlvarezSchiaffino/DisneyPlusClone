type Props = {
    params: {
        id: string
    },
    searchParams: {
        genre: string
    }
}

function genrePage({params: { id }, searchParams: { genre }}: Props) {
  return (
  <div>
    Welcome to the genre with ID: { id } and name: { genre }
  </div>
  )
}

export default genrePage
