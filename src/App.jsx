import { MoviesGrid } from './moviesGrid'
import style from './index.css'
function App() {

  return (
     <div>
        <header className='header'>
            <h1>Peliculas</h1>
        </header>
        <main>
          <MoviesGrid/>
        </main>
    </div>
  )
}

export default App
