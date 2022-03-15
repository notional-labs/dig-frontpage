import { Image } from "antd"
import icon from '../assets/img/vector2.png'
import Roadmap from "./subScreen3/Roadmap"
import aos from 'aos'
import { useEffect } from 'react'

const Screen3 = ({ }) => {

    useEffect(() => {
        aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div>
            <div
                data-aos="fade"
                style={{
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
            <Roadmap />
        </div>
    )
}

export default Screen3