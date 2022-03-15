import title from '../assets/img/title.png'
import { Image, Button } from 'antd'
import aos from 'aos'
import { useEffect } from 'react'

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
        fontSize: '20px',
        borderRadius: '10px',
        margin: '10px',
        cursor: 'pointer'
    }
}

const Screen1 = ({}) => {

    useEffect(() => {
        aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div style={style.container}>
            <Image
                data-aos="fade-down"
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
                fontSize: '20px',
                color: '#ffffff',
                marginTop: '50px',
                padding: 250,
                paddingTop: 0,
                paddingBottom: 0
            }}>
                Dig will create IBC-compatible real estate and apply Cosmos governance to real world projects. It's compatible with many legal regimes because it’s going to break the network into smaller, jurisdictionally compliant chains.
            </p>
            <div style={{
                marginTop: '50px'
            }}>
                <a href="https://app.digchain.org/" target={'_blank'}>
                    <button style={style.button} className="hover-button">
                        Open dApp
                    </button>
                </a>
                <a href="https://github.com/notional-labs/dig/blob/master/docs/whitepaper.md" target={'_blank'}>
                    <button style={style.button} className="hover-button">
                        White paper
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Screen1