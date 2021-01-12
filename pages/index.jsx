import Head from 'next/head'
import styles from '../styles/Home.module.css'
import borderStyles from '../styles/Border.module.css'
import transitionStyles from '../styles/Transition.module.css'
import React, { Component } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import Frontend from '../frontend.jsx'
import Backend from '../backend.jsx'
import Lowlevel from '../lowlevel.jsx'
import Design from '../design.jsx'
import smoothscroll from 'smoothscroll-polyfill';

export default class Home extends Component {

	state = {
		fadein: { opacity: 0, display: 'block' },
		growin: { borderRight: '0px solid black', borderBottom: '0px solid white', pointerEvents: 'auto' },
		contact: { opacity: 0, display: 'none' },
		skill: { left: '-100%' },
		skillshow: "",
		mainshow: true,
		backup: { opactiy: 1 },
		// backup: { opactiy: 0 },
		color: '#d72323',

		selectred: { border: '2px solid white' },
		selectblack: { border: '2px solid white' },
		selectpurple: { border: '2px solid white' },
		selectgreen: { border: '2px solid white' },
		selectblue: { border: '2px solid white' },
	}

	componentDidMount() {

		if (location.href.includes('#')) {
			window.history.replaceState({}, document.title, "/");
		}

		smoothscroll.polyfill();

		window.addEventListener('resize', this.fire_on_resize);

		new Typewriter(document.getElementById('type'), { delay: 150 })
			.pauseFor(500)
			.typeString('BENOÎT ORTALO-MAGNÉ')
			.start();

		this.hideTimeout = setTimeout(() => this.setState({
			fadein: { opacity: 1 },
			growin: { pointerEvents: 'auto' },
			selectred: { border: '2px solid black' },
		}), 4200);
		document.getElementById("themecolor").style.setProperty('--theme-color', this.state.color);
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
				fadein: { display: 'none' },
				contact: { opactiy: 1 }
			});
		}, 1000);
	}

	hide_contact = () => {
		this.setState({
			fadein: { opacity: 1, display: 'block' },
			growin: { pointerEvents: 'none', opacity: 1 },
			contact: { opacity: 0 }
		});
		setTimeout(() => {
			this.setState({
				growin: { pointerEvents: 'auto', opacity: 1 },
				contact: { display: 'none' }
			});
		}, 1500);
	}

	hide_main = () => {
		this.setState({ skillshow: 'categories' });
		setTimeout(() => {
			this.setState({
				// mainshow: false,
				// backup: { opacity: 1 }
			});
		}, 2000);
	}

	show_main = () => {
		// this.setState({ backup: { opacity: 0 } });
		setTimeout(() => {
			this.setState({
				skillshow: "",
			});
		}, 1000);
	}

	skill_transition = (val) => {
		this.setState({ skill: { left: 0 } });

		setTimeout(() => {
			this.setState({
				skillshow: val
			});
			this.setState({ skill: { left: '-100%' } });
		}, 1250);
	}

	set_color = (color) => {
		this.setState({ color: color });
		document.getElementById("themecolor").style.setProperty('--theme-color', color);
		this.setState({
			selectred: { border: color == '#d72323' ? '2px solid black' : '2px solid white' },
			selectblack: { border: color == 'black' ? '2px solid black' : '2px solid white' },
			selectpurple: { border: color == '#5e63b6' ? '2px solid black' : '2px solid white' },
			selectgreen: { border: color == '#08d9d6' ? '2px solid black' : '2px solid white' },
			selectblue: { border: color == '#3490de' ? '2px solid black' : '2px solid white' },
		});
	}

	fire_on_resize = () => {
		const url = location.href;
		if (url.includes('#')) {
			var top = document.getElementById(url.split('#')[1].toString()).offsetTop;
			window.scrollTo(0, top);
		}
	}

	render() {
		return (
			<div id="themecolor" className={styles.themecolor}>
				<Head>
					<title>Benoit Ortalo-Magne</title>
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@900&family=Poppins&display=swap" rel="stylesheet"></link>
				</Head>

				{this.state.mainshow ?
					<div id="top">
						<div className={styles.contact} style={this.state.contact}>
							<h1>DETAILS</h1>
							<p id={transitionStyles.linkone}>Current<span style={{ paddingLeft: '29px' }} /><a className={styles.link} target="_blank" href="https://ece.illinois.edu/">Computer Engineer at UIUC</a></p>
							<p id={transitionStyles.linktwo}>Resume<span style={{ paddingLeft: '24.5px' }} /><a className={styles.link} target="_blank" href="/Resume_beo2_sp2021.pdf" download="Resume_Benoit">Resume_beo2_sp2021.pdf</a></p>
							<p id={transitionStyles.linkthree}>LinkedIn<span style={{ paddingLeft: '25px' }} /><a className={styles.link} target="_blank" href="https://www.linkedin.com/in/benoit-ortalo-magne/"><span className={transitionStyles.longlink}>Linkedin.com/</span>benoit_ortalo-magne</a></p>
							<p id={transitionStyles.linkfour}>Email<span style={{ paddingLeft: '46px' }} /><a className={styles.link} target="_blank" href="mailto:bortalomagne@gmail.com">bortalomagne@gmail.com</a></p>
							<a id={styles.closecontact} className={styles.link} onClick={this.hide_contact}>back</a>
						</div>

						<main className={styles.main}>
							<div className={styles.theme}>
								<div style={this.state.selectred} onClick={() => this.set_color('#d72323')}><div style={this.state.fadein} id={styles.red} /></div>
								<div style={this.state.selectblack} onClick={() => this.set_color('black')}><div style={this.state.fadein} id={styles.black} /></div>
								<div style={this.state.selectpurple} onClick={() => this.set_color('#5e63b6')}><div style={this.state.fadein} id={styles.purple} /></div>
								<div style={this.state.selectgreen} onClick={() => this.set_color('#08d9d6')}><div style={this.state.fadein} id={styles.green} /></div>
								<div style={this.state.selectblue} onClick={() => this.set_color('#3490de')}><div style={this.state.fadein} id={styles.blue} /></div>
								<p style={this.state.fadein}>theme</p>
							</div>
							<div id="showcontact" className={styles.fold} style={this.state.growin} onClick={this.show_contact} />
							<p className={styles.contactme} style={this.state.fadein} onClick={this.show_contact}>contact me &nbsp;-></p>
							{/* <p className={styles.contactme} style={this.state.fadein}>contact me <span style={{ fontSize: '30px' }}>&rarr;</span></p> */}
							<h1 className={styles.title} id="type" style={{ paddingTop: '14px' }}></h1>
							<p className={styles.pronunciation} style={this.state.fadein}>[bənwa]</p>
							<a className={styles.subtitle} style={this.state.fadein} onClick={this.hide_main} href="#content">see more</a>
						</main>
					</div>
					: null}

				{/* <div className={transitionStyles.slide} id={transitionStyles.five} style={this.state.skill} /> */}
				{/* <div className={transitionStyles.slide} id={transitionStyles.two} style={this.state.skill} /> */}
				<div className={transitionStyles.slide} id={transitionStyles.three} style={this.state.skill} />
				{/* <div className={transitionStyles.slide} id={transitionStyles.four} style={this.state.skill} /> */}
				<div className={transitionStyles.slide} id={transitionStyles.one} style={this.state.skill} />

				{this.state.skillshow == 'categories' ?
					<div className={styles.categories} id="content">

						<a className={styles.backup} style={this.state.backup} onClick={this.show_main} href="#top">back up</a>

						<div className={styles.skillwrapper}>
							<div className={styles.skill} id={borderStyles.Bottom} onClick={() => this.skill_transition("frontend")}>
								<h1>"FRONTEND"</h1>
								<div className={styles.skilltype}>
									<p>React</p><p>JavaScript</p>
								</div>
								<div className={styles.skilltype}>
									<p>HTML & CSS</p><p>Angular</p>
								</div>
							</div>
						</div>
						<div className={styles.skillwrapper}>
							{/* <Link href="/backend#content"> */}
								{/* <a className={styles.skill} id={borderStyles.Left}> */}
									<div className={styles.skill} id={borderStyles.Left} onClick={() => this.skill_transition("backend")}>
									<h1>"BACKEND"</h1>
									<div className={styles.skilltype}>
										<p>Node.js</p><p>MySQL</p>
									</div>
									<div className={styles.skilltype}>
										<p>Databases</p><p>AWS</p>
									</div>
								</div>
							{/* </Link> */}
						</div>
						<div className={styles.skillwrapper}>
							<div className={styles.skill} id={borderStyles.Right} onClick={() => this.skill_transition("lowlevel")}>
								<h1>"LOW LEVEL"</h1>
								<div className={styles.skilltype}>
									<p>Binary</p><p>C++</p>
								</div>
								<div className={styles.skilltype}>
									<p>Assembly</p><p>x86</p>
								</div>
							</div>
						</div>
						<div className={styles.skillwrapper}>
							<div className={styles.skill} id={borderStyles.Top} onClick={() => this.skill_transition("design")}>
								<h1>"DESIGN"</h1>
								<div className={styles.skilltype}>
									<p>UI / UX</p><p>Material UI</p>
								</div>
								<div className={styles.skilltype}>
									<p>Contrast</p><p>Balance</p>
								</div>
							</div>
						</div>
					</div>
					: this.state.skillshow == "frontend" ?
						<Frontend back={this.skill_transition} color={this.state.color} />
						: this.state.skillshow == "backend" ?
							<Backend back={this.skill_transition} color={this.state.color} />
							: this.state.skillshow == "lowlevel" ?
								<Lowlevel back={this.skill_transition} color={this.state.color} />
								: this.state.skillshow == "design" ?
									<Design back={this.skill_transition} color={this.state.color} />
									:
									null}
			</div>
		)
	}
}
