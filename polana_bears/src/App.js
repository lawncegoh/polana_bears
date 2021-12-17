import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

//views
import Rarity from "./views/Rarity";
import LandingPage from "./views/LandingPage";
import Puzzles from "./views/Puzzles";
import MintForm from "./views/MintForm";

function App() {
  // const navigate = useNavigate();
  // const routeFailure = () => {
  //   navigate("/")
  // }
  return (
    <>
      <meta property="og:title" content="Polana Bears" />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/rarity" element={<Rarity />} />
          <Route exact path="/puzzles" element={<Puzzles />}/>
          <Route exact path='/success' element={<Puzzles />} />
          <Route exact path='/mintform' element={<MintForm />}/>
          {/* <Route exact path="/mintsnow" element={<MintSnow />}/> */}
          {/* <Route exact path="/wordpuzzle" element={<WordPuzzle />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;