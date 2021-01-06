import Head from 'next/head'
import styles from '../styles/Home.module.css'
import borderStyles from '../styles/Border.module.css'
import transitionStyles from '../styles/Transition.module.css'
import React, { Component } from 'react'
import Typewriter from 'typewriter-effect/dist/core'

export default class Home extends Component {

	state = {
		fadein: { opacity: 0, display: 'block' },
		growin: { borderRight: '0px solid black', borderBottom: '0px solid white', pointerEvents: 'auto' },
		contact: { opacity: 0, display: 'none' },
	}

	componentDidMount() {

		new Typewriter(document.getElementById('type'), { delay: 150 })
			.pauseFor(500)
			.typeString('BENOÎT ORTALO-MAGNÉ')
			.start();

		this.hideTimeout = setTimeout(() => this.setState({ fadein: { opacity: 1 }, growin: { borderRight: '120px solid black', borderBottom: '120px solid white', pointerEvents: 'auto' } }), 4200);
	}

	componentWillUnmount() {
		clearTimeout(this.hideTimeout)
	}

	show_contact = () => {
		this.setState({
			fadein: { opacity: 0 },
			growin: { borderRight: '200vw solid black', borderBottom: '200vh solid white', pointerEvents: 'none', opacity: 1 },
			contact: { opacity: 0, display: 'block' }
		});
		setTimeout(() => {
			this.setState({
				fadein: { opacity: 0, display: 'none' },
				contact: { opactiy: 1 }
			});
		}, 1000);
	}

	hide_contact = () => {
		this.setState({
			fadein: { opacity: 1, display: 'block' },
			growin: { borderRight: '120px solid black', borderBottom: '120px solid white', pointerEvents: 'none', opacity: 1 },
			contact: { opacity: 0 }
		});
		setTimeout(() => {
			this.setState({
				growin: { borderRight: '120px solid black', borderBottom: '120px solid white', pointerEvents: 'auto', opacity: 1 },
				contact: { opacity: 0, display: 'none' }
			});
		}, 1500);
	}

	render() {
		return (
			<div>
				<Head>
					<title>Benoit Ortalo-Magne</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<div className={styles.contact} style={this.state.contact}>
					<h1>CONTACT</h1>
					<p id={transitionStyles.linkone}>Current<span style={{ paddingLeft: '29px' }} /><a className={styles.link} href="https://illinois.edu">Student at University of Illinois Urbana Champaign</a></p>
					<p id={transitionStyles.linktwo}>Resume<span style={{ paddingLeft: '24.5px' }} /><a className={styles.link} href="../media/Resume_beo2_sp2021.pdf" download="Resume_Benoit">Resume_beo2_sp2021.pdf</a></p>
					<p id={transitionStyles.linkthree}>LinkedIn<span style={{ paddingLeft: '25px' }} /><a className={styles.link} href="https://www.linkedin.com/in/benoit-ortalo-magne/">Linkedin.com/benoit_ortalo-magne</a></p>
					<p id={transitionStyles.linkfour}>Email<span style={{ paddingLeft: '46px' }} /><a className={styles.link} href="mailto:bortalomagne@gmail.com">bortalomagne@gmail.com</a></p>
					<a id={styles.closecontact} className={styles.link} onClick={this.hide_contact}>close</a>
				</div>

				<main className={styles.main}>
					<div className={styles.fold} style={this.state.growin} onClick={this.show_contact} />
					<p className={styles.contactme} style={this.state.fadein}>contact me <span style={{ fontSize: '30px' }}>&rarr;</span></p>
					<h1 className={styles.title} id="type"></h1>
					<p className={styles.pronunciation} style={this.state.fadein}>[bənwa]</p>
					<a className={styles.subtitle} style={this.state.fadein} href="#content">scroll</a>
				</main>

				<div className={styles.categories} id="content">
					{/* <div className={transitionStyles.slide} id={transitionStyles.one} />
					<div className={transitionStyles.slide} id={transitionStyles.two} />
					<div className={transitionStyles.slide} id={transitionStyles.three} />
					<div className={transitionStyles.slide} id={transitionStyles.four} /> */}

					{/* <span className={styles.square} /> */}

					<div className={styles.skill} id={borderStyles.Bottom}>
						<h1>"FRONTEND"</h1>
					</div>
					<div className={styles.skill} id={borderStyles.Left}>
						<h1>"BACKEND"</h1>
					</div>
					<div className={styles.skill} id={borderStyles.Right}>
						<h1>"LOW LEVEL"</h1>
					</div>
					<div className={styles.skill} id={borderStyles.Top}>
						<h1>"DESIGN"</h1>
					</div>
				</div>

			</div>
		)
	}
}
