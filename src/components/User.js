import { useState } from "react";

const User = (props)=>{
    const [count1 , setCount] = useState(1);
    const incrCount =()=>{
        
        setCount(count1 + 1);
    }
    

    return(
        <>
        <h1>Hello {props.name} from function</h1>
        <h2>*******Hooks**********</h2>
        <button onClick={()=>setCount(count1-1)}>DCR</button>
        <h3>Count1 = {count1}</h3>
        
        <button onClick={incrCount}>INC</button>
        </>
    )
}
export default User;