import Effect from "../components/Effect"
import Screen1 from "../components/Screen1"
import Screen2 from "../components/Screen2"
import Screen3 from "../components/Screen3"
import Screen4 from "../components/Screen4"
import Screen5 from "../components/Screen5"
import Screen6 from "../components/Screen6"
import Coin from "../components/Coin"

const style = {
    nav: {
        color: '#ffffff',
    }
}

const MainPage = () => {
    return (
        <div className="content" style={{ fontFamily: 'Montserrat', width: '100%', margin: 'auto', position: 'relative', overflow: 'hidden'}}>
            <Coin width={120} x={-25} y={3.5} opacity={0.3}/>
            <Coin width={200} x={30} y={2.5} opacity={0.5}/>
            <Coin width={400} x={-30} y={7.5} opacity={0.5}/>
            <Coin width={120} x={32} y={9} opacity={0.5}/>
            <Coin width={300} x={50} y={25} opacity={0.5}/>
            <Coin width={500} x={-45} y={48} opacity={0.5}/>
            <Coin width={200} x={50} y={81} opacity={0.5}/>
            <Coin width={1000} x={-50} y={100} opacity={0.5}/>
            <Effect x={15} y={-6} radius={1000} opacity={0.4}/>
            <Effect x={60} y={4.5} radius={1500} opacity={0.4}/>
            <Effect x={-30} y={18} radius={1000} opacity={0.4}/>
            <Effect x={10} y={26} radius={500} opacity={0.4}/>
            <Effect x={70} y={27} radius={600} opacity={0.4}/>
            <Effect x={70} y={40} radius={900} opacity={0.4}/>
            <Effect x={60} y={62} radius={400} opacity={0.4}/>
            <Effect x={40} y={63} radius={600} opacity={0.4}/>
            <Effect x={-20} y={75} radius={800} opacity={0.2}/>
            <Effect x={70} y={85} radius={1200} opacity={0.4}/>
            <ul className="nav-bar">
                <a href='https://github.com/notional-labs/dig'
                    target='_blank'
                    rel="noreferrer"
                    style={{
                        color: '#ffffff',
                        textDecoration: 'none'
                    }}
                >
                    <li>
                        Github
                    </li>
                </a>
                <a href='https://twitter.com/Dig_Chain'
                    target='_blank'
                    rel="noreferrer"
                    style={{
                        color: '#ffffff',
                        textDecoration: 'none'
                    }}
                >
                    <li>
                        Updates
                    </li>
                </a>
                <a href='https://github.com/notional-labs/dig/blob/master/docs/whitepaper.md'
                    target='_blank'
                    rel="noreferrer"
                    style={{
                        color: '#ffffff',
                        textDecoration: 'none'
                    }}
                >
                    <li>
                        Docs
                    </li>
                </a>
                <a href='https://discord.gg/R44XTwfbmU'
                    target='_blank'
                    rel="noreferrer"
                    style={{
                        color: '#ffffff',
                        textDecoration: 'none'
                    }}
                >
                    <li>
                        Discord
                    </li>
                </a>
            </ul>
            <Screen1/>
            <Screen2/>
            <Screen3/>
            <Screen4/>
            <Screen5/>
            <Screen6/>
        </div>
    )
}

export default MainPage