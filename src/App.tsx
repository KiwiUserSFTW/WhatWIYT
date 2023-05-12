import AppMapsBar from "./components/AppBar";
import MapsPalete from "./components/Maps";
const App:React.FC = ():any => {
  return (
    <div className="App">
      <AppMapsBar />
      <MapsPalete />
    </div>
  );
}

export default App;
