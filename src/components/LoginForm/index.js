import React,{useState} from 'react';
import f from './style.module.css';
const LoginForm = ({onSubmit,registry, handleRegisry}) => {
    const [email, setemail] = useState('');
    const [password, setpass] = useState('');
console.log('registry',registry);

const handlSubmit =  (e) => {
    e.preventDefault();
    
    onSubmit && onSubmit({email,password}); 
    setemail('');
    setpass('');
}

return(
<form onSubmit={handlSubmit}>
   
<div className={f.root}>
  <input type="text" className={f.input} name='email' onChange={(e)=> setemail(e.target.value)} value={email} required />
  <span className={f.highlight}></span>
  <span clasNclassNames={f.bar}></span>
  <label className={f.label}>Email</label>
</div>

<div className={f.root}>
  <input  className={f.input} type='password' name='password' label="Password" onChange={(e)=> setpass(e.target.value)} 
    value={password} required/>
  <span className={f.highlight}></span>
  <span className={f.bar}></span>
  <label className={f.label}>password</label>
</div>
<div className={f.groop}>
<button className={f.button}>{
  registry?'SIGNUP':"SIGNIN"
}</button> 
 <button className={f.registr} onClick={handleRegisry}> {
   registry? 'log in?':'register?'
 }
 
 </button></div>
</form>

)
}
export default LoginForm;