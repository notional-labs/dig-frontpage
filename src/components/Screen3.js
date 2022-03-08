import { Image } from "antd"
import icon from '../assets/img/vector2.png'
import Roadmap from "./subScreen3/Roadmap"

const Screen3 = ({}) => {
    return(
        <div>
            <div style={{
                marginTop: '300px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: '400px'
            }}>
                <p style={{
                    fontWeight: 700,
                    fontSize: '100px',
                    color: '#EEC13F'
                }}>
                    ROADMAP
                </p>
                <Image src={icon}
                    width={90}
                    preview={false}
                    style={{
                        marginLeft: '20px',
                        marginTop: '40px'
                    }} />
            </div>
            <Roadmap/>
        </div>
    )
}

export default Screen3