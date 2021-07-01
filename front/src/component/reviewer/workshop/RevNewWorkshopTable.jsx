import React, { Component } from 'react';
import axios from 'axios';

export default class RevNewWorkshopTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Underworkshops:[]
        }
    }

    componentDidMount(){
        this.retreveWorkshops();
    }

    retreveWorkshops(){
        axios.get("http://localhost:8000/rev/workshopproposal/underreview").then(res =>{

            if(res.data.success){
                this.setState({
                    Underworkshops:res.data.Underworkshops
                });

                console.log(this.state.Underworkshops)
            }

        });
    }

    render() {
        return (
            <div className="container">
                <dev>
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
                    {this.state.Underworkshops.map((Underworkshops,index) =>(
                        <tr key={index}>
                            <th scope ="row">{index+1}</th>
                            <td>
                                <a href = {`/rev/workshopproposal/${Underworkshops._id}`} style = {{textDecoration:'none', color: 'white'}}>
                                {Underworkshops.wTitle}
                                </a>
                            </td>
                            <td>{Underworkshops.category}</td>
                            <td>{Underworkshops.wGoal}</td>     
                            <td>{Underworkshops.status}</td>                   
                            <td>
                                <a className ="btn btn-dark btn-sm btn-block" href ={`/rev/workshopproposal/update/${Underworkshops._id}`}>
                                    <i className = "fas fa-edit"></i>&nbsp;View
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <br/><br/><br/>
                </dev>
            </div>
        )
    }
}
