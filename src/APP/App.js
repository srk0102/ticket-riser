import './App.css';

//Getting Data from json File
import Data from '../CompanyData.json';

//Importing components from local folder
import { Login } from '../global'

function App() {
  return (
    <>
      <Login CompanyName={Data.Title} Logo={Data.SmallLogo}/>
    </>
  );
}

export default App;
