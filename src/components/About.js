import { Component } from "react";

import UserClass from "./UserClass";
class About extends Component{
    constructor(props){
        super(props)

        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent Mount")
    }
    render(){
        console.log("parent render")
        return (
            
            <>
                
                <UserClass name={"first"}/>
                <UserClass name={"second"}/>
                <UserClass name={"third"}/>
            </>
        )
    }
}


export default About;