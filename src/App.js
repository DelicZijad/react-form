import './App.scss';
import Heading from './comp/Heading';
import Form from './comp/Form';
import { useState ,useEffect,useReducer } from 'react';
import Modal from './comp/Modal';
import AuthContext from './context/auth-context';
function reducerFunc(state,action){
  let cond;

  if(action.id==="First Name" || action.id==="Last Name")cond=action.val.length>0;
  if(action.id==="Email Address")cond=action.val.includes('@');
if(action.id==="Password")cond=action.val.length>7;

return cond
}

function App() {
  const [formIsValid,setFormIsValid]=useState('/')
  const [openModal,setOpenModal]=useState(false)
const [firstName,dispatchFirstName]=useReducer(reducerFunc,'/')
const [lastName,dispatchLastName]=useReducer(reducerFunc,'/')
const [email,dispatchEmail]=useReducer(reducerFunc,'/')
const [password,dispatchPassword]=useReducer(reducerFunc,'/')
useEffect(()=>{
 setFormIsValid(email && lastName && firstName && password)
  },[email,lastName,firstName,password])
 
 function valueHandler(e){
  const id=e.target.id;
 const value=e.target.value
 if(id==='First Name'){
  dispatchFirstName({id:id,val:value})
 }
 if(id==='Last Name'){
  dispatchLastName({id:id,val:value})
 }
 if(id==='Email Address'){
  dispatchEmail({id:id,val:value})
 }
 if(id==='Password'){
  dispatchPassword({id:id,val:value})
 }
 }
 

  function formHandler(e){
    e.preventDefault()
  setOpenModal(true)
  }
  function closeModalHandler(){
    setOpenModal(false)
  }

  return (
    
   <AuthContext.Provider value={{
valids:[firstName,lastName,email,password],
formIsValid:formIsValid,
formHandler,
valueHandler

}} >
    <main className="App">
      <Modal openModal={openModal} 
      closeModalHandler={closeModalHandler}
      />
      <div className="container">
     <Heading/>
       <div className='main'>
        <div className="trial"><span className='trial--bold'>Try it free 7 days</span> then $20/mo. thereafter</div>
        <Form 
/>
    </div>
    </div>
    </main>
       </ AuthContext.Provider >
  );
}

export default App;

