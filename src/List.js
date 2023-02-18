const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <h4>
              {name}
              <p> {age} years</p>
            </h4>
          </article>
        )
      })}
    </>
  )
}

export default List
