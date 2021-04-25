import React, { Component } from 'react'
import styles from './styles/Skills.module.css'
import dstyles from './styles/Design.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect/dist/core'


export default class Design extends Component {

    componentDidMount() {

        new Typewriter(document.getElementById('frontendtype'), { delay: 70 })
            .pauseFor(500)
            .typeString('GETTING AN INSIDE LOOK AT RESELLING')
            .start();

        document.getElementById("designthemecolor").style.setProperty('--theme-color', this.props.color);
    }

    render() {
        return (
            <div id="designthemecolor" className={styles.themecolor}>
                <div id='content' />
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                {/* <div className={bstyles.top} /> */}
                <h1 id='frontendtype' className={styles.title} style={{ color: 'black' }}></h1>
                <p className={styles.joursubtitle}>Benoit Ortalo-Magne &emsp;&emsp; 3/7/21</p>
                <div className={styles.jourtext}>
                    <p>In the past few years, companies like Nike, Adidas, Yeezy, Jordan, Off-White, and more have been releasing
                    limited edition sneakers. This scarcity has created incredible demand, and the market has started to grow
                    incredibly quickly. By 2025, it is projected to be worth around six billion dollars.<br /><br />
                    Acquiring, or “copping”, these shoes, however, is no simple feat. With the promise of large profits, many
                    will employ methods that could be considered borderline illegal. The most common way is using bots, or
                    pieces of software, to checkout these shoes incredibly fast, sometimes within milliseconds.<br /><br />
                    Today, I’m talking to Cedric, who’s been reselling sneakers for a little over a year. She’s learned a lot,
                    gotten much more consistent at copping, and even recently purchased a bot in hopes of increasing her
                    profits.<br /><br />
                        <u>Interviewer</u>: Tell me about how it all started.<br /><br />
                        <u>Cedric</u>: Well one of my friends introduced me to the world of sneakers. He explained to me how if you can
                    get the shoes for retail, resell value will often be higher. Once I knew about it, I very quickly found myself
                    checking release dates, looking at market prices, just generally interested in these shoes. I got started
                    going for Nike drops but didn’t do great. They just do a sort of raffle, so your chances of winning are always
                    up to luck. From there, I started getting on other sites, entering raffles, and eventually started seeing more
                    success.<br /><br />
                        <u>Interviewer</u>: Are you able to get every shoe now?<br /><br />
                        <u>Cedric</u>: Not even close! Some sneakers are limited to as little as just one pair and basically impossible to
                    get. Most people I know get a shoe every few drops, but those that really know what they’re doing still
                    strike out every now and then. It’s never an easy cop if the shoes are worth it.<br /><br />
                        <u>Interviewer</u>: What’s the best sneaker you’ve gotten?<br /><br />
                        <u>Cedric</u>: I’d have to say the Off-White Jordan 4 Sail. Collaborations between Off-White and Jordan are
                    always extremely hype and go for crazy amounts. This one was no exception, and after entering as many
                    entries as we possibly could, managed to score only a single pair. At the time of release, the resale price
                    was over one thousand dollars, and has most likely only gone up from there. It was a big win!<br /><br />
                        <u>Interviewer</u>: Is that your favorite shoe then?<br /><br />
                        <u>Cedric</u>: Just because they’re expensive doesn’t mean I personally like them. To be honest, a lot of the
                    shoes I go for I would never wear. Sneakers definitely have a fashion aspect too, and Off-White just isn’t
                    my style. My favorite brand is Fear of God, and the Nike Fear of God 1 is by far my favorite. Unfortunately,
                    they will set me back around five hundred dollars so I’m still looking for those.<br /><br />
                        <u>Interviewer</u>: I know you just bought your first bot, how has that been going?<br /><br />
                        <u>Cedric</u>: Bots have a steep learning curve. After not using one for about a year, I decided that it was time to
                    start figuring it out. Whether they’re ethically good or not is a bit controversial so I was hesitant at first, but
                    some sites are so heavily botted these days that it’s impossible for users to cop without one. So far, I
                    haven’t had much success but with each drop I find something to improve for next time. Hopefully I can
                    get fast enough that I’ll be consistent on more sites and start being able to get more shoes.<br /><br />
                        <u>Interviewer</u>: Do you plan to continue reselling in the future?<br /><br />
                        <u>Cedric</u>: For the time being yes, and to be honest I don’t see why I wouldn’t. Every now and then you get
                    lucky and hit a shoe worth a thousand or more. It also feels good to cop the sneakers and even if I don’t
                    wear them, they’re still nice to look at!<br /><br /><br /><br />
                    </p>
                </div>
            </div>
        )
    }
}
