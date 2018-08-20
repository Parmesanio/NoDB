import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './details.css';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: []
        }
    }
    componentDidMount() {
        axios.get( `/api/details/${this.props.match.params.id}`)
            .then(res => {
                console.log(res);
                this.setState({
                    details: res.data
                })
            })
            
    }
    render() {
        let { details } = this.state;
        // let mappedDetails = details.map(e => {
        //     console.log(e);
        // })
        return ( 
            <div className="details">
            <img className="detailsimg" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} />
            <div className="info">
            <h1 className="detailsh1">{details.title} - {details.release_date}</h1>
            <h3 className="detailsh3">Rating: {details.vote_average}/10</h3>
            <p className="detailsdesc">{details.overview}</p>
            <Link className="link" to="/">Go Back</Link>
            </div>
            </div>
         );
    }
}
 
export default Details;