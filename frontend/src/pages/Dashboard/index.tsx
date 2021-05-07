import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

const Dashboard = () => {   //mesma coisa se usar a funcao no lugar
    return (
    <>
    <NavBar />
    <div className="container">
        <h1 className="text-primary py-3 mb-5"> DashBoard de Vendas </h1>

      <div className="row px-3">

          <div className="col-sm-6">
            <h4 className="text-center text-secondary"> Taxa de Sucesso (%) </h4>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h4 className="text-center text-secondary"> Todas Vendas </h4>
            <DonutChart />
          </div>
      </div>

      <div className="py-3">
        <h2 className="text-primary"> Todas Vendas </h2>
      </div>

      <div className="mb-5">
      <DataTable />
      </div>

    </div>
    <Footer />    
    </>

    );
}

export default Dashboard;