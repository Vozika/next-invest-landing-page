import "./App.scss";
import { Footer, CTA, Graph, Offerings, Header } from "./containers";

function App() {
  return (
    <div className="App">
      <Header />
      <Offerings />
      <Graph />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
