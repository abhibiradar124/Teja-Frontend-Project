import { useState } from "react";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";

function App() {
  const [activeService, setActiveService] = useState(null);

  return (
    <DashboardLayout>
      {!activeService ? (
        <Home onSelectService={setActiveService} />
      ) : (
        <ServicePage
          type={activeService}
          onBack={() => setActiveService(null)}
        />
      )}
    </DashboardLayout>
  );
}

export default App;