import roadmap from '../../assets/img/roadmap.png'
import icon from '../../assets/img/roadmap2.png'
import line from '../../assets/img/line.png'
import shadow from '../../assets/img/shadow.png'
import { Image } from 'antd'

const Roadmap = ({ }) => {
    return (
        <div>
            <Image src={roadmap} preview={false} />
            <div style={{
                display: 'block',
                position: 'absolute',
                width: '200px',
                top: '5000px',
                left: '350px'
            }}>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Q3 2021
                </p>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Development and Airdrop
                </p>
                <p style={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 400,
                    marginBottom: '50px'
                }}>
                    Dig Chain is being built using Starport on Cosmos SDK. The first testnet of Dig Chain was connected to 8 other blockchains in the Cosmos ecosystem. This has gathered some serious attention for the project already.
                </p>
                <Image src={icon} preview={false} width={100} />
                <br />
                <Image src={line} preview={false} />
                <br/>
                <Image src={shadow} preview={false} style={{
                    position: 'relative',
                    top: '-40px',
                    left: '-40px'
                }}/>
            </div>
            <div style={{
                display: 'block',
                position: 'absolute',
                width: '200px',
                top: '5200px',
                left: '600px'
            }}>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Q4 2021
                </p>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Liquidity Pools and Building Validator Community
                </p>
                <p style={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 400,
                    marginBottom: '50px'
                }}>
                    Dig Chain is a Proof-of-Stake (PoS) blockchain, meaning it requires validators to secure the chain. Community members can run their own validators and add to liquidity pools on the Osmosis DEX.
                </p>
                <Image src={icon} preview={false} width={100} />
                <br />
                <Image src={line} preview={false} />
                <br/>
                <Image src={shadow} preview={false} style={{
                    position: 'relative',
                    top: '-40px',
                    left: '-40px'
                }}/>
            </div>
            <div style={{
                display: 'block',
                position: 'absolute',
                width: '200px',
                top: '5100px',
                left: '850px'
            }}>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Q1 2022
                </p>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Finding First Real Estate Development
                </p>
                <p style={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 400,
                    marginBottom: '50px'
                }}>
                    The Dig Chain community will work with the Cosmos community and others to find a suitable real estate development. This will open real estate to retail investors of all sizes.
                </p>
                <Image src={icon} preview={false} width={100} />
                <br />
                <Image src={line} preview={false} />
                <br/>
                <Image src={shadow} preview={false} style={{
                    position: 'relative',
                    top: '-40px',
                    left: '-40px'
                }}/>
            </div>
            <div style={{
                display: 'block',
                position: 'absolute',
                width: '200px',
                top: '4990px',
                left: '1100px'
            }}>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Q2 2022
                </p>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Growing Globally and Marketing
                </p>
                <p style={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 400,
                    marginBottom: '50px'
                }}>
                    Growing  Dig's baby chains into various regions of the world to comply with local regulations and bringing more projects into the chain. Marketing efforts will intensify in tandem with partnerships and project successes.
                </p>
                <Image src={icon} preview={false} width={100} />
                <br />
                <Image src={line} preview={false} />
                <br/>
                <Image src={shadow} preview={false} style={{
                    position: 'relative',
                    top: '-40px',
                    left: '-40px'
                }}/>
            </div>
            <div style={{
                display: 'block',
                position: 'absolute',
                width: '200px',
                top: '5200px',
                left: '1300px'
            }}>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Q2 2022
                </p>
                <p style={{
                    color: '#EEC13F',
                    fontSize: '24px',
                    fontWeight: 700,
                    padding: 0,
                    margin: 0
                }}>
                    Major Partnerships
                </p>
                <p style={{
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: 400,
                    marginBottom: '50px'
                }}>
                    Making major partnerships with real estate developers and real estate brokers to expand the project's scope into mainstream adoption.
                </p>
                <Image src={icon} preview={false} width={100} />
                <br />
                <Image src={line} preview={false} />
                <br/>
                <Image src={shadow} preview={false} style={{
                    position: 'relative',
                    top: '-40px',
                    left: '-40px'
                }}/>
            </div>
        </div>
    )
}
export default Roadmap