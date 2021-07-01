import React, { Component } from 'react';
import axios from 'axios';

export default class RevHomeLatestReview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            papers:[],
            workshops:[]
        }
    }

    componentDidMount(){
        this.retrevePapers();
    }

    retrevePapers(){
        axios.get("http://localhost:8000/rev/researchpaper/last/_id").then(res =>{

            if(res.data.success){
                this.setState({
                    papers:res.data.existingPapers
                });

                console.log(this.state.papers)
            }

        });

        axios.get("http://localhost:8000/rev/workshopproposal/last/_id").then(res =>{

            if(res.data.success){
                this.setState({
                    workshops:res.data.existingWorkshops
                });

                console.log(this.state.workshops)
            }

        });
    }

    render() {
        return (
            <div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card text-white bg-dark border-primary">
                        <div className="w-100"  
                            style={{ 
                                backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
                                height : "50vh",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >  
                        <div className="card-header">
                        </div>    
                        </div>    
                        <div className="card-body">
                        <div className="container">
                        <h1 className="card-title">Last Research Paper</h1>
                                    {this.state.papers.map((papers) =>(
                                        <div>
                                        <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                <h4>m Title:</h4>
                                                </td>
                                                <td>
                                                <h5>{papers.mTitle}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <h4>Category:</h4>
                                                </td>
                                                <td>
                                                <h5>{papers.category}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <h4>Abstract:</h4>
                                                </td>
                                                <td>
                                                <h5>{papers.abstract}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <h4>Keywords:</h4>
                                                </td>
                                                <td>
                                                <h5>{papers.keyword}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <h4>Author:</h4>
                                                </td>
                                                <td>
                                                <h5>{papers.author}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <h4>PLink:</h4>
                                                </td>
                                                <td>
                                                <a href={papers.photo}>View Pdf</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <h4>Status:</h4>
                                                </td>
                                                <td>
                                                <h5>{papers.status}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <h4>Date:</h4>
                                                </td>
                                                <td>
                                                <h5>{papers.date}</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                        </table>    
                                        </div>                        
                                    ))}
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-dark border-primary">
                        <div className="w-100"  
                            style={{ 
                                backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
                                height : "50vh",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >  
                        <div className="card-header">
                        </div>    
                        </div> 
                        <div className="card-body">
                        <div className="container">
                        <h1 className="card-title">Last Workshop Proposal</h1>
                                {this.state.workshops.map((workshops) =>(
                                        <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                    <h4>wTitle:</h4>
                                                    </td>
                                                    <td>
                                                    <h5>{workshops.wTitle}</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    <h4>Category:</h4>
                                                    </td>
                                                    <td>
                                                    <h5>{workshops.category}</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    <h4>wGoal:</h4>
                                                    </td>
                                                    <td>
                                                    <h5>{workshops.wGoal}</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    <h4>status:</h4>
                                                    </td>
                                                    <td>
                                                    <h5>{workshops.status}</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    <h4>date:</h4>
                                                    </td>
                                                    <td>
                                                    <h5>{workshops.date}</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    <h4>PLink:</h4>
                                                    </td>
                                                    <td>
                                                    <a href={workshops.ppLink}>View presentation</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    <h4>tAudiance:</h4>
                                                    </td>
                                                    <td>
                                                    <h5>{workshops.tAudiance}</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                    <h4>pName:</h4>
                                                    </td>
                                                    <td>
                                                    <h5>{workshops.pName}</h5>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>    
                                        </div>                        
                                    ))}
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}
