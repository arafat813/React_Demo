import './App.css';
import { NavLink, useRoutes} from 'react-router-dom';
import routes from './routes';

function App() {
const element = useRoutes(routes)
  return (
    <div className="App">
      <div>
        <NavLink to='/about'>About</NavLink>
      </div>
      <div>
        <NavLink to='/home'>Home</NavLink>
      </div>
      <div>
        {element}
      </div>
    </div>
  );
}

export default App;
