import Person from "./Person"

const List = ({people}) => {
  return <section>
        {people.map((onePerson)=>{
            return <Person key={onePerson.id} {...onePerson}/>
        })}
  </section>
}
export default List