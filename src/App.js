import React, {Component} from 'react';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Footer from './components/Footer';

class App extends Component {
    render () {
        return (
            <>
              <Home/>
              <Services />
              <Portfolio />
              <Footer />
          </>
        );
    }
}

export default App;