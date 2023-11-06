import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import List from './componets/List';

function App() {

  const state = {
    todos:[
      {id: '001',name: '吃饭',done: true},
      {id: '002',name: '睡觉',done: true},
      {id: '003',name: '打豆豆',done: false}
    ]
  }


  return (
    <div className="App">
      <Header></Header>
      <List todos={state.todos}></List>
      <Footer></Footer>
    </div>
  );
}

export default App;
