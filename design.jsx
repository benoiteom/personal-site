import React, { Component } from 'react'
import styles from './styles/Skills.module.css'
import dstyles from './styles/Design.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect/dist/core'


export default class Design extends Component {

    state = {
        teneez: { fontSize: '0px', padding: '0 0', opacity: 0 },
        musrover: { fontSize: '0px', padding: '0 0', opacity: 0 },
        personalsite: { fontSize: '0px', padding: '0 0', opacity: 0 },
        teneezscreen: { opacity: 0 },
        musroverscreen: { opacity: 0 },
        personalscreen: { opacity: 0 },
        teneezexpand: { opacity: 1 },
        musroverexpand: { opacity: 1 },
        personalsiteexpand: { opacity: 1 },
        teneezclose: { opacity: 0 },
        musroverclose: { opacity: 0 },
        personalsiteclose: { opacity: 0 },
        placeholder: { opacity: 1 },
    }



    componentDidMount() {

        new Typewriter(document.getElementById('frontendtype'), { delay: 150 })
            .pauseFor(500)
            .typeString('DESIGN')
            .start();

        document.getElementById("designthemecolor").style.setProperty('--theme-color', this.props.color);
    }

    toggle_shown = (next) => {
        let curr = null;
        if (this.state.teneezscreen.opacity == 1) {
            curr = "teneez"
            this.setState({
                teneez: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                teneezscreen: { opacity: 0 },
                placeholder: { opacity: 1 },
                teneezexpand: { opacity: 1, width: '80px' },
                teneezclose: { opacity: 0, width: '60px' },
            });
            setTimeout(() => {
                this.setState({
                    teneez: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
                if (window.getComputedStyle(document.getElementById('teneezimage')).display === 'block') {
                    document.getElementById('teneezimage').setAttribute("style", "padding-top: 0%; margin-top: 0px;");
                }
            }, 1000);
        } else if (this.state.musroverscreen.opacity == 1) {
            curr = 'musrover'
            this.setState({
                musrover: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                musroverscreen: { opacity: 0 },
                placeholder: { opacity: 1 },
                musroverexpand: { opacity: 1, width: '80px' },
                musroverclose: { opacity: 0, width: '60px' },
            });
            setTimeout(() => {
                this.setState({
                    musrover: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
                if (window.getComputedStyle(document.getElementById('musroverimage')).display === 'block') {
                    document.getElementById('musroverimage').setAttribute("style", "padding-top: 0%; margin-top: 0px;");
                }
            }, 1000);
        } else if (this.state.personalscreen.opacity == 1) {
            curr = "personal site"
            this.setState({
                personalsite: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                personalscreen: { opacity: 0 },
                placeholder: { opacity: 1 },
                personalsiteexpand: { opacity: 1, width: '80px' },
                personalsiteclose: { opacity: 0, width: '60px' },
            });
            setTimeout(() => {
                this.setState({
                    personalsite: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
                if (window.getComputedStyle(document.getElementById('personalsiteimage')).display === 'block') {
                    document.getElementById('personalsiteimage').setAttribute("style", "padding-top: 0%; margin-top: 0px;");
                }
            }, 1000);
        }
        if (next != curr) {
            if (next == "teneez") {
                this.setState({
                    teneez: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    teneezscreen: { opacity: 1 },
                    placeholder: { opacity: 0 },
                    teneezexpand: { opacity: 0, width: 0 },
                    teneezclose: { opacity: 1, width: '60px' },
                });
                if (window.getComputedStyle(document.getElementById('teneezimage')).display === 'block') {
                    document.getElementById('teneezimage').setAttribute("style", "padding-top: 100%; margin-top: 28px;");
                }
                setTimeout(() => {
                    this.setState({
                        teneez: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            } else if (next == "musrover") {
                this.setState({
                    musrover: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    musroverscreen: { opacity: 1 },
                    placeholder: { opacity: 0 },
                    musroverexpand: { opacity: 0, width: 0 },
                    musroverclose: { opacity: 1, width: '60px' },
                });
                if (window.getComputedStyle(document.getElementById('musroverimage')).display === 'block') {
                    document.getElementById('musroverimage').setAttribute("style", "padding-top: 70%; margin-top: 35px;");
                }
                setTimeout(() => {
                    this.setState({
                        musrover: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            } else if (next == "personal site") {
                this.setState({
                    personalsite: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    personalscreen: { opacity: 1 },
                    placeholder: { opacity: 0 },
                    personalsiteexpand: { opacity: 0, width: 0 },
                    personalsiteclose: { opacity: 1, width: '60px' },
                });
                if (window.getComputedStyle(document.getElementById('personalsiteimage')).display === 'block') {
                    document.getElementById('personalsiteimage').setAttribute("style", "padding-top: 100%; margin-top: 35px;");
                }
                setTimeout(() => {
                    this.setState({
                        personalsite: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            }
        }
    }

    render() {
        return (
            <div id="designthemecolor" className={styles.themecolor}>
                <div id='content' />
                <div className={dstyles.topleft} />
                <h1 id='frontendtype' className={styles.title} style={{color: 'white'}}></h1>
                <div className={styles.dropdown}>
                    <div id={dstyles.personalsite}>
                        <p onClick={() => this.toggle_shown("personal site")}>PERSONAL SITE</p>
                        <p onClick={() => this.toggle_shown("personal site")} style={this.state.personalsiteexpand} className={styles.expand}>expand</p>
                        <p onClick={() => this.toggle_shown("personal site")} style={this.state.personalsiteclose} className={styles.expand}>close</p>
                    </div>
                    <div style={this.state.personalsite} className={styles.explanation}>
                        <p>Developer & Designer</p>
                        <p>The idea behind this site was to present a design that's incredibly <b>simple</b> and yet 
                            intriguing. A stark <b>contrast</b>, yet evenly <b>balanced</b>. Using <b>white space</b> to 
                            literally make the info pop. I began with a typing animation on a very <b>simplistic 
                            landing page</b> and went from there. 
                        </p>
                        <i>"Simplicity is the ultimate sophistication" - Leonardo da Vinci</i>
                        <div id="personalsiteimage" className={styles.mobileimage}><Image src='/Personalsite.png' layout='fill' /></div>
                    </div>
                    <div id={dstyles.musrover}>
                        <p onClick={() => this.toggle_shown("musrover")}>MUS-ROVER</p>
                        <p onClick={() => this.toggle_shown("musrover")} style={this.state.musroverexpand} className={styles.expand}>expand</p>
                        <p onClick={() => this.toggle_shown("musrover")} style={this.state.musroverclose} className={styles.expand}>close</p>
                    </div>
                    <div style={this.state.musrover} className={styles.explanation}>
                        <p>Frontend Developer & Designer</p>
                        <p>
                            The challenge here was to take a project that had been <b>previously designed, and transform it</b> into something 
                            I found appealing. This involved many <b>compromises and alterations</b>, while allowing for an injection 
                            of my own personal creative touch.
                        </p>
                        <div id="musroverimage" className={styles.mobileimage}><Image src='/Musrover.png' layout='fill' /></div>
                    </div>
                    <div id={dstyles.teneez}>
                        <p onClick={() => this.toggle_shown("teneez")}>TENEEZ</p>
                        <p onClick={() => this.toggle_shown("teneez")} style={this.state.teneezexpand} className={styles.expand}>expand</p>
                        <p onClick={() => this.toggle_shown("teneez")} style={this.state.teneezclose} className={styles.expand}>close</p>
                    </div>
                    <div style={this.state.teneez} className={styles.explanation}>
                        <p>Co-Founder, CTO, Frontend Developer & Designer</p>
                        <p>TENEEZ was a chance for me to <b>lead the design process</b> while taking into consideration 
                            team feedback, requests and preferences. The website went through <b>many iterations</b> before 
                            settling on the current colors and design. It was also interesting to work with the 
                            marketing team and adapt the website according to their initiatives.
                        </p>
                        <a target="_blank" href="https://teneez.com/">teneez.com</a>
                        <div id="teneezimage" className={styles.mobileimage}><Image src='/Teneez.png' layout='fill' /></div>
                    </div>
                </div>
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                <div className={dstyles.down} />
                <div className={dstyles.left} />
                <div className={dstyles.up} />

                <div style={this.state.teneezscreen} className={styles.screen}>
                    <Image src="/Teneez.png" layout='fill' alt='teneez' />
                </div>
                <div style={this.state.musroverscreen} className={styles.screen} id={styles.mrscreen}>
                    <Image src="/Musrover.png" layout='fill' alt='musrover' />
                </div>
                <div style={this.state.personalscreen} className={styles.screen}>
                    <Image src="/Personalsite.png" layout='fill' alt='personal' />
                </div>
            </div>
        )
    }
}
