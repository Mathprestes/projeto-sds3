import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
        <h1 className="text-primary py-3"> DashBoard de Vendas </h1>

      <div className="row px-3">

          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> Taxa de Sucesso (%) </h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary"> Todas Vendas </h5>
            <DonutChart />
          </div>
      </div>

      <div className="py-3">
        <h2 className="text-primary"> Todas Vendas </h2>
      </div>

        <DataTable />

    </div>
    <Footer />    
    </>
  );
}

export default App; //exportando a tag no arquivo index.tsx onde ele chama essa funçao para aparecer o que tem dentro
