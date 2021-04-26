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

		window.scroll({ top: '100vh', left: 0, behavior: 'smooth' });

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

	set_favicon = (src) => {
		let color = 'black';
		switch (src) {
			case '#d72323': color = 'red';
				break;
			case '#5e63b6': color = 'purple';
				break;
			case '#08d9d6': color = 'green';
				break;
			case '#3490de': color = 'blue';
				break;
			default: color = 'black'
		}
		var link = document.createElement('link');
		// oldLink = document.getElementById('dynamic-favicon');
		link.id = 'dynamic-favicon';
		link.rel = 'shortcut icon';
		link.href = '/' + color + '.ico';
		// if (oldLink) {
		// 	document.head.removeChild(oldLink);
		// }
		document.head.appendChild(link);
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

	hide_main = async () => {
		await this.setState({ skillshow: 'categories' });
		window.scroll({ top: window.outerHeight, left: 0, behavior: 'smooth' });
		var top = document.getElementById('content').offsetTop;
		window.scrollTo(0, top);
	}

	show_main = () => {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
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
		this.set_favicon(color);
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
		if (this.state.skillshow !== "") {
			var top = document.getElementById('content').offsetTop;
			window.scrollTo(0, top);
		}
	}

	render() {
		return (
			<div id="themecolor" className={styles.themecolor}>
				<Head>
					<title>Benoit Ortalo-Magne</title>
					<link rel="icon" href="/favicon.ico" id='dynamic-favicon' />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@900&family=Poppins:wght@400;600&display=swap" rel="stylesheet"></link>
					<meta name="description" content="Hi, I'm Benoit Ortalo-Magne. Developer, designer, computer engineer - based in the USA and soon graduating from UIUC." />
					<meta property="og:title" content="Benoit Ortalo-Magne" />
					<meta property="og:image" href="/OGImage.png" />
					<meta property="og:description" content="Hi, I'm Benoit Ortalo-Magne. Developer, designer, computer engineer - based in the USA and soon graduating from UIUC." />
					<meta property="og:url" content="https://benoit-om.com" />
					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-V2BH3W76HN"
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'G-V2BH3W76HN');
							`,
						}}
					/>
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
							<a className={styles.subtitle} style={this.state.fadein} onClick={this.hide_main}>see articles</a>
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

						<a className={styles.backup} style={this.state.backup} onClick={this.show_main}>back up</a>

						<div className={styles.skillwrapper}>
							<div className={styles.skill} id={borderStyles.Bottom} onClick={() => this.skill_transition("frontend")}>
								<h1>"SOCIAL MEDIA"</h1>
								<div className={styles.skilltype}>
									<p>and how it's changed</p>
								</div>
							</div>
						</div>
						<div className={styles.skillwrapper}>
							{/* <Link href="/backend#content"> */}
							{/* <a className={styles.skill} id={borderStyles.Left}> */}
							<div className={styles.skill} id={borderStyles.Left} onClick={() => this.skill_transition("backend")}>
								<h1>"VACCINES"</h1>
								<div className={styles.skilltype}>
									<p>and who gets them</p>
								</div>
							</div>
							{/* </Link> */}
						</div>
						<div className={styles.skillwrapper}>
							<div className={styles.skill} id={borderStyles.Right} onClick={() => this.skill_transition("lowlevel")}>
								<h1>"NORTH KOREA"</h1>
								<div className={styles.skilltype}>
									<p>and it's secrets</p>
								</div>
							</div>
						</div>
						<div className={styles.skillwrapper}>
							<div className={styles.skill} id={borderStyles.Top} onClick={() => this.skill_transition("design")}>
								<h1>"SNEAKERS"</h1>
								<div className={styles.skilltype}>
									<p>and resellers</p>
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
