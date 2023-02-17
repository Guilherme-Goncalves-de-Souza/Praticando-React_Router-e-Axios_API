import './App.scss'

import { Routes, Route, Link, NavLink} from 'react-router-dom'

import TodosAlbums from './pages/TodosAlbums'
import UmAlbum from './pages/UmAlbum'
import UmaPhoto from './pages/UmaPhoto'
import Sobre from './pages/Sobre'

const base_url = 'https://jsonplaceholder.typicode.com/albums'

function App() {
  return (
    <div className='App'>
      <header>
        <h3>
          <Link to='/'> Álbum </Link>
        </h3>
        <nav>
          <ul>
            <li>
              <NavLink to='/'> Início </NavLink>
              <NavLink to='/sobre'> Sobre </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={ <TodosAlbums url={base_url} /> }/>
          <Route path='/:id' element={ <UmAlbum url={base_url}/> } />
          <Route path='/photos/:id' element={ <UmaPhoto /> } />
          <Route path='/sobre' element={ <Sobre /> } />
        </Routes>
      </main>

      <footer>
        <p>Criado por: 
          <a 
            href="https://github.com/Guilherme-Goncalves-de-Souza"
            target='_blank'>
            Guilherme Gonçalves de Souza 
          </a>
            
          </p>
      </footer>
    </div>
    
  )
}

export default App
