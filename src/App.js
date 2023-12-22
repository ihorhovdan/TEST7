import './App.css';
import AllMovies from './components/AllMovies';
import CommentArea from './components/CommentArea';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import SelectCategory from './components/SelectCategory';


function App() {
  return (
    <div>
      <header>
        <MyNavbar />
      </header>
      <main>
        <SelectCategory />
        <AllMovies />
        <CommentArea />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;
