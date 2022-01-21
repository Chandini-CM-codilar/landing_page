import React, { Component } from 'react';
import './footer.css';
import Face from './facebook.svg';
import Twit from './twitter.svg';
import Pin from './pinterest.svg';
import Insta from './instagram.svg';

import Logo from './logo.svg';

export default class footer extends Component {
    render() {
        return (
            <footer >
                <div className="footer-content">
                    <div className="footer-contaner">
                        <img alt="footer-logo" className="foot_logo"
                            src={Logo} />
                        <div className="links">
                            <ul class="links__box">
                                <li class="links__item">
                                    <a href="#">About</a>
                                </li>
                                <li class="links__item">
                                    <a href="#">Careers</a>
                                </li>
                                <li class="links__item">
                                    <a href="#">Events</a>
                                </li>
                                <li class="links__item">
                                    <a href="#">Products</a>
                                </li>
                                <li class="links__item">
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-contaner">
                        <div class="footer__social">
                            <a href="#" class="footer__social__item">
                                <img src={Face} />
                            </a>

                            <a href="#" class="footer__social__item">
                                <img src={Twit} />
                            </a>

                            <a href="#" class="footer__social__item">
                                <img src={Pin} />
                            </a>

                            <a href="#" class="footer__social__item">
                                <img src={Insta} />
                            </a>
                        </div>
                        
                    </div>
                </div>
            </footer>
        )
    }
}
