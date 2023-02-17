import DemoMode from "./components/DemoMode";
import PageLocation from "./components/PageLocation";
import VoiceBot from "./components/VoiceBot";



function App() {
  return (
    <div className="App">
      <VoiceBot />
      <DemoMode />
      <PageLocation />
    </div>
  );
}

export default App;
