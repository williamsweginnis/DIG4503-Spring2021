import CreateFilm from './components/CreateFilm';
import DeleteFilm from './components/DeleteFilm';
import ReadFilm from './components/ReadFilm';
import UpdateFilm from './components/UpdateFilm';
import './App.css';


function App() {
  return (
    <div>
      <h1>Favorite Film Stocks</h1>
    <div className="App">
      <div> <CreateFilm className="Create"/> </div>
      <div><UpdateFilm className="Update"/></div>
      <div><ReadFilm className="Read"/></div>
      <div><DeleteFilm className="Delete"/></div>
    
      
    </div>
    
    </div>
   
  );
}

export default App;
