import React, { Component } from 'react'
import './Hitgame.css'
class Hitgame extends Component {
    constructor(){
        super();
        this.state={time:10,score:0}
    }
    handleClick(){
        if(this.state.time!=0){
        this.setState({
              score:this.state.score+1
        })
    }}
    handleClick1(){
        this.setState({
            time:10,
            score:0,
            message:''
        })
    }
    componentDidMount(){
        this.interval=setInterval(this.tick,1000);
    }
    tick=()=>{
        if(this.state.time==0)
        {
             this.setState({
                   message:"Enough I can't be beaten by you!!!",
                   
             })
           
        }
        
        else
        {
            this.setState({
                time:this.state.time-1,
            })
        }
    }
  render() {
    return (
      <div className='out'>
           <h1><u>Hit the bird game</u></h1>
           <br/>
           <p>Click the picture as many times as you can in {this.state.time} wacky seconds!</p>
            <img onClick={this.handleClick.bind(this)} src="https://www.bing.com/th/id/OGC.cf9315aa87f6b20272b05b7ec3059918?pid=1.7&rurl=https%3a%2f%2fi.gifer.com%2fZHug.gif&ehk=1AB3B7CrMBOdnq7YZ4LbHQy2%2fWLewyXe4P6dr9Nt8wQ%3d"/>
            <p className='score'>Score:{this.state.score}</p> 
            <p className='msg'>{this.state.message}</p> 
            
            <button onClick={this.handleClick1.bind(this)}>Restart</button>
      </div>
    )
  }
}

export default Hitgame