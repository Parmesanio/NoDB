import React, {Component} from 'react';
import './favorites.css';

class Favorites extends Component {
    constructor(props) {
        super();
        this.state = {
            userTitle: ''
        }
    }
    handleTextChange(event) {
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
            <button className="edit" onClick={() => this.props.handleUpdate(id, userTitle)}>Rename</button>
            <button className="delete" onClick={() => this.props.handleDelete(id)}>Delete</button>
            </div>
        </div>
     );
    }
}
 
export default Favorites;