import React, { Component } from 'react'
import styles from './styles/Backend.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect/dist/core'


export default class Backend extends Component {

    state = {
        teneez: { fontSize: '0px', padding: '0 0', opacity: 0 },
        scripting: { fontSize: '0px', padding: '0 0', opacity: 0 },
        personalsite: { fontSize: '0px', padding: '0 0', opacity: 0 },
        johndeere: { fontSize: '0px', padding: '0 0', opacity: 0 },
        teneezscreen: { opacity: 0 },
        scriptingscreen: { opacity: 0 },
        johndeerescreen: { opacity: 0 },
    }

    componentDidMount() {

        new Typewriter(document.getElementById('frontendtype'), { delay: 150 })
            .pauseFor(500)
            .typeString('BACKEND')
            .start();
        
        document.getElementById("backendthemecolor").style.setProperty('--theme-color', this.props.color);            
    }

    toggle_shown = (next) => {
        let curr = null;
        if (this.state.teneezscreen.opacity == 1) {
            curr = "teneez"
            this.setState({
                teneez: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                teneezscreen: { opacity: 0 },
            });
            setTimeout(() => {
                this.setState({
                    teneez: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
            }, 1000);
        } else if (this.state.scriptingscreen.opacity == 1) {
            curr = 'scripting'
            this.setState({
                scripting: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                scriptingscreen: { opacity: 0 },
            });
            setTimeout(() => {
                this.setState({
                    scripting: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
            }, 1000);
        } else if (this.state.johndeerescreen.opacity == 1) {
            curr = 'johndeere'
            this.setState({
                johndeere: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                johndeerescreen: { opacity: 0 },
            });
            setTimeout(() => {
                this.setState({
                    johndeere: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
            }, 1000);
        }

        if (next != curr) {
            if (next == "teneez") {
                this.setState({
                    teneez: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    teneezscreen: { opacity: 1 },
                });
                setTimeout(() => {
                    this.setState({
                        teneez: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            } else if (next == "scripting") {
                this.setState({
                    scripting: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    scriptingscreen: { opacity: 1 },
                });
                setTimeout(() => {
                    this.setState({
                        scripting: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            }
            else if (next == "johndeere") {
                this.setState({
                    johndeere: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    johndeerescreen: { opacity: 1 },
                });
                setTimeout(() => {
                    this.setState({
                        johndeere: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            }
        }
    }

    render() {
        return (
            <div id="backendthemecolor" className={styles.themecolor}>>
                <div className={styles.top} />
                <h1 id='frontendtype' className={styles.title}></h1>
                <div id='accordion' className={styles.dropdown}>
                    <div id={styles.teneez}>
                        <p onClick={() => this.toggle_shown("teneez")}>TENEEZ</p>
                        <p onClick={() => this.toggle_shown("teneez")} className={styles.expand1}>expand</p>
                    </div>
                    <div style={this.state.teneez} className={styles.explanation}>
                        <p>Co-Founder, CTO, Frontend Developer & Designer</p>
                        <p>TENEEZ is a startup I co-founded with a friend in September 2019. By lending instead of selling, 
                            we hope to make the hypest sneakers affordable and accesible.  
                            As the frontend developer, my job extends to <b>linking the frontend with the backend</b>, and <b>altering 
                            or writing Node.js code</b> to fit the specifications of the frontend. This has led me to dive deeper into 
                            Node.js coding and what can be accomplished with it.
                        </p>
                        <a href="https://teneez.com/">teneez.com</a>
                    </div>
                    <div id={styles.scripting}>
                        <p onClick={() => this.toggle_shown("scripting")}>SCRIPTING</p>
                        <p onClick={() => this.toggle_shown("scripting")} className={styles.expand2}>expand</p>
                    </div>
                    <div style={this.state.scripting} className={styles.explanation}>
                        <p>Python Scripting</p>
                        <p>I first realized the potential of scripting while working at John Deere. Since then, I have 
                            made scripts a regular <b>part of my development process</b>, such as a <b>CLI script</b> which 
                            adds a sneaker to the Teneez website using only a StockX url and the available sizes. I 
                            enjoy the added simplicity and efficiency of <b>combining these aspects</b> of frontend and backend
                            scripts.
                        </p>
                    </div>
                    <div id={styles.johndeere}>
                        <p onClick={() => this.toggle_shown("johndeere")}>JOHN DEERE</p>
                        <p onClick={() => this.toggle_shown("johndeere")} className={styles.expand2}>expand</p>
                    </div>
                    <div style={this.state.johndeere} className={styles.explanation}>
                        <p>IT Intern</p>
                        <p>During my time at John Deere I worked on many projects including <b>automation</b> with <b>Python, 
                            Jenkins</b>, and other tools. Using these, I was able to accomplish tasks such as <b>creating over 100 pull 
                            requests</b> while taking my lunch break...very convenient! I moved on to automating <b>testing</b> for 
                            the John Deere Sales Center, properly <b>forking a branch</b> from GitHub, and other tasks.
                        </p>
                    </div>
                </div>
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                <div className={styles.monitor} />

                <div style={this.state.teneezscreen} className={styles.screen}>
                    <Image src="/Teneez.png" layout='fill' alt='teneez' />
                </div>
                <div style={this.state.scriptingscreen} className={styles.screen} id={styles.mrscreen}>
                    <Image src="/Scripting.png" layout='fill' alt='scripting' />
                </div>
                <div style={this.state.johndeerescreen} className={styles.screen}>
                    <Image src="/Johndeere.png" layout='fill' alt='johndeere' />
                </div>

            </div>
        )
    }
}
