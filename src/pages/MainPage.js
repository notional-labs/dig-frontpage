import Effect from "../components/Effect"
import Screen1 from "../components/Screen1"
import Screen2 from "../components/Screen2"
import Screen3 from "../components/Screen3"

const style = {
    nav: {
        color: '#ffffff',
    }
}

const MainPage = () => {
    return (
        <div style={{ fontFamily: 'Montserrat' }}>
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
            {/* <Effect x={400} y={-400} /> */}
        </div>
    )
}

export default MainPage