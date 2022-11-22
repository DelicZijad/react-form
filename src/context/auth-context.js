import React from 'react'

const AuthContext=React.createContext({
  valids:[],
  formIsValid:'',
formHandler:()=>{},
inputHandler:()=>{},
valueHandler:()=>{}
})




export default AuthContext;