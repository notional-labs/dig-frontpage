import { Image } from "antd"
import github from '../assets/img/github.png'
import tele from '../assets/img/tele.png'
import twitter from '../assets/img/twitter.png'
import discord from '../assets/img/discord.png'
import dis from '../assets/img/diss.png'
import aos from 'aos'
import { useEffect } from 'react'

const Screen6 = ({ }) => {

    useEffect(() => {
        aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div style={{
            paddingLeft: '200px',
            paddingRight: '200px'
        }}>
            <div
                data-aos="fade"
                style={{
                    marginTop: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: '50px'
                }}>
                <p style={{
                    fontWeight: 'bold',
                    fontSize: '64px',
                    color: '#EEC13F'
                }}>
                    Follow us on
                </p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <a
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    href='https://github.com/notional-labs/'
                    target={'_blank'}>
                    <Image src={github} preview={false} width={120} />
                </a>
                <a
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    href='https://t.me/digchain_official'
                    target={'_blank'}>
                    <Image src={tele} preview={false} width={120} />
                </a>
                <a
                    data-aos="zoom-in"
                    data-aos-delay="1500"
                    href='https://twitter.com/Dig_Chain'
                    target={'_blank'}>
                    <Image src={twitter} preview={false} width={120} />
                </a>
                <a
                    data-aos="zoom-in"
                    data-aos-delay="2000"
                    href='https://discord.gg/R44XTwfbmU' 
                    target={'_blank'}>
                    <Image src={dis} preview={false} style={{
                        borderRadius: '50%'
                    }} width={120} />
                </a>
            </div>
        </div>
    )
}

export default Screen6