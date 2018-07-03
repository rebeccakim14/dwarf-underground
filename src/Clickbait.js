import React, {Component} from 'react'

class Clickbait extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="small-6 medium-3 columns other-article">
            <a href="#">
              <img src={this.props.source} alt={this.props.alternate} />
              <p>{this.props.content}</p>
            </a>
          </div>
        )
    }
}
export default Clickbait;