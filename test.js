import React, { Component } from 'react';
import './test.css';

export default class test extends Component {
    render() {
        return (
            <div className="main-creation">
                <div class="creations__header">
                    <h2 class="creations__title">our creations</h2>
                    <button class="button">see all</button>
                </div>
                <div className="creation-content">
                    <div className='creation_main'>
                        <div className="creations__content__item earth">
                        </div>
                        <h3 className="creation-content-title" >
                            DEEP EARTH
                        </h3>
                    </div>

                    <div className='creation_main'>
                    <div className="creations__content__item night">
                    </div>
                    <h3 className="creation-content-title" >
                            NIGHT ARCADE
                        </h3>
                    </div>

                    <div className='creation_main'>
                    <div className="creations__content__item soccer">
                    </div>
                    <h3 className="creation-content-title" >
                            SOCCER TEAM VR
                        </h3>
                    </div>

                    <div className='creation_main'>
                    <div className="creations__content__item gried">
                    </div>
                    <h3 className="creation-content-title" >
                            THE GRID
                        </h3>
                    </div>
                    <div className='creation_main'>
                    <div className="creations__content__item above">
                    </div>
                    <h3 className="creation-content-title" >
                            FROM UP ABOVE VR
                        </h3>
                    </div>
                    <div className='creation_main'>
                    <div className="creations__content__item pocket">
                    </div>
                    <h3 className="creation-content-title" >
                            POCKET BOREALIS
                        </h3>
                    </div>
                    <div className='creation_main'>
                    <div className="creations__content__item curiosity">
                    </div>
                    <h3 className="creation-content-title" >
                            THE CURIOSITY
                        </h3>
                    </div>
                    <div className='creation_main'>
                    <div className="creations__content__item fish">
                    </div>
                    <h3 className="creation-content-title" >
                            MAKE IT FISHEYE
                        </h3>
                    </div>
                </div>
                <div className="btn1" >
                    <button className="button1">see all</button>    
                    </div>
            </div>
        )
    }
}
