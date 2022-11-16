import './App.css'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'

function App () {
  return (
    <div className='App'>
  
      <>
        <Cards
          characters={characters}
        />
      </>
      
      <>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </>
    </div>
  )
}

export default App
