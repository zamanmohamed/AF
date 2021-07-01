import React, { Component } from 'react';

import RevHorLine from '../RevHorLine';

export default class RevNewResearchDescription extends Component {
    render() {
        return (
            <div className="container text-dark ">
            <div className="row d-flex justify-content-center">
              <h1>New Research papers</h1>
            </div>     
            <br/>
            <RevHorLine/>
            <br/>         
              <div className="row row-cols-1 row-cols-md-1 g-4">
                  <div className="col">
                      <div className="card text-white bg-dark border-primary">   
                      <div className="card-body">
                          <div className="row">
                              <div className="col-3">
                                  <h3>Instruction</h3>
                                  <hr className="hr-light"/>
                              </div>
                              <div className="col-9">
                                  <p>he reviews help the Executive Committee select which papers to accept and reject. ... Additionally, your reviews help the authors of papers make their papers and presentations stronger. Finally, your suggestions help the Program Chairs select the outstanding papers.
                                  SITE’s sole focus the integration of instructional technologies into teacher education programs. SITE promotes the development and dissemination of theoretical knowledge, conceptual research, and professional practice knowledge. While there are many related issues, papers on those issues should really only be included if they have some relevance to educational technology. Please review the conference Scope & Topics.
                                  </p>
                              </div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
              <br/>
              <RevHorLine/>
              <br/>
          </div>
        )
    }
}
