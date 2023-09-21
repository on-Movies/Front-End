import {StyledGlobal} from './styles/Global.ts';
import {Home} from './pages/Home';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

function App() {

  return (
        <>
            <StyledGlobal/>
            <Header/>
            <Home/>
            <Footer/>
        </>
  )
}

export default App
