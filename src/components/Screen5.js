import { Carousel } from '3d-react-carousal';
import { members } from '../assets/member';
import aos from 'aos'
import { useEffect } from 'react'

const Screen5 = ({ }) => {

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
                    marginTop: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: '50px'
                }}>
                <p style={{
                    fontWeight: 'bold',
                    fontSize: '100px',
                    color: '#EEC13F'
                }}>
                    OUR TEAM
                </p>
            </div>
            <div>
                <Carousel slides={members} />
            </div>
        </div>
    )
}

export default Screen5