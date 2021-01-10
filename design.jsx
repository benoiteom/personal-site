import React, { Component } from 'react'
import styles from './styles/Design.module.css'
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
                placeholder: { opacity: 1 }
            });
            setTimeout(() => {
                this.setState({
                    teneez: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
            }, 1000);
        } else if (this.state.musroverscreen.opacity == 1) {
            curr = 'musrover'
            this.setState({
                musrover: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                musroverscreen: { opacity: 0 },
                placeholder: { opacity: 1 }
            });
            setTimeout(() => {
                this.setState({
                    musrover: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
            }, 1000);
        } else if (this.state.personalscreen.opacity == 1) {
            curr = "personal site"
            this.setState({
                personalsite: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                personalscreen: { opacity: 0 },
                placeholder: { opacity: 1 }
            });
            setTimeout(() => {
                this.setState({
                    personalsite: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
            }, 1000);
        }

        if (next != curr) {
            if (next == "teneez") {
                this.setState({
                    teneez: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    teneezscreen: { opacity: 1 },
                    placeholder: { opacity: 0 }
                });
                setTimeout(() => {
                    this.setState({
                        teneez: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            } else if (next == "musrover") {
                this.setState({
                    musrover: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    musroverscreen: { opacity: 1 },
                    placeholder: { opacity: 0 }
                });
                setTimeout(() => {
                    this.setState({
                        musrover: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            } else if (next == "personal site") {
                this.setState({
                    personalsite: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    personalscreen: { opacity: 1 },
                    placeholder: { opacity: 0 }
                });
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
                <div className={styles.topleft} />
                <h1 id='frontendtype' className={styles.title}></h1>
                <div id='accordion' className={styles.dropdown}>
                    <div id={styles.personalsite}>
                        <p onClick={() => this.toggle_shown("personal site")}>PERSONAL SITE</p>
                        <p onClick={() => this.toggle_shown("personal site")} className={styles.expand3}>expand</p>
                    </div>
                    <div style={this.state.personalsite} className={styles.explanation}>
                        <p>Developer & Designer</p>
                        <p>The idea behind this site was to present a design that's incredibly <b>simple</b> and yet 
                            intriguing. A stark <b>contrast</b>, yet evenly <b>balanced</b>. Using <b>white space</b> to 
                            literally make the info pop. I began with a typing animation on a very <b>simplistic 
                            landing page</b> and went from there. 
                        </p>
                        <i>"Simplicity is the ultimate sophistication" - Leonardo da Vinci</i>
                    </div>
                    <div id={styles.musrover}>
                        <p onClick={() => this.toggle_shown("musrover")}>MUS-ROVER</p>
                        <p onClick={() => this.toggle_shown("musrover")} className={styles.expand2}>expand</p>
                    </div>
                    <div style={this.state.musrover} className={styles.explanation}>
                        <p>Frontend Developer & Designer</p>
                        <p>
                            The challenge here was to take a project that had been <b>previously designed, and transform it</b> into something 
                            I found appealing. This involved many <b>compromises and alterations</b>, while allowing for an injection 
                            of my own personal creative touch.
                        </p>
                    </div>
                    <div id={styles.teneez}>
                        <p onClick={() => this.toggle_shown("teneez")}>TENEEZ</p>
                        <p onClick={() => this.toggle_shown("teneez")} className={styles.expand1}>expand</p>
                    </div>
                    <div style={this.state.teneez} className={styles.explanation}>
                        <p>Co-Founder, CTO, Frontend Developer & Designer</p>
                        <p>TENEEZ was a chance for me to <b>lead the design process</b> while taking into consideration 
                            team feedback, requests and preferences. The website went through <b>many iterations</b> before 
                            settling on the current colors and design. It was also interesting to work with the 
                            marketing team and adapt the website according to their initiatives.
                        </p>
                        <a href="https://teneez.com/">teneez.com</a>
                    </div>
                </div>
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                {/* <div className={styles.monitor} /> */}
                <div className={styles.down} />
                <div className={styles.left} />
                <div className={styles.up} />


                <div style={this.state.teneezscreen} className={styles.screen}>
                    <Image src="/Teneez.png" layout='fill' alt='teneez' />
                </div>
                <div style={this.state.musroverscreen} className={styles.screen} id={styles.mrscreen}>
                    <Image src="/Musrover.png" layout='fill' alt='musrover' />
                </div>
                <div style={this.state.personalscreen} className={styles.screen}>
                    <Image src="/Personalsite.png" layout='fill' alt='personal' />
                </div>
                {/* <div style={this.state.placeholder} className={styles.placeholder}>
                    <p>select a project</p>
                </div> */}

            </div>
        )
    }
}
