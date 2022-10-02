import React from 'react'

export default function NewExpense(props) {

function add(){
    
    var list = localStorage.getItem("list")
    var name = document.getElementById("exName").value;
    var ammount = document.getElementById("exAmmount").value;
    
    var obj = [name,ammount,`${new Date()}`]
   
    

    if(!list){

        localStorage.setItem("list",JSON.stringify([obj]));


        
    }
    else{

        list = JSON.parse(list);
        list.push(obj);
        
        localStorage.setItem("list",JSON.stringify(list));
        

    }
    list = localStorage.getItem("list");

    props.show();
  
    
    
}
  return (
    <div className="d-flex justify-content-center flex-wrap">
        <div className="mx-2 my-3" >ADD Expense Name-<input type="text"  id="exName" /></div>
        <div className="mx-2 my-3">ADD Ammount in Rs-<input type="Number"  id="exAmmount" /></div>
        <button className="btn btn-primary mx-2 my-3" onClick={add}>Submit</button>
    </div>
  )
}
