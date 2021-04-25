import React, { Component } from 'react'
import styles from './styles/Skills.module.css'
import bstyles from './styles/Backend.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect/dist/core'


export default class Backend extends Component {

    componentDidMount() {

        new Typewriter(document.getElementById('frontendtype'), { delay: 70 })
            .pauseFor(500)
            .typeString('FIGHTING FOR VACCINES ON CAMPUS')
            .start();

        document.getElementById("backendthemecolor").style.setProperty('--theme-color', this.props.color);
    }

    render() {
        return (
            <div id="backendthemecolor" className={styles.themecolor}>
                <div id='content' />

                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                {/* <div className={bstyles.top} /> */}
                <h1 id='frontendtype' className={styles.title} style={{ color: 'black' }}></h1>
                <p className={styles.joursubtitle}>Benoit Ortalo-Magne &emsp;&emsp; 4/3/21</p>
                <div className={styles.jourtext}>
                    <p>Covid-19 vaccines are limited everywhere, that much isn’t anything new. As time
                    continues to pass, however, people are starting to get impatient and looking for ways around the
                    current system.<br /><br />
                    Champaign-Urbana is currently in Phase 1B+ which expands eligibility to those 16 years or
                    older with health conditions. This applies to some of the campus population, but not most. The
                    rest are left to be tested twice a week, stay inside, and limit their social time.
                    With the end of the semester approaching, however, some students are looking to get
                    their shots before it’s too late. Once off campus it could be difficult to find the time and place for
                    it, as the wait for the second dose keeps you in one place for quite some time. This has exposed
                    some questionable decisions from both the students and vaccine providers.<br /><br />
                    A couple weeks back a friend of mine (who has asked to remain anonymous) explained to
                    me that there were rumors of some locations not verifying your information. Because of this, one
                    could easily register for a time slot even if you don’t qualify for the current eligible group. To
                    investigate, we loaded up the Walgreens website and were able to be “recommended for the
                    vaccine” by simply checking that we qualify per our county’s regulations. After that it was just a
                    matter of waiting until the next morning for an appointment to be released. My friend went
                    ahead and confirmed a time slot, and after receiving his vaccine told me “They asked if I am
                    allergic to anything that’s it. I just checked meet county eligibility”. With no background screening
                    at all, it almost seems too easy.<br /><br />
                    Whether this practice is morally correct is a different story entirely. For example, some
                    might say that distributing the vaccine as fast as possible is what really matters. Another
                    argument could be that if students leave campus without being vaccinated, this will spread the
                    disease and cause more harm than if they had been vaccinated ahead of some others.
                    There are plenty of reasons to oppose it too, however. Some believe that only the most at
                    risk people should have access to the vaccine at the moment, and those skipping lines are stealing
                    their doses. Furthermore, since students have free testing available, they shouldn’t need to be
                    vaccinated just yet.<br /><br />
                    To get a fresh view on the topic, I asked my sister Chloe what she thought. Due to her
                    asthma, Chloe was recently able to get her second dose and is now fully vaccinated. As someone
                    in the demographic that is being affected, I was curious to know her thoughts. When I described
                    the situation to her and asked how she felt about it, she responded “Hmm, that’s tough.
                    Obviously, it’s good that more people get access to the vaccine. As someone who waited my turn
                    even with asthma though, I’m not sure if I agree with that.” With asthma making Covid-19
                    extremely dangerous for her, it’s understandable that she wouldn’t entirely agree with it.
                    Interestingly enough, she still finds the value in quick distribution of the vaccine.
                    Another factor to consider is the timeline on which vaccines are being released. We have
                    been in Phase 1B+ for some time now, and Phase 2 is just around the corner. On April 12th, the
                    vaccine will become available to all residents of Illinois above 16 years old. This could bend the
                    argument either way, with some saying you might as well wait, and others arguing you might as
                    well get it now.<br /><br />
                    If we consider the facts, statistics from the Illinois Department of Public Heath tell us that
                    77.64% of those aged 65 and older have received the vaccine, and 33.18% of those aged 16 to 64
                    are also vaccinated. While these numbers seem promising, they have yet to reach 100%. Whether
                    by choice or not, it’s important for communities to get as close as they can to complete immunity.
                    This website provides other interesting data as well, like the total inventory of available
                    vaccines, total population vaccinated, and more, allowing us to broaden our understanding of the
                    progress that has been made and what’s still to come.<br /><br />
                    As the public grows impatient for quarantines to end and the world to return as it was,
                    we’ve seen many changes to our daily lives. Staying indoors and not being able to see our friends
                    makes it tempting to stretch rules if it means being that much closer to normal life. It’s important
                    we remember that this is a group effort, and we’ll get there much faster if we all cooperate with
                    the rules set for us.<br /><br /><br />
                    </p>
                    <p>
                        <u>Sources:</u><br />
                        https://www.dph.illinois.gov/covid19/vaccinedata?county=Illinois<br />
                        https://www.walgreens.com/findcare/vaccination/covid-19/location-screening<br /><br />
                        <u>Interviews:</u><br />
                        Chloe Ortalo-Magne – family, phone call – chloeom12@gmail.com<br />
                        Anonymous – in person interview<br /><br /><br /><br />
                    </p>
                </div>


            </div >
        )
    }
}
