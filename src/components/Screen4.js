import { Image } from "antd"
import dfi from '../assets/img/dfi.png'
import osmosis from '../assets/img/osmosis.png'
import juno from '../assets/img/juno.png'
import notional from '../assets/img/notional.png'
import notional2 from '../assets/img/notional2.png'

const Screen4 = ({ }) => {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: '100px'
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
                    <Image src={dfi} preview={false} width={400} />
                </div>
                <div className="logo">
                    <Image src={osmosis} preview={false} width={400} />
                </div>
                <div className="logo">
                    <Image src={juno} preview={false} width={150} />
                </div>
            </div>
            <div className="logo" style={{ marginTop: '100px' }}>
                <Image src={notional} preview={false} width={100} style={{
                    border: 'solid 1px white',
                    borderRadius: '10px'
                }} />
                <span style={{
                    marginLeft: '20px'
                }}>
                    <Image src={notional2} preview={false} width={200} />
                </span>
            </div>
        </div>
    )
}

export default Screen4