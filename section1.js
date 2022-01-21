import React, { Component } from 'react';
import './section1.css';
import Interact from './desktop/interactive.jpg';

export default class section1 extends Component {
    render() {
        return (
            <div className="section">
                <div className="section_container">
                    <div className="section_image">
                        <img className="sec-img" alt='interactive' src={Interact} />
                    </div>
                    <div className="feature__content">
                        <h2 class="feature__content__title">
                            The leader in interactive VR
                        </h2>
                        <p class="feature__content__text">
                            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}
