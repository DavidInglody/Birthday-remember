import data from "./data"
import {useState} from "react"
import List from "./List.jsx"

const App = () => {
  const [people, setPeople]= useState(data)

  return <main>
  <section className="container">
    <h1>{people.length} birthdays today</h1>
    <List people={people}/>
    <button className="btn btn-block"onClick={()=> setPeople([])}>Delete all</button>
    </section>
  </main>
};
export default App;
