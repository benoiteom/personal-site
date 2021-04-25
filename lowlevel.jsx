import React, { Component } from 'react'
import styles from './styles/Skills.module.css'
import lstyles from './styles/Lowlevel.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect/dist/core'


export default class Backend extends Component {

    componentDidMount() {

        new Typewriter(document.getElementById('frontendtype'), { delay: 70 })
            .pauseFor(500)
            .typeString('INVESTIGATING NORTH KOREA IN SECRET')
            .start();

        document.getElementById("lowlevelthemecolor").style.setProperty('--theme-color', this.props.color);
    }

    render() {
        return (
            <div id="lowlevelthemecolor" className={styles.themecolor}>
                <div id='content' />
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                {/* <div className={bstyles.top} /> */}
                <h1 id='frontendtype' className={styles.title} style={{ color: 'black' }}></h1>
                <p className={styles.joursubtitle}>Benoit Ortalo-Magne &emsp;&emsp; 3/22/21</p>
                <div className={styles.jourtext}>
                    <p>In 2011, Suki Kim began an undercover report in North Korea. She traveled there with a secret
                    identity as a university professor and missionary to teach English. She felt that in order to truly understand
                    the life of North Koreans, the only option was to completely immerse herself in their culture, even if it
                    meant a great risk to herself.<br /><br />
                    When she arrived, the 270 students at that university became hers to teach. These students were
                    meant to become the next leaders of the country, and as such, were harshly limited. Suki describes the
                    school as “a heavily guarded prison, posing as a campus” and goes on to describe how not only were the
                    students limited, but the teachers were also kept under very close supervision. An official minder
                    accompanied the class on trips off campus to visit monuments to the Great Leader.<br /><br />
                    Suki’s description of North Korea is truly terrifying. She says “North Korea is a gulag posing as a
                    nation. Everything there is about the Great Leader. Every book, every newspaper article, every song, every
                    TV program – there is just one subject.” The idea of everything pointing towards one man creates an image
                    of the country that’s almost hard to believe.<br /><br />
                    The extent to which the students are limited is not easier to comprehend. Access to internet is
                    forbidden, even for computer majors. Social media like Facebook and Twitter is never mentioned. She
                    comments “I went there looking for truth. But where do you even start when an entire nation’s ideology
                    […] were built on lies?” The condition under which those at the school are living is so incomprehensible it’s
                    difficult to find where it all begins to unravel.<br /><br />
                    As she grew attached to the students, she tried to begin edging them closer to the real world. Of
                    course, with 24 hour surveillance she was very limited, but she had them play games such as two truths
                    and a lie or instructed them to write letters to their parents. With the amount of lies they had become
                    accustomed to telling, however, some of these activities were fruitless.<br /><br />
                    Interestingly enough, the letters started to become more and more personal after some time. The
                    students began revealing their true feelings, writing about how bored they were with their life at the
                    school, how they wanted to something new, and how worried they were about their future. Sadly, these
                    letters could never be sent or there would be consequences.<br /><br />
                    Suki was the students’ professor, but also became their friend. Sharing meals, playing games,
                    talking about girls, simple ways of getting them to open up a bit and relax from the strict nature of their
                    lives. One of the students told her “Professor, we never think of you as being different from us.” While
                    sweet, this also shows her skill and ability to integrate as an undercover reporter.
                    I asked my friend Steven what he thought about Suki’s report. He responded, “I never knew how
                    strict the North Koreans were, it’s scary to say the least”. Without undercover reporters, the outside world
                    would have no idea what conditions were like.<br /><br />
                    My sister Chloe also had something to say. “It’s surprising how cut off they are. How can you not
                    know about the internet in today’s time? It’s what the whole world is doing.” I think this is the exact
                    reason why reports are so important, someone needs to hold others accountable.<br /><br /><br />
                    </p>
                    <p>
                        <u>Sources:</u><br />
                        Suki Kim (speaker) - sukikim@protonmail.com<br />
                        Steven Lee (friend) - 3106267548 - solee2@illinois.edu<br />
                        Chloe Ortalo-Magne (sister) – 6087707617 – chloeom12@gmail.com<br /><br /><br /><br />
                    </p>
                </div>

            </div>
        )
    }
}
