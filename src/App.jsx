import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display'
import {Router,navigate} from '@reach/router';


const cats = ["people","planets"]

function App() {

  const [jedis,setJedis] = useState("");
  // const [cats] = useState ([""]);
  const [category,setCategory] = useState(cats[0]);


  // const getJedis = () => {
  //   Axios.get("https://swapi.dev/api/")
  //     .then(res => setJesdis(res.data.all))
  //     .catch(err => console.log(err))
  // }

  const handleQuery = e => {
    e.preventDefault();
    navigate(`/${category}/${jedis}`);
    setCategory(cats[0]);
    setJedis("");
  }

  return (
    <div className="App">
      <form className="col-3 mx-auto p-3" onSubmit={handleQuery}>
        <div className="form-group">
          <select value={category} className="form-control" onChange={(e) => setCategory(e.target.value)}>
            {
              cats.map((jedis,i) => <option value={jedis} key={i}>{jedis}</option>)
            }
          </select>
        </div>
        <div className="form-group">
          <label>ID</label>
          <input className="form-control" type="text" value={jedis} onChange={(e) => setJedis(e.target.value)}/>
        </div>
        <input type="submit" value="Get Jedis" className="btn btn-primary"/>
      </form>
      <Router>
        <Display path="/:category/:amount"></Display>
      </Router>
    </div>
  );
}

export default App;
