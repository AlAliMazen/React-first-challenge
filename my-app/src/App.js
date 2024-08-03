import css from './App.module.css';
import Sidbar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      {<Sidbar link="My Photos"/>}
    </div>
  );
}

export default App;