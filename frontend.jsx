import React, { Component } from 'react'
import styles from './styles/Frontend.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect/dist/core'


export default class Frontend extends Component {

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
            .typeString('FRONTEND')
            .start();

        document.getElementById("frontendthemecolor").style.setProperty('--theme-color', this.props.color);
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
            <div id="frontendthemecolor" className={styles.themecolor}>
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
                            My role has been to <b>lead the tech team, build the frontend, and link it to our backend.</b> The frontend 
                            is <b>React using Next.js</b> (this handles css, imports, etc), and links to a <b>Node.js backend</b>. Hosting 
                            is done by <b>Vercel</b> due to ease of integration with <b>GitHub</b> which we use for version 
                            control.
                        </p>
                        <a href="https://teneez.com/">teneez.com</a>
                    </div>
                    <div id={styles.musrover}>
                        <p onClick={() => this.toggle_shown("musrover")}>MUS-ROVER</p>
                        <p onClick={() => this.toggle_shown("musrover")} className={styles.expand2}>expand</p>
                    </div>
                    <div style={this.state.musrover} className={styles.explanation}>
                        <p>Frontend Developer & Designer</p>
                        <p>
                            A UIUC research project which combines AI and machine learning 
                            to create an intelligent music composition tool. Our team worked on <b>creating a web 
                            app</b> for which I was the sole frontend developer. We were responsible for <b>updating old components, 
                            migrating from Angular 2 to Angular 4</b>, and improving the web app. My tasks included <b>redesigning pages and 
                            adding a tutorial</b> to make the composition more intuitive. This project is still in development.
                        </p>
                        </div>
                    <div id={styles.personalsite}>
                        <p onClick={() => this.toggle_shown("personal site")}>PERSONAL SITE</p>
                        <p onClick={() => this.toggle_shown("personal site")} className={styles.expand3}>expand</p>
                    </div>
                    <div style={this.state.personalsite} className={styles.explanation}>
                        <p>Developer & Designer</p>
                        <p>I hope you like it! This site is built with <b>React</b>, which has become my favorite framework over the years. 
                            I am also using <b>Next.js</b> not only for convenience, but also speed which gives me the option to employ <b>server 
                            side rendering</b>. I have yet to find a reason to switch from plain <b>CSS</b> so that is what I chose for 
                            styling. The link below will direct you to the <b>GitHub repo</b> where you 
                            can see the source code.
                        </p>
                        <a href="https://github.com/benoiteom/personal-site">github.com/benoiteom/personal-site</a>
                    </div>
                </div>
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                <div className={styles.monitor} />

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
