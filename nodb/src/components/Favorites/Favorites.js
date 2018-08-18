import React, {Component} from 'react';

class Favorites extends Component {
    constructor(props) {
        super();
        this.state = {
            userTitle: ''
        }
    }
    handleTextChange(event) {
        console.log(event.target.value);
        
        this.setState({
            userTitle: event.target.value
        })
    }
    render() {
        let { userTitle } = this.state;
        let { favMovie } = this.props;
        let { title, id} = favMovie;
        //Tiny image in list?
    return ( 
        <div>
            <div>
            <input type="text" value={userTitle} placeholder={title} onChange={(event) => this.handleTextChange(event)} />
            <button onClick={() => this.props.handleUpdate(id, userTitle)}>Rename</button>
            <button onClick={() => this.props.handleDelete(id)}>Delete</button>
            </div>
        </div>
     );
    }
}
 
export default Favorites;