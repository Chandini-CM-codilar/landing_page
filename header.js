import React, { Component } from 'react';
import './header.css';
import Bars from './Bars.svg';
import Cancel from './cancel.svg';
import Logo from './logo.svg';

export default class header extends Component {

    state = {
        bars: true
    }

    myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "nav__bar") {
            x.className += " responsive";
        } else {
            x.className = "nav__bar";
        }
        this.setState({ bars: !this.state.bars })
    }
    render() {
        return (

            <header >
                <div class="nav__bar"
                    id="myTopnav" >
                    <a href="#home"
                        class="active" > < img className="logo"
                            src={Logo}
                        /></a >
                    <a className="nav_link" href="#Support" > Support </a>
                    <a className="nav_link" href="#Products" > Products </a>
                    <a className="nav_link" href="#Events" > Events </a>
                    <a className=" nav_link" href="#Careeres" > Careers </a>
                    <a className="nav_link" href="#about" > About </a>
                    <a className="animie" href="javascript:void(0);"
                        class="icon"
                        onClick={this.myFunction} >
                        <img className="bars"
                            src={this.state.bars ? Bars : Cancel} /> </a>
                </div>
                <div>
                    <div className="header-text" >
                        <h1 class="hero-text" >
                            Immersive experiences that deliver </h1>
                    </div>
                </div>
            </header>
        )
    }
}