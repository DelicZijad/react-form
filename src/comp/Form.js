import React ,{ useContext} from 'react'
import AuthContext from '../context/auth-context';
import error from '../images/icon-error.svg'
const Form = (props) => {
 const ctx= useContext(AuthContext);

    const types=['text','text','email','password']
    const txt=['First Name','Last Name','Email Address','Password']
    const msg=['first name cannot be empty','last name cannot be empty','looks like this is not an email','password must be min 8 characters long']
  return (
        <div className="formWrapper">
    <form className='form' onSubmit={ctx.formHandler}>
   {types.map((type,i)=> (
    <>
   <div key={i} className='form--control'><input onKeyDown={(e)=>{
    setTimeout(()=>ctx.valueHandler(e),300)
   }
    } onBlur={ctx.inputHandler} type={type} key={i+3} id={txt[i]} placeholder={txt[i]} className={`form--input ${ctx.valids[i]===false?'redClr':''}`}/>
   <div key={i+11} className={`form--error ${ctx.valids[i]===false?'':'hide'}`}><img src={error} alt="!!!" /></div>
   </div>
   <p key={i+7} className={`form--msg ${ctx.valids[i]===false?'':'hide'}`}>{msg[i]}</p>
   </>
   )
)}
<input onClick={ctx.formHandler} disabled={ctx.formIsValid ===true?false:true} type="submit" className='form--sub' value="Claim your free trial" style={{cursor:ctx.formIsValid===true?'pointer':'not-allowed'}} />
    </form>
    <p className="form--terms">
  By clicking the button, you are agreeing to our <a href='#' className='form--bold'>Terms and Services</a></p>
    </div>
    )
      
 
}

export default Form