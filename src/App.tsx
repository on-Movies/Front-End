import {StyledGlobal} from './styles/Global.ts';
import {Home} from './pages/Home';
import {Header} from './components/Header';

function App() {

  return (
        <>
            <StyledGlobal/>
            <Header/>
            <Home/>
        </>
  )
}

export default App
