import React, { Component } from 'react'
import styles from './styles/Skills.module.css'
import fstyles from './styles/Frontend.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect/dist/core'


export default class Frontend extends Component {

    componentDidMount() {

        new Typewriter(document.getElementById('frontendtype'), { delay: 70 })
            .pauseFor(500)
            .typeString('SOCIAL MEDIA MOVES FORWARD')
            .start();

        document.getElementById("frontendthemecolor").style.setProperty('--theme-color', this.props.color);
    }

    render() {
        return (
            <div id="frontendthemecolor" className={styles.themecolor} style={{}}>
                <div id='content' />
                <p id="back" onClick={() => this.props.back("categories")} className={styles.back}>back</p>
                {/* <div className={bstyles.top} /> */}
                <h1 id='frontendtype' className={styles.title} style={{ color: 'black' }}></h1>
                <p className={styles.joursubtitle}>Benoit Ortalo-Magne &emsp;&emsp; 4/19/21</p>
                <div className={styles.jourtext}>
                    <p>As we quickly approach the midpoint of 2021, it’s worth considering which social media
                    platforms gained popularity, which ones fell behind, and which have stayed constant. Considering
                    the added effects of the Covid-19 pandemic, there could easily have been a shift in popularity.
                    Some may have taken advantage of it and leveraged the quarantine to draw users in, while others
                    missed the wave. With the help of Pew Research Center’s data, I’ll take a deeper look into the
                    balance of the most popular platforms.<br /><br />
                    In their article Social Media Use in 2021, Pew Research presents an interesting graphic
                    which shows the popularity of social media platforms over the years. Unsurprisingly, Facebook is
                    still used by a majority of U.S. adults, with 69% claiming to have used it in the past year. YouTube
                    is also a popular one with 81% reporting recent activity on the platform. A remarkable difference
                    between the two, however, is YouTube’s growth from around 73% in 2019 to its new high today,
                    while Facebook’s user numbers have stayed constant since 2016. In smaller numbers, platforms
                    like Instagram, Pinterest, LinkedIn, etc. continue to grow slowly.<br /><br />
                    To validate these claims, I asked Olivia Sheng to comment on her age group’s involvement
                    with these platforms. As a senior in high school, she said “Yeah everyone uses Facebook, all the
                    sports have a page and the school uses it to announce events and things like that. Most of us use
                    Insta and Snap for daily lives, Twitter isn’t really a big one, and a lot of people are starting to make
                    LinkedIn profiles now”. She also mentioned that YouTube is the platform used by everyone
                    regardless of their involvement in other platforms, most since middle school. This seems to align
                    with the findings of the paper, confirming the rise of YouTube, Instagram, and Snapchat.
                    Interestingly, Facebook remains constant, which must mean those that use it in high school end
                    up leaving it or users are filtering out at about the same rate.<br /><br />
                    Looking further, Pew Research Center presents another diagram, this one describing the
                    age ranges for users of these platforms. It seems that Facebook has a fairly even spread of users,
                    while others like Snapchat and Instagram tend heavily towards the younger generation. Looking
                    to confirm this, I contacted Sarah Baker, a senior citizen living in Colorado. She told me she joined
                    Facebook a few years ago to keep in touch with her friends that don’t live in the same town as
                    her but doesn’t use any other sites. Perhaps their simple interface lends itself to seniors better
                    than their competitors’ platforms.<br /><br />
                    With Covid-19 affecting many people’s lives, it’s no surprise we see shifts in user activity
                    on social media platforms. It seems YouTube has solidified itself in our lives, while Facebook
                    continues to maintain its user base as well. Perhaps we will see new additions like TikTok or
                    Nextdoor emerge in the next few years as well.<br /><br /><br />
                    </p>
                    <p>
                        <u>Sources:</u><br />
                    https://www.pewresearch.org/internet/2021/04/07/social-media-use-in-2021/<br />
                    https://www.pewresearch.org/internet/2021/04/07/social-media-use-in-2021/pi_2021-
                    04-07_social-media_0-01/<br />
                    https://www.pewresearch.org/internet/2021/04/07/social-media-use-in-2021/pi_2021-
                    04-07_social-media_0-02a/<br /><br />
                        <u>Interviews:</u><br />
                    Olivia Sheng – friend, phone call – oliviashengy@gmail.com<br />
                    Sarah Baker – family, phone call – skflbaker@yahoo.com<br /><br /><br /><br />
                    </p>
                </div>

            </div>
        )
    }
}
