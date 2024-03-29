import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App(){
 //   const [isAuthenticated, userHasAuthenticated] = useState(false);

/*function handleLogout() {
  userHasAuthenticated(false);
}*/
  return(
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="BGC Toys" scroll>
    
            <Navigation>
                <Link to="/loja">Loja</Link>
                <Link to="/">Home</Link>
            </Navigation>
        </Header>
        <Drawer title="BGC Toys">
            <Navigation>
                <Link to="/loja">Loja</Link>
                <Link to="/">Home</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );

}

export default App;