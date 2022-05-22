import Container from "./components/Container";
import OrgansList from "./components/OrgansList/OrgansList";
import Homemimagem from "../public/assets/homem.jpeg";


function App(): JSX.Element {     
       return( <div className ="App">
            <Container className="container-image"> <img src={Homemimagem}  alt="" /></Container>
           <Container className="menu-container"><OrgansList></OrgansList></Container>
        </div>
       
  );
}

export default App;
