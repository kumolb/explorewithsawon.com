import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import { Switch } from "react-router";
import './App.css';
import Layout from './App/Components/Layout/Layout';
import Home from './App/Containers/Home/Home';
import ListAll from './App/Containers/ListAll/ListAll';

// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
// } from "react-router-dom";
import Single from './App/Containers/Single/Single';

function App() {
  return (
    // <BrowserRouter>
    //   <Switch>
    //     {/* <Route exact path="/">
    //       <Home />
    //     </Route> */}
    //     <Route path="/users">
    //       <ListAll />
    //     </Route>
    //     <Route path="/users/:id">
    //       <Single />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <Layout>
      
    </Layout>
  );
}

export default App;
