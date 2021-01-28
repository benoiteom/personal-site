import React, { Component } from 'react'
import styles from './styles/Skills.module.css'
import bstyles from './styles/Backend.module.css'
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
        teneezexpand: { opacity: 1 },
        scriptingexpand: { opacity: 1 },
        johndeereexpand: { opacity: 1 },
        teneezclose: { opacity: 0 },
        scriptingclose: { opacity: 0 },
        johndeereclose: { opacity: 0 },
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
                teneezexpand: { opacity: 1, width: '80px' },
                teneezclose: { opacity: 0, width: '60px' },
            });
            if (window.getComputedStyle(document.getElementById('teneezimage')).display === 'block') {
                document.getElementById('teneezimage').setAttribute("style", "padding-top: 0%; margin-top: 0px;");
            }
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
                scriptingexpand: { opacity: 1, width: '80px' },
                scriptingclose: { opacity: 0, width: '60px' },
            });
            setTimeout(() => {
                this.setState({
                    scripting: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
                if (window.getComputedStyle(document.getElementById('scriptingimage')).display === 'block') {
                    document.getElementById('scriptingimage').setAttribute("style", "padding-top: 0%; margin-top: 0px;");
                }
            }, 1000);
        } else if (this.state.johndeerescreen.opacity == 1) {
            curr = 'johndeere'
            this.setState({
                johndeere: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                johndeerescreen: { opacity: 0 },
                johndeereexpand: { opacity: 1, width: '80px' },
                johndeereclose: { opacity: 0, width: '60px' },
            });
            setTimeout(() => {
                this.setState({
                    johndeere: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
                if (window.getComputedStyle(document.getElementById('johndeereimage')).display === 'block') {
                    document.getElementById('johndeereimage').setAttribute("style", "padding-top: 0%; margin-top: 0px;");
                }
            }, 1000);
        }

        if (next != curr) {
            if (next == "teneez") {
                this.setState({
                    teneez: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    teneezscreen: { opacity: 1 },
                    teneezexpand: { opacity: 0, width: 0 },
                    teneezclose: { opacity: 1, width: '60px' },
                });
                if (window.getComputedStyle(document.getElementById('teneezimage')).display === 'block') {
                    document.getElementById('teneezimage').setAttribute("style", "padding-top: 100%; margin-top: 35px;");
                }
                setTimeout(() => {
                    this.setState({
                        teneez: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            } else if (next == "scripting") {
                this.setState({
                    scripting: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    scriptingscreen: { opacity: 1 },
                    scriptingexpand: { opacity: 0, width: 0 },
                    scriptingclose: { opacity: 1, width: '60px' },
                });
                if (window.getComputedStyle(document.getElementById('scriptingimage')).display === 'block') {
                    document.getElementById('scriptingimage').setAttribute("style", "padding-top: 100%; margin-top: 35px;");
                }
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
                    johndeereexpand: { opacity: 0, width: 0 },
                    johndeereclose: { opacity: 1, width: '60px' },
                });
                if (window.getComputedStyle(document.getElementById('johndeereimage')).display === 'block') {
                    document.getElementById('johndeereimage').setAttribute("style", "padding-top: 100%; margin-top: 35px;");
                }
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
            <div id="backendthemecolor" className={styles.themecolor}>
                <div id='content' />
                <div className={bstyles.top} />
                <h1 id='frontendtype' className={styles.title} style={{color: 'white'}}></h1>
                <div className={styles.dropdown}>
                    <div id={bstyles.teneez}>
                        <p onClick={() => this.toggle_shown("teneez")}>TENEEZ</p>
                        <p onClick={() => this.toggle_shown("teneez")} style={this.state.teneezexpand} className={styles.expand}>expand</p>
                        <p onClick={() => this.toggle_shown("teneez")} style={this.state.teneezclose} className={styles.expand}>close</p>
                    </div>
                    <div style={this.state.teneez} className={styles.explanation}>
                        <p>Co-Founder, CTO, Frontend Developer & Designer</p>
                        <p>TENEEZ is a startup I co-founded with a friend in September 2019. By lending instead of selling, 
                            we hope to make the hypest sneakers affordable and accesible.  
                            As the frontend developer, my job extends to <b>linking the frontend with the backend</b>, and <b>altering 
                            or writing Node.js code</b> to fit the specifications of the frontend. This has led me to dive deeper into 
                            Node.js coding and what can be accomplished with it.
                        </p>
                        <a target="_blank" href="https://teneez.com/">teneez.com</a>
                        <div id="teneezimage" className={styles.mobileimage}><Image src='/Teneez.png' layout='fill' /></div>
                    </div>
                    <div id={bstyles.scripting}>
                        <p onClick={() => this.toggle_shown("scripting")}>SCRIPTING</p>
                        <p onClick={() => this.toggle_shown("scripting")} style={this.state.scriptingexpand} className={styles.expand}>expand</p>
                        <p onClick={() => this.toggle_shown("scripting")} style={this.state.scriptingclose} className={styles.expand}>close</p>
                    </div>
                    <div style={this.state.scripting} className={styles.explanation}>
                        <p>Python Scripting</p>
                        <p>I first realized the potential of scripting while working at John Deere. Since then, I have 
                            made scripts a regular <b>part of my development process</b>, such as a <b>CLI script</b> which 
                            adds a sneaker to the Teneez website using only a StockX url and the available sizes. I 
                            enjoy the added simplicity and efficiency of <b>combining these aspects</b> of frontend and backend
                            scripts.
                        </p>
                        <div id="scriptingimage" className={styles.mobileimage}><Image src='/Scripting.png' layout='fill' /></div>
                    </div>
                    <div id={bstyles.johndeere}>
                        <p onClick={() => this.toggle_shown("johndeere")}>JOHN DEERE</p>
                        <p onClick={() => this.toggle_shown("johndeere")} style={this.state.johndeereexpand} className={styles.expand}>expand</p>
                        <p onClick={() => this.toggle_shown("johndeere")} style={this.state.johndeereclose} className={styles.expand}>close</p>
                    </div>
                    <div style={this.state.johndeere} className={styles.explanation}>
                        <p>IT Intern</p>
                        <p>During my time at John Deere I worked on many projects including <b>automation</b> with <b>Python, 
                            Jenkins</b>, and other tools. Using these, I was able to accomplish tasks such as <b>creating over 100 pull 
                            requests</b> while taking my lunch break...very convenient! I moved on to automating <b>testing</b> for 
                            the John Deere Sales Center, properly <b>forking a branch</b> from GitHub, and other tasks.
                        </p>
                        <div id="johndeereimage" className={styles.mobileimage}><Image src='/Johndeere.png' layout='fill' /></div>
                    </div>
                </div>
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                <div className={bstyles.monitor} />

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
