import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { OrderContainer } from './containers/OrderContainer';
import { Header } from './components/header';
import './App.scss';

const App = () => {
  return (
    <div className="main-wrapper">
        <Header />
        <Router>
            <Switch>
                <Route path="/" component={OrderContainer} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
