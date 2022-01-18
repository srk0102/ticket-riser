import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';

//Getting Data from json File
import Data from '../CompanyData.json';

//Importing components from local folder
import { Login, SignUp, Dashboard, Landing } from '../global'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/login"
            element={<Login CompanyName={Data.Title} Logo={Data.SmallLogo} />}
          />
          <Route
            path="/signup"
            element={<SignUp CompanyName={Data.Title} Logo={Data.SmallLogo} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
