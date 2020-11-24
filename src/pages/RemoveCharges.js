import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
class RemoveCharges extends Component{
  constructor(){
    super();
    this.state={
      id:'',
    }
  }

  onChangedId = (event) =>{
    this.setState({
        id: event.target.value
    })
  }

  onSubmitHandler=(event)=>{
    event.preventDefault();
    const id=this.state.id
        axios.delete('http://localhost:8080/society/admin/charges/' + id)
        .then(resp =>{
          console.log(resp)
          alert('Charge removed Successfully!!')
        })
        .catch(error=>{
          console.log(error)
          alert('Something went wrong!')
        })
  }


    render(){
        return (
            <div>
            {/* NAVIGATION BAR */}
      <Navbar/>
      

                {/* TAKING INPUTS */}

             <div>
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <div className="form-group">
                    <label>Charge_Id</label>
                    <input value={this.id} onChange={this.onChangedId} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </input>
                    </div>
                    <button type="submit" className="btn btn-danger">Submit</button>
                </form>
            </div>
                  </div>

           
        );
    }
}

export default RemoveCharges;