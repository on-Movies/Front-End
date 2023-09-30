import {StyledGlobal} from './styles/Global.ts';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Router} from './routes/routes.tsx';

function App() {

  return (
        <>
            <StyledGlobal/>
            <Header/>
            <Router/>
            <Footer/>
        </>
  )
}

export default App
