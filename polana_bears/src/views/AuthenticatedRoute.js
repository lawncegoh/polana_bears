import {Navigate} from 'react-router-dom';
import Success from "./Success";

export default function AuthenticatedRoute() {

    const finishedPuzzle = false;

    return (
        finishedPuzzle ? 
        <Success/> : <Navigate to="/puzzles" />
    )
  }