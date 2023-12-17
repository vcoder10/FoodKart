import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count1:1
        }
        console.log(this.props.name + "constructor")
    }
    // state ={
    //     count1: 1
    // }
    decrCount = ()=>{
        
        //this.setState function ke help se ek object bna ker update ker de rhe hai
        // alga se function bna lo ye callback function use ker lo
        this.setState({
            count1:  this.state.count1-1
        });
    }
    incrCount = ()=>{

        this.setState({
            count1:this.state.count1+1
        });
    }
    componentDidMount(){
        console.log(this.props.name + "Mount")
    }
    
    render(){
        console.log(this.props.name + "render")
        return(
            <>
            <h1>Hello {this.props.name} from class</h1>
            <h2>*******Hooks**********</h2>
            <button 
            onClick={
                ()=>{
                    this.state.count1= this.state.count1 -1
                  
                // this.setState({count1:this.state.count1-1})
            }
            
            }>
                DCR
            </button>
            <h3>Count1 ={this.state.count1} </h3>
          
            <button 
            onClick={this.incrCount}>
                INC
            </button>
            </>
        )  
        }
        
}

export default UserClass;