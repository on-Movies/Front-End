import {StyledGlobal} from './styles/Global.ts';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Router} from './routes/routes.tsx';
import 'react-alice-carousel/lib/alice-carousel.css';

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
