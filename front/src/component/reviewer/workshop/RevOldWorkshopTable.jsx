import React, { Component } from 'react'
import axios from 'axios';

export default class RevOldWorkshopTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Reviewedworkshops:[]
        }
    }

    componentDidMount(){
        this.retreveWorkshops();
    }

    retreveWorkshops(){
        axios.get("http://localhost:8000/rev/workshopproposal/reviewed").then(res =>{

            if(res.data.success){
                this.setState({
                    Reviewedworkshops:res.data.Reviewedworkshops
                });

                console.log(this.state.Reviewedworkshops)
            }

        });
    }

    render() {
        return (
            <div className="container">
                <div>
                <table className="table table-dark table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Workshop Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Goal</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.Reviewedworkshops.map((Reviewedworkshops,index) =>(
                        <tr key={index}>
                            <th scope ="row">{index+1}</th>
                            <td>
                                <a href = {`/rev/workshopproposal/${Reviewedworkshops._id}`} style = {{textDecoration:'none', color: 'white'}}>
                                {Reviewedworkshops.wTitle}
                                </a>
                            </td>
                            <td>{Reviewedworkshops.category}</td>
                            <td>{Reviewedworkshops.wGoal}</td>     
                            <td>{Reviewedworkshops.status}</td>                   
                            <td>
                                <a className ="btn btn-dark btn-sm btn-block" href ={`/rev/workshopproposal/${Reviewedworkshops._id}`}>
                                    <i className = "fas fa-edit"></i>&nbsp;View
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <br/><br/><br/>
                </div> 
            </div>
        )
    }
}
