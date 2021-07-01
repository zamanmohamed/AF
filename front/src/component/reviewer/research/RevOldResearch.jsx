import React, { Component } from 'react';
import RevNavbar from "../RevNavbar";
import RevOldResearchTable from './RevOldResearchTable';
import RevOldResearchDescription from './RevOldResearchDescription';

import RevFooter from '../RevFooter';



//Old Researchs
export default class RevOldResearchs extends Component {

    render() {
        return (
            <div>
                <div>
                    <RevNavbar/>
                </div>
                <div className="w-100 h-100"
      
                    style={{ 
                        backgroundImage: `url("https://image.freepik.com/free-photo/man-is-sitting-laptop-dark-office_85574-2201.jpg")` ,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",                   
                    }}
                >
                    <br/>
                 <RevOldResearchDescription/> 
                 <RevOldResearchTable/>       
                 <RevFooter/>
                </div>
            </div>
        )
    }
}

