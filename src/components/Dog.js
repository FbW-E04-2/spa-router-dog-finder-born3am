import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Dog extends Component {
    render() {
        let dogFacts = null;
        if (this.props.currentDog === this.props.name) {
            dogFacts = (
                <div className='dogContent' >
                    <h2>{`Name: ${this.props.name}`}</h2>
                    <h4>{`(Age: ${this.props.age})`}</h4>
                    <ul>{this.props.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
                </div>
            );
        }
        return (
            <div className='dogflexfather' >
                <NavLink activeClassName='activeDog' to={`/dogs/${this.props.name}`}>
                    <div>
                        <img className='dogPic'  src={this.props.image} alt="dog picture" />
                        <h2>{this.props.name}</h2>

                    </div>
                </NavLink>
                
                {dogFacts}

            </div>
        );
    }
}

export default Dog;