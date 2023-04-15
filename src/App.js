import { useState } from 'react';
import './App.css';

function App() {
  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [role,setRole] = useState("");
  const [employe,setEmploye] = useState([]);

  function AddEmploye(){
    setEmploye([...employe,{id:id,name:name,role:role}])
    setId("");
    setName("");
    setRole("");
  }

  // function DeleteAll(){
  //   setEmploye([])
  // }
  function DeleteIndiv(id){
    const newemploye = employe.filter((e)=>e.id !== id)
    setEmploye(newemploye)
  }
  return (
    <div>
      <div className="container">
        <h2>CRUD Operation Task</h2>
        <input className="curd" type="number" placeholder='Enter Your Id...' 
        value={id} onChange={(e)=>setId(e.target.value)} />

        <input  className="curd" type="text" placeholder='Enter Your Name...'
        value={name} onChange={(e)=>setName(e.target.value)} />

        <input className="curd" type="text" placeholder='Enter Your Role...' 
        value={role} onChange={(e)=>setRole(e.target.value)}/>



        <button  className="curd" onClick={AddEmploye}>Add</button>
        <button  className="curd" onClick={()=> setEmploye([])}>Delete All</button>

        {
          employe.map((e,i)=>{
            return(
              <div key = {i}>
                  {`Employe Id : ${e.id}`} <button className="btn" onClick={()=>DeleteIndiv(e.id)}>X</button> <br/>
                  {`Employe Name : ${e.name}`} <br/>
                  {`Employe Role : ${e.role}`} <br/>
              </div>
            )
          })

        }
      </div>
    </div>
  );
}

export default App;
