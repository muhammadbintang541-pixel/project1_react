import './App.css';
import Labelnama from './componen/labelnama';
import Labelalamat from './componen/labelalamat';
import button1 from './componen/labelalamat';
function App() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <Labelnama nama="Bintang" />
      <Labelalamat alamat="jalan sawo"/>
      <button1/>
    </div>
  );
}

export default App;