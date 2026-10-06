import './App.css';
import Labelnama from './componen/labelnama';
import Labelalamat from './componen/labelalamat';
function App() {
  return (
    <div className="App">
      <h1>profile</h1>
      <Labelnama nama="Bintang" />
      <Labelalamat alamat="jalan sawo"/>
    </div>
  );
}

export default App;