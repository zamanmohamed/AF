import React, { Component } from 'react';
import RevNavbar from "../RevNavbar";

import RevNewWorkshopDescription from './RevNewWorkshopDescription';
import RevNewWorkshopTable from './RevNewWorkshopTable';

import RevFooter from '../RevFooter';


//all worshop proposals
export default class RevNewWorkshops extends Component {

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
                <RevNewWorkshopDescription/>
                <RevNewWorkshopTable/>
                <RevFooter/>
                </div>
            </div>
        )
    }
}

