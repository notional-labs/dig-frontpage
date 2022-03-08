import title from '../assets/img/title.png'
import { Image } from 'antd'

const style = {
    container: {
        textAlign: 'center',
        paddingTop: '100px'
    },
    button: {
        border: 0,
        backgroundImage: 'Linear-Gradient(#EEC13F 0%, #FFAC38 100%)',
        padding: '0.7em',
        color: '#ffffff',
        fontWeight: 400,
        fontSize: '24px',
        borderRadius: '10px',
        margin: '10px'
    }
}

const Screen1 = ({ }) => {
    return (
        <div style={style.container}>
            <Image
                src={title}
                width={600}
                preview={false}
            />
            <p style={{
                fontWeight: 700,
                fontSize: '44px',
                color: '#EEC13F',
                marginTop: '50px'
            }}>
                Tokenized real estate on the Cosmos Network
            </p>
            <p style={{
                fontWeight: 400,
                fontSize: '24px',
                color: '#ffffff',
                marginTop: '50px',
                padding: 450,
                paddingTop: 0,
                paddingBottom: 0
            }}>
                Dig will create IBC-compatible real estate and apply Cosmos governance to real world projects. It's compatible with many legal regimes because it’s going to break the network into smaller, jurisdictionally compliant chains.
            </p>
            <div style={{
                marginTop: '50px'
            }}>
                <a href="https://app.digchain.org/" target={'_blank'}>
                    <button style={style.button}>
                        Open dApp
                    </button>
                </a>
                <a href="https://github.com/notional-labs/dig/blob/master/docs/whitepaper.md" target={'_blank'}>
                    <button style={style.button}>
                        White paper
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Screen1