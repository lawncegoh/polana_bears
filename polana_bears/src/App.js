import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

//views
import Rarity from "./views/Rarity";
import LandingPage from "./views/LandingPage";
import Puzzles from "./views/Puzzles";
import AuthenticatedRoute from './views/AuthenticatedRoute';
import Success from "./views/Success";

function App() {
  // const navigate = useNavigate();
  // const routeFailure = () => {
  //   navigate("/")
  // }
  const finishedPuzzle = useState(false);
  return (
    <>
      <meta property="og:title" content="Polana Bears" />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/rarity" element={<Rarity />} />
          <Route exact path="/puzzles" element={<Puzzles />}/>
          {/* <Route exact path="/success" render={() => (
            finishedPuzzle ? (
              // <Navigate to="/success" />
              console.log("success")
            ) : (
              <Puzzles />
            )
          )}/> */}
          <Route exact path='/success' element={<AuthenticatedRoute/>} />
          {/* <Route exact path="/success" element={<Success />}/> */}
          {/* <Route exact path="/mintsnow" element={<MintSnow />}/> */}
          {/* <Route exact path="/wordpuzzle" element={<WordPuzzle />}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;