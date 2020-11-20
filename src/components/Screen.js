import React from 'react';

class Screen extends React.Component{
    render(){
        return(
            <div className="screen">
                <div className="output">
                    {this.props.data.input}
                </div>
            </div>
        )
    }
}


export default Screen;