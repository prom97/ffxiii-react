import './styles/App.css'
import Card from './components/Card'
import characters from './data/characters'

function App() {
  const characterList = characters.map(v => {
    return <Card key={v.id} title={v.name} img={v.img} description={v.description} jp_name={v.jp_name}/>
  })

  return (
      <div className="App">
        <h1>FFXIII: Personajes</h1>
        <div className="container">
          {characterList}
        </div>
      </div>
      
  )
}

export default App
