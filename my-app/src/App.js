import css from './App.module.css';
import Sidbar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/*<Sidbar link="My Photos"/>*/}
      {<NavBarSimple/>}
    </div>
  );
}

export default App;