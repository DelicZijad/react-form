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
  if(action.type="USER_INPUT") return {value:action.val,isValid:cond}
  if(action.type="INPUT_BLUR") return {value:action.val,isValid:cond}
return {value:'',isValid:''}
}

function App() {
  const [formIsValid,setFormIsValid]=useState('/')
  const [openModal,setOpenModal]=useState(false)
const [firstName,dispatchFirstName]=useReducer(reducerFunc,{value:'',isValid:'/'})
const [lastName,dispatchLastName]=useReducer(reducerFunc,{value:'',isValid:'/'})
const [email,dispatchEmail]=useReducer(reducerFunc,{value:'',isValid:'/'})
const [password,dispatchPassword]=useReducer(reducerFunc,{value:'',isValid:'/'})
useEffect(()=>{
 setFormIsValid(email.isValid && lastName.isValid && firstName.isValid && password.isValid)
  },[email.isValid,lastName.isValid,firstName.isValid,password.isValid])
 
 function valueHandler(e){
  const id=e.target.id;
 const value=e.target.value

 if(id==='First Name'){
  dispatchFirstName({type:"USER_INPUT",id:id,val:value})
 }
 if(id==='Last Name'){
  dispatchLastName({type:"USER_INPUT",id:id,val:value})
 }
 if(id==='Email Address'){
  dispatchEmail({type:"USER_INPUT",id:id,val:value})
 }
 if(id==='Password'){
  dispatchPassword({type:"USER_INPUT",id:id,val:value})
 }
 }
  function inputHandler(e){
const id=e.target.id;
 const value=e.target.value
 if(id==='First Name'){
  dispatchFirstName({type:"INPUT_BLUR",id:id,val:value})
 }
 if(id==='Last Name'){
  dispatchLastName({type:"INPUT_BLUR",id:id,val:value})
 }
 if(id==='Email Address'){
  dispatchEmail({type:"INPUT_BLUR",id:id,val:value})
 }
 if(id==='Password'){
  dispatchPassword({type:"INPUT_BLUR",id:id,val:value})
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
valids:[firstName.isValid,lastName.isValid,email.isValid,password.isValid],
formIsValid:formIsValid,
formHandler,
inputHandler,
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

