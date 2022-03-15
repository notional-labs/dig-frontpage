import { Image } from "antd"
import dfi from '../assets/img/dfi.png'
import osmosis from '../assets/img/osmosis.png'
import juno from '../assets/img/juno.png'
import notional from '../assets/img/notional.png'
import notional2 from '../assets/img/notional2.png'
import aos from 'aos'
import { useEffect } from 'react'

const Screen4 = ({ }) => {

    useEffect(() => {
        aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div>
            <div
                data-aos="fade"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: '200px'
                }}>
                <p style={{
                    fontWeight: 'bold',
                    fontSize: '100px',
                    color: '#EEC13F'
                }}>
                    PARTNERS
                </p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',

            }}>
                <div className="logo">
                    <Image src={notional} preview={false} width={150} style={{
                        border: 'solid 1px white',
                        borderRadius: '10px'
                    }} />
                    <span style={{
                        marginLeft: '20px'
                    }}>
                        <Image src={notional2} preview={false} width={300} />
                    </span>
                </div>
                <div className="logo">
                    <Image src={dfi} preview={false} width={500} />
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: '100px',
                marginTop: '200px'
            }}>
                <p style={{
                    fontWeight: 'bold',
                    fontSize: '64px',
                    color: '#EEC13F'
                }}>
                    DEX
                </p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',

            }}>
                <div className="logo">
                    <Image src={osmosis} preview={false} width={500} />
                </div>
                <div className="logo">
                    <Image src={juno} preview={false} width={200} />
                </div>
            </div>
        </div>
    )
}

export default Screen4