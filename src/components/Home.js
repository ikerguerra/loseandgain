import NavigationBar from "./navigation-bar.js";
import PanelComidas from "./panel-comidas.js";
import PanelPrincipal from "./panel-principal.js";

const Home = () => {

  return (
    <div>
      <header>
        Semana 301
      </header>

      <h2>Mañana</h2>

      <PanelPrincipal />
      
      <PanelComidas />

      <NavigationBar />
    </div>
  );
};

export default Home;
