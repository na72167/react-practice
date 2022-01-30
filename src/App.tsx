import { VFC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { About } from './views/About.tsx';
import { Users } from './views/Users.tsx';
import { Home } from './views/Home.tsx';
import { Header } from './layouts/Header.tsx';
import { Footer } from './layouts/Footer.tsx';

const App: VFC = () => {
  return (
    <BrowserRouter>
      <Header/>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Users" component={Users} />
          </Switch>
        </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
