import Menu from "./components/Menu";
import OrgansList from "./components/OrgansList/OrgansList";



function App(): JSX.Element {     
       return( <div className ="App">
           <Menu><OrgansList></OrgansList></Menu>
        </div>
       
  );
}

export default App;
