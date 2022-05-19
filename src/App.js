import "./App.css";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <ClientContext>
        <AdminContext>
          <Navigation />
        </AdminContext>
      </ClientContext>
    </div>
  );
}

export default App;
