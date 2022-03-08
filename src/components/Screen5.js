import { Carousel } from '3d-react-carousal';
import adam from '../assets/img/members/adam.jpg'
import jacob from '../assets/img/members/jacob.jpg'
import khanh from '../assets/img/members/khanh.jpeg'
import ricardo from '../assets/img/members/ricardo.jpg'
import billy from '../assets/img/members/billy.png'
import long from '../assets/img/members/long.jpg'
import son from '../assets/img/members/son.jpg'
import vuong from '../assets/img/members/vuong.png'
import minh from '../assets/img/members/minh.jpg'
import vinh from '../assets/img/members/vinh.jpg'
import { Image } from 'antd';
import { members } from '../assets/member';


const Screen5 = ({ }) => {
    return (
        <div>
            <div style={{
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
                <Carousel slides={members}/>
            </div>
        </div>
    )
}

export default Screen5