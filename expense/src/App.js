import "./App.css";
import NewExpense from "./components/NewExpense";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

 
  let show = () => {

    
    var box = document.getElementById("box")

    var list = localStorage.getItem("list");
    if (!list) {
      box.innerHTML = "No Transactions For this Month Found";

    }

    else {
      list = JSON.parse(list);
      
      let n = parseInt(list.length)-1;
  
      var date1 = new Date(list[0][2])
      var date2 = new Date(list[n][2]);
  
      var Difference_In_Time = date2.getTime() - date1.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

      while(Difference_In_Days>31){
        list.pop(0);
        date1 = new Date(list[0][2])
        Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        
        n-=1;
        if(n===0){
          break;
        }

      }
      localStorage.setItem("list",JSON.stringify(list));
      var div = ''

    if(n<0){
      box.innerHTML = "No Transactions For this Month Found";
      return;
    }

      for (let item of list.reverse()) {
        div += `
        <div class="item">${item[0]}</div>
        <div class="item">${item[1]}</div>
        <div class="item">${item[2].slice(0, 24)}</div>`
      }
      document.getElementById("box").innerHTML = div;
    }
  }




  return (
    <Router>
      <p
        style={{
          color: "red",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Expense tracker app
      </p>
      <div className="buttons">
        <Link className="btn btnhome btn-outline-primary" to="/newExpense">Add new Transaction</Link>
        <button className="btn btnhome btn-outline-secondary"  onClick={show}>See Transaction History</button>
      </div>

      <Routes>

        <Route path="/newExpense" element={<NewExpense show={show} />} />



      </Routes>

      <div id="box-1">
        <div className="item"><h3>Name</h3></div>
        <div className="item"><h3>Money</h3></div>
        <div className="item"><h3>Date</h3></div>
      </div>
      <div id="box">
        click see transaction button to get your previous transactions

      </div>
    </Router>
  );
}

export default App;
