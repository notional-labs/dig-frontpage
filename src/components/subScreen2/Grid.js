import { Image } from 'antd'
import grid1 from '../../assets/img/grid1.png'
import grid2 from '../../assets/img/grid2.png'
import grid3 from '../../assets/img/grid3.png'
import grid4 from '../../assets/img/grid4.png'

const Grid = ({ }) => {
    return (
        <div style={{
            display: 'inline-block',
            paddingLeft: '250px',
            paddingRight: '250px',
            marginTop: '300px',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridRowGap: '100px',
                gridColumnGap: '200px'
            }}>
                <div>
                    <Image src={grid1} preview={false} />
                    <p style={{
                        color: '#EEC13F',
                        fontSize: '44px',
                        fontWeight: 700,
                        display: 'block'
                    }}>
                        Compliant
                    </p>
                    <p style={{
                        color: '#ffffff',
                        fontSize: '24px',
                        fontWeight: 400,
                        display: 'block'
                    }}>
                        Dig chains are geo-fenced to ensure
                        compliance with local regulatory regimes.
                    </p>
                </div>
                <div>
                    <Image src={grid2} preview={false} />
                    <p style={{
                        color: '#EEC13F',
                        fontSize: '44px',
                        fontWeight: 700,
                        display: 'block'
                    }}>
                        Reusable
                    </p>
                    <p style={{
                        color: '#ffffff',
                        fontSize: '24px',
                        fontWeight: 400,
                        display: 'block'
                    }}>
                        Dig chains are 100% open-source and can be reinstantiated to create new regional sentry chains.
                    </p>
                </div>
                <div>
                    <Image src={grid3} preview={false} />
                    <p style={{
                        color: '#EEC13F',
                        fontSize: '44px',
                        fontWeight: 700,
                        display: 'block'
                    }}>
                        Governance-enabled
                    </p>
                    <p style={{
                        color: '#ffffff',
                        fontSize: '24px',
                        fontWeight: 400,
                        display: 'block'
                    }}>
                        Each Dig chain has a Cosmos-based governance module built-in, enabling community ownership over real estate projects.
                    </p>
                </div>
                <div>
                    <Image src={grid4} preview={false} />
                    <p style={{
                        color: '#EEC13F',
                        fontSize: '44px',
                        fontWeight: 700,
                        display: 'block'
                    }}>
                        Smart Contracts
                    </p>
                    <p style={{
                        color: '#ffffff',
                        fontSize: '24px',
                        fontWeight: 400,
                        display: 'block'
                    }}>
                        Code and deploy contracts on Dig Chain in the CosmWasm (CW)
                        contract framework.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Grid