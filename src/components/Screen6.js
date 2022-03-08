import { Image } from "antd"
import github from '../assets/img/github.png'
import tele from '../assets/img/tele.png'
import twitter from '../assets/img/twitter.png'
import discord from '../assets/img/discord.png'
import dis from '../assets/img/diss.png'

const Screen6 = ({ }) => {
    return (
        <div style={{
            paddingLeft: '200px',
            paddingRight: '200px'
        }}>
            <div style={{
                marginTop: '300px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: '50px'
            }}>
                <p style={{
                    fontWeight: 'bold',
                    fontSize: '120px',
                    color: '#EEC13F'
                }}>
                    Follow us on
                </p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <a href='https://github.com/notional-labs/' target={'_blank'}>
                    <Image src={github} preview={false} width={120}/>
                </a>
                <a href='https://t.me/digchain_official' target={'_blank'}>
                    <Image src={tele} preview={false} width={120}/>
                </a>
                <a href='https://twitter.com/Dig_Chain' target={'_blank'}>
                    <Image src={twitter} preview={false} width={120}/>
                </a>
                <a href='https://discord.gg/R44XTwfbmU' target={'_blank'}>
                    <Image src={dis} preview={false} style={{
                        borderRadius: '50%'
                    }} width={120}/>
                </a>
            </div>
        </div>
    )
}

export default Screen6