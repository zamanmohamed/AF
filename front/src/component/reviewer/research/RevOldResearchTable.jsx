import React, { Component } from 'react';
import axios from 'axios';

export default class RevOldResearchTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ReviewedPapers:[]
        }
    }

    componentDidMount(){
        this.retrevePapers();
    }

    retrevePapers(){
        axios.get("http://localhost:8000/rev/researchpaper/reviewed").then(res =>{

            if(res.data.success){
                this.setState({
                    ReviewedPapers:res.data.ReviewedPapers
                });

                console.log(this.state.ReviewedPapers)
            }

        });
    }

    render() {
        return (
            <div className="container">
            <table className="table table-dark table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Manuscript Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Abstract</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {this.state.ReviewedPapers.map((ReviewedPapers,index) =>(
                    <tr key={index}>
                        <th scope ="row">{index+1}</th>
                        <td>
                            <a href = {`/rev/researchpaper/${ReviewedPapers._id}`} style = {{textDecoration:'none', color: 'white'}}>
                            {ReviewedPapers.mTitle}
                            </a>
                        </td>
                        <td>{ReviewedPapers.category}</td>
                        <td>{ReviewedPapers.abstract}</td>     
                        <td>{ReviewedPapers.status}</td>                   
                        <td>
                            <a className ="btn btn-dark btn-sm btn-block" href ={`/rev/researchpaper/${ReviewedPapers._id}`}>
                                <i className = "fas fa-edit"></i>&nbsp;View
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <br/><br/><br/>
        </div>
        )
    }
}
