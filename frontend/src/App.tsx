import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
        <h1 className="text-primary"> Ola mundo </h1>

        <DataTable />
    </div>
    <Footer />    
    </>
  );
}

export default App; //exportando a tag no arquivo index.tsx onde ele chama essa funçao para aparecer o que tem dentro
