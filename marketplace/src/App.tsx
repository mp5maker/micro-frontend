import React from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(() => import("landing/Header"));
import Footer from "landing/Footer";
import "./index.scss";

const COMPANY_NAME = "Texada";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <header>
      <h1>Market Place App</h1>
    </header>
    <React.Suspense fallback={<div>Header Loading ....</div>}>
      <Header companyName={COMPANY_NAME} />
    </React.Suspense>
    <Footer companyName={COMPANY_NAME} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
