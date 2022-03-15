import { Image } from "antd"
import icon from '../assets/img/vector.png'
import Tree from "./subScreen2/Tree"
import Grid from "./subScreen2/Grid"
import aos from 'aos'
import { useEffect } from 'react'

const Screen2 = ({ }) => {

    useEffect(() => {
        aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div>
            <div style={{
                marginTop: '200px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <p
                    data-aos="fade"
                    style={{
                        fontWeight: 700,
                        fontSize: '100px',
                        color: '#EEC13F'
                    }}>
                    Dig Parent Chain
                </p>
                <Image src={icon}
                    width={90}
                    preview={false}
                    style={{
                        marginLeft: '20px'
                    }} />
            </div>
            <Tree />
            <p
                data-aos="fade"
                data-aos-delay="500"
                style={{
                    fontWeight: 400,
                    fontSize: '20px',
                    color: '#ffffff',
                    marginTop: '300px',
                    padding: 250,
                    paddingTop: 0,
                    paddingBottom: 0
                }}>
                Dig Chain is a governance-focused layer-1 blockchain that acts as a hub for numerous regional Dig chains, each designed to facilitate the tokenization of real estate. Dig Chain will also enable CW20 smart contracts.
            </p>
            <br />
            <p
                data-aos="fade"
                data-aos-delay="1000"
                style={{
                    fontWeight: 400,
                    fontSize: '20px',
                    color: '#ffffff',
                    padding: 250,
                    paddingTop: 0,
                    paddingBottom: 0
                }}>
                The reason various regional blockchains are necessary is simple: regulations surrounding real estate are different in different jurisdictions. Each blockchain will be geo-fenced to a particular jurisdiction to ensure it can be compliant with local regulations.
                <br />
            </p>
            <p
                data-aos="fade"
                data-aos-delay="1500"
                style={{
                    fontWeight: 400,
                    fontSize: '20px',
                    color: '#ffffff',
                    padding: 250,
                    paddingTop: 0,
                    paddingBottom: 0
                }}>
                They will all connect seamlessly to the hub Dig Chain via IBC (inter-blockchain communication).
            </p>
            <Grid />
        </div >
    )
}

export default Screen2