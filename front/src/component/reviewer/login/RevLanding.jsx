import React, { Component } from 'react';
import { withRouter } from 'react-router';


class RevLanding extends Component {

    onSubmit=(e)=>{
        this.props.history.push(`/rev/login`)
    }

    render() {
        return (
            <div >
                <div>
                    <form  onSubmit={this.onSubmit}>
                        <h1>Landing Page</h1>
                        <button className="btn btn-lg btn-primary btn-block">Start</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(RevLanding);


