import React, { Component } from 'react';
import axios from 'axios';


export default class RevHomeSummary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Underpapers:[],
            ReviewedPapers:[],
            Underworkshops:[],
            Reviewedworkshops:[]
            
        }
    }

    componentDidMount(){
        this.retreveReviewedPapers();
        this.retreveUnderReviewedPapers();
        this.retreveReviewedWorkshops();
        this.retreveUndrReviewedWorkshops();
    }

    retreveReviewedPapers(){
        axios.get("http://localhost:8000/rev/researchpaper/reviewed").then(res =>{
            if(res.data.success){
                this.setState({
                    ReviewedPapers:res.data.ReviewedPapers
                });
            }

        });
    }

    retreveUnderReviewedPapers(){
        axios.get("http://localhost:8000/rev/researchpaper/underreview").then(res =>{

            if(res.data.success){
                this.setState({
                    Underpapers:res.data.Underpapers
                });
            }

        });
    }

    retreveUndrReviewedWorkshops(){
        axios.get("http://localhost:8000/rev/workshopproposal/underreview").then(res =>{

            if(res.data.success){
                this.setState({
                    Underworkshops:res.data.Underworkshops
                });
            }

        });
    }

    retreveReviewedWorkshops(){
        axios.get("http://localhost:8000/rev/workshopproposal/reviewed").then(res =>{

            if(res.data.success){
                this.setState({
                    Reviewedworkshops:res.data.Reviewedworkshops
                });
            }

        });
    }

    render() {
        const countUnderReviewedPaper = this.state.Underpapers.length;
        const countReviewedPaper = this.state.ReviewedPapers.length;
        const countUnderReviewedWorkshop = this.state.Underworkshops.length;
        const countReviewedWorkshop = this.state.Reviewedworkshops.length;
        return (
            <div className="container">     

                <div className="row row-cols-1 row-cols-md-4">
                    <div className="col">
                        <div className="card text-white bg-dark border-primary">
                        <div className="w-100"  
                            style={{ 
                                backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
                                height : "25vh",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >  
                        <div className="card-header">
                        </div>    
                        </div>     
                        <div className="card-body">
                            <h5 className="card-title">New Comming Research Papers</h5>
                            <center>
                            <h1>{countUnderReviewedPaper}</h1>
                            </center>    
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-dark border-primary">
                        <div className="w-100"  
                            style={{ 
                                backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
                                height : "25vh",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >  
                        <div className="card-header">
                        </div>    
                        </div>  
                        <div className="card-body">
                            <h5 className="card-title">New Comming Workshop Proposals</h5>
                            <center>
                            <h1>{countUnderReviewedWorkshop}</h1>
                            </center>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-dark border-primary">
                        <div className="w-100"  
                            style={{ 
                                backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
                                height : "25vh",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >  
                        <div className="card-header">
                        </div>    
                        </div> 
                        <div className="card-body">
                            <h5 className="card-title">Reviewed Research Papers</h5>
                            <center>
                            <h1>{countReviewedPaper}</h1>
                            </center>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-dark border-primary">
                        <div className="w-100"  
                            style={{ 
                                backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
                                height : "25vh",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                            }}
                        >  
                        <div className="card-header">
                        </div>    
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">Reviewed Workshop Proposals</h5>
                            <center>
                            <h1>{countReviewedWorkshop}</h1>
                            </center>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
