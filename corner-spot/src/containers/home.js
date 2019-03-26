import React from 'react'

class Home extends React.Component{

  state={
    userName:''
  }

  handleChange= event =>{
    this.setState({
      userName:event.target.value
    })
  }

  render(){
    return(
      <div className="splash">
        <form onSubmit={this.props.handleSubmit} className="form">
          <input type="text" placeholder="Enter Name" value={this.state.userName} onChange={this.handleChange}/>
          <input type="submit" value="Enter"/>
        </form>
      </div>
    )
  }
}

export default Home
