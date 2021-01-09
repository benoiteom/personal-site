import React, { Component } from 'react'
import styles from './styles/Lowlevel.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect/dist/core'


export default class Backend extends Component {

    state = {
        os: { fontSize: '0px', padding: '0 0', opacity: 0 },
        mp: { fontSize: '0px', padding: '0 0', opacity: 0 },
        parallel: { fontSize: '0px', padding: '0 0', opacity: 0 },
        osscreen: { opacity: 0 },
        mpscreen: { opacity: 0 },
        parallelscreen: { opacity: 0 },
    }

    componentDidMount() {

        new Typewriter(document.getElementById('frontendtype'), { delay: 150 })
            .pauseFor(500)
            .typeString('LOW LEVEL')
            .start();
        
        document.getElementById("lowlevelthemecolor").style.setProperty('--theme-color', this.props.color);
    }

    toggle_shown = (next) => {
        let curr = null;
        if (this.state.osscreen.opacity == 1) {
            curr = "os"
            this.setState({
                os: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                osscreen: { opacity: 0 },
            });
            setTimeout(() => {
                this.setState({
                    os: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
            }, 1000);
        } else if (this.state.mpscreen.opacity == 1) {
            curr = 'mp'
            this.setState({
                mp: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                mpscreen: { opacity: 0 },
            });
            setTimeout(() => {
                this.setState({
                    mp: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
            }, 1000);
        } else if (this.state.parallelscreen.opacity == 1) {
            curr = 'johndeere'
            this.setState({
                parallel: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                parallelscreen: { opacity: 0 },
            });
            setTimeout(() => {
                this.setState({
                    parallel: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
            }, 1000);
        }

        if (next != curr) {
            if (next == "os") {
                this.setState({
                    os: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    osscreen: { opacity: 1 },
                });
                setTimeout(() => {
                    this.setState({
                        os: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            } else if (next == "mp") {
                this.setState({
                    mp: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    mpscreen: { opacity: 1 },
                });
                setTimeout(() => {
                    this.setState({
                        mp: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            }
            else if (next == "parallel") {
                this.setState({
                    parallel: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    parallelscreen: { opacity: 1 },
                });
                setTimeout(() => {
                    this.setState({
                        parallel: { fontSize: '16px', padding: '20px 20px', opacity: 1 },
                    });
                }, 1000);
            }
        }
    }

    render() {
        return (
            <div id="lowlevelthemecolor" className={styles.themecolor}>
                <div className={styles.top} />
                <h1 id='frontendtype' className={styles.title}></h1>
                <div id='accordion' className={styles.dropdown}>
                    <div id={styles.os}>
                        <p onClick={() => this.toggle_shown("os")}>OPERATING SYSTEM</p>
                        <p onClick={() => this.toggle_shown("os")} className={styles.expand1}>expand</p>
                    </div>
                    <div style={this.state.os} className={styles.explanation}>
                        <p>Class Project</p>
                        <p>In my junior year, I took a class on operating systems. The final project was to <b>build an operating 
                            system</b> from scratch. Using <b>C and x86</b>, we implemented <b>paging, a file system, I/O (mouse and 
                            keyboard), terminal typing and scrolling, context switching, and executable files</b>. Over the course 
                            of the semester, we had the opportunity to take a deep dive into how operating systems work and how 
                            they're made.
                        </p>
                    </div>
                    <div id={styles.mp}>
                        <p onClick={() => this.toggle_shown("mp")}>MICROPROCESSOR</p>
                        <p onClick={() => this.toggle_shown("mp")} className={styles.expand2}>expand</p>
                    </div>
                    <div style={this.state.mp} className={styles.explanation}>
                        <p>Class Project</p>
                        <p>As a senior in computer engineering, I was able to take a class on microprocessors. We 
                            used <b>SystemVerilog</b> along with <b>FPGA design tools</b> like <b>Quartus, and
                            waveform simulations with ModelSim</b>. By the end of the semester, our team had implemented 
                            a functional <b>pipelined processor with five stages and a 4-way pipelined L1 and L2 
                            cache system</b>.
                        </p>
                    </div>
                    <div id={styles.parallel}>
                        <p onClick={() => this.toggle_shown("parallel")}>PARALLEL</p>
                        <p onClick={() => this.toggle_shown("parallel")} className={styles.expand2}>expand</p>
                    </div>
                    <div style={this.state.parallel} className={styles.explanation}>
                        <p>Class Project</p>
                        <p>Parallel processing was an elective I chose to take because I thought it could be intersting 
                            and I was not dissapointed. We learned about when parallel programming is useful and how to 
                            best <b>optimize</b> code to take full advantage of it. We implemented tasks like <b>vector 
                            addition, matrix multiply, reduction, and ended with an optimized convolution kernel.</b>
                        </p>
                    </div>
                </div>
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                <div className={styles.monitor} />

                <div style={this.state.osscreen} className={styles.screen}>
                    <Image src="/Operatingsystem.png" layout='fill' alt='operating system' />
                </div>
                <div style={this.state.mpscreen} className={styles.screen} id={styles.mrscreen}>
                    <Image src="/Microprocessor.png" layout='fill' alt='microprocessor' />
                </div>
                <div style={this.state.parallelscreen} className={styles.screen}>
                    <Image src="/Parallel.png" layout='fill' alt='parallel' />
                </div>

            </div>
        )
    }
}
