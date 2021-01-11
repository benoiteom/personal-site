import React, { Component } from 'react'
import styles from './styles/Skills.module.css'
import lstyles from './styles/Lowlevel.module.css'
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
                if (window.getComputedStyle(document.getElementById('osimage')).display === 'block') {
                    document.getElementById('osimage').setAttribute("style", "padding-top: 0%; margin-top: 0px;");;
                }
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
                if (window.getComputedStyle(document.getElementById('mpimage')).display === 'block') {
                    document.getElementById('mpimage').setAttribute("style", "padding-top: 0%; margin-top: 0px;");;
                }
            }, 1000);
        } else if (this.state.parallelscreen.opacity == 1) {
            curr = 'parallel'
            this.setState({
                parallel: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                parallelscreen: { opacity: 0 },
            });
            setTimeout(() => {
                this.setState({
                    parallel: { fontSize: '0px', padding: '0 0', opacity: 0 },
                });
                if (window.getComputedStyle(document.getElementById('parallelimage')).display === 'block') {
                    document.getElementById('parallelimage').setAttribute("style", "padding-top: 0%; margin-top: 0px;");;
                }
            }, 1000);
        }

        if (next != curr) {
            if (next == "os") {
                this.setState({
                    os: { fontSize: '16px', padding: '20px 20px', opacity: 0 },
                    osscreen: { opacity: 1 },
                });
                if (window.getComputedStyle(document.getElementById('osimage')).display === 'block') {
                    document.getElementById('osimage').setAttribute("style", "padding-top: 100%; margin-top: 28px;");;
                }
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
                if (window.getComputedStyle(document.getElementById('mpimage')).display === 'block') {
                    document.getElementById('mpimage').setAttribute("style", "padding-top: 100%; margin-top: 28px;");;
                }
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
                if (window.getComputedStyle(document.getElementById('parallelimage')).display === 'block') {
                    document.getElementById('parallelimage').setAttribute("style", "padding-top: 100%; margin-top: 28px;");;
                }
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
                <div className={lstyles.top} />
                <h1 id='frontendtype' className={styles.title}></h1>
                <div id='accordion' className={styles.dropdown}>
                    <div id={lstyles.os}>
                        <p onClick={() => this.toggle_shown("os")}>OPERATING SYSTEM</p>
                        <p onClick={() => this.toggle_shown("os")} className={styles.expand1}>expand</p>
                    </div>
                    <div style={this.state.os} className={styles.explanation}>
                        <p>Class Project</p>
                        <p>In ECE 391, Computer Systems Engineering, I had the opportunity to delve into the inner workings 
                            of today's systems inculding x86 assembly, drivers, and operating systems. Our final project 
                            involved <b>building a command line operating system</b> from scratch using <b>C and x86</b>. We 
                            implemented <b>paging, a file system, I/O (mouse and 
                            keyboard,) terminal typing and scrolling, context switching, and executable files</b>.
                        </p>
                        <div id="osimage" className={styles.mobileimage}><Image src='/Operatingsystem.png' layout='fill' /></div>
                    </div>
                    <div id={lstyles.mp}>
                        <p onClick={() => this.toggle_shown("mp")}>MICROPROCESSOR</p>
                        <p onClick={() => this.toggle_shown("mp")} className={styles.expand2}>expand</p>
                    </div>
                    <div style={this.state.mp} className={styles.explanation}>
                        <p>Class Project</p>
                        <p>As a senior in Computer Engineering, I opted to take a Computer Organization and Design class. 
                            For the final project, we used <b>SystemVerilog</b> along with <b>FPGA design tools</b> such as <b>Quartus and
                            waveform simulations with ModelSim</b>. Our team implemented 
                            a functional <b>pipelined processor with five stages and a 4-way pipelined L1 and L2 
                            cache system</b>.
                        </p>
                        <div id="mpimage" className={styles.mobileimage}><Image src='/Microprocessor.png' layout='fill' /></div>
                    </div>
                    <div id={lstyles.parallel}>
                        <p onClick={() => this.toggle_shown("parallel")}>PARALLEL</p>
                        <p onClick={() => this.toggle_shown("parallel")} className={styles.expand2}>expand</p>
                    </div>
                    <div style={this.state.parallel} className={styles.explanation}>
                        <p>Class Project</p>
                        <p>ECE 408 Parallel Processing proved to be an interesting tech elective. We learned how to best use 
                            parallel programming and techniques for <b>optimizing</b> code. We implemented programs including <b>vector 
                            addition, matrix multiplication, reduction, and finally an optimized convolution kernel.</b>
                        </p>
                        <div id="parallelimage" className={styles.mobileimage}><Image src='/Parallel.png' layout='fill' /></div>
                    </div>
                </div>
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                <div className={lstyles.monitor} />

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
