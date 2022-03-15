import { Tree, TreeNode } from 'react-organizational-chart';
import { Image } from "antd"
import dig from '../../assets/img/dig.png'
import uk from '../../assets/img/uk.png'
import thai from '../../assets/img/thai.png'
import cayman from '../../assets/img/cayman.png'
import ukraine from '../../assets/img/ukraine.png'
import vietnam from '../../assets/img/vietnam.png'
import aos from 'aos'
import { useEffect } from 'react'

const TreeGraph = ({ }) => {

    useEffect(() => {
        aos.init({
            duration: 2000
        })
    }, [])

    return (
        <div style={{
            padding: '0em 150px 0em 150px'
        }}>
            <Tree
                lineWidth={'2px'}
                lineHeight={'130px'}
                lineColor={'#FFAC38'}
                lineBorderRadius={'10px'}
                label={<div
                    data-aos="fade-down"
                    style={{
                        border: 'solid 1px #FFAC38',
                        padding: 20,
                        borderRadius: '50%',
                        display: 'inline-block'
                    }}>
                    <Image src={dig}
                        preview={false}
                        width={200}
                        style={{
                            border: 'solid 1px #ffffff',
                            borderRadius: '50%'
                        }}
                    />
                </div>}
            >
                <TreeNode label={<div >
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        style={{
                            border: 'solid 1px #FFAC38',
                            padding: 20,
                            borderRadius: '50%',
                            display: 'inline-block'
                        }}>
                        <Image src={uk}
                            preview={false}
                            width={170}
                            style={{
                                border: 'solid 1px #ffffff',
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                    <p style={{
                        color: '#EEC13F',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        marginTop: '50px'
                    }}>
                        Dig UK
                    </p>
                    <button style={{
                        color: '#ffffff',
                        borderRadius: '10px',
                        backgroundImage: 'Linear-Gradient(#EEC13F 0%,#FFAC38 100%)',
                        padding: '2em',
                        paddingTop: '1em',
                        paddingBottom: '1em',
                        fontSize: '16px',
                        border: 'none'
                    }}>
                        View
                    </button>
                </div>}>

                </TreeNode>
                <TreeNode label={<div>
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="1000"
                        style={{
                            border: 'solid 1px #FFAC38',
                            padding: 20,
                            borderRadius: '50%',
                            display: 'inline-block'
                        }}>
                        <Image src={thai}
                            preview={false}
                            width={170}
                            style={{
                                border: 'solid 1px #ffffff',
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                    <p style={{
                        color: '#EEC13F',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        marginTop: '50px'
                    }}>
                        Dig Thailand
                    </p>
                    <button style={{
                        color: '#ffffff',
                        borderRadius: '10px',
                        backgroundImage: 'Linear-Gradient(#EEC13F 0%,#FFAC38 100%)',
                        padding: '2em',
                        paddingTop: '1em',
                        paddingBottom: '1em',
                        fontSize: '16px',
                        border: 'none'
                    }}>
                        View
                    </button>
                </div>}>

                </TreeNode>
                <TreeNode label={<div>
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="1500"
                        style={{
                            border: 'solid 1px #FFAC38',
                            padding: 20,
                            borderRadius: '50%',
                            display: 'inline-block'
                        }}>
                        <Image src={cayman}
                            preview={false}
                            width={170}
                            style={{
                                border: 'solid 1px #ffffff',
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                    <p style={{
                        color: '#EEC13F',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        marginTop: '50px'
                    }}>
                        Dig Cayman
                    </p>
                    <button style={{
                        color: '#ffffff',
                        borderRadius: '10px',
                        backgroundImage: 'Linear-Gradient(#EEC13F 0%,#FFAC38 100%)',
                        padding: '2em',
                        paddingTop: '1em',
                        paddingBottom: '1em',
                        fontSize: '16px',
                        border: 'none'
                    }}>
                        View
                    </button>
                </div>}>

                </TreeNode>
                <TreeNode label={<div>
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="2000"
                        style={{
                            border: 'solid 1px #FFAC38',
                            padding: 20,
                            borderRadius: '50%',
                            display: 'inline-block'
                        }}>
                        <Image src={ukraine}
                            preview={false}
                            width={170}
                            style={{
                                border: 'solid 1px #ffffff',
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                    <p style={{
                        color: '#EEC13F',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        marginTop: '50px'
                    }}>
                        Dig Ukraine
                    </p>
                    <button style={{
                        color: '#ffffff',
                        borderRadius: '10px',
                        backgroundImage: 'Linear-Gradient(#EEC13F 0%,#FFAC38 100%)',
                        padding: '2em',
                        paddingTop: '1em',
                        paddingBottom: '1em',
                        fontSize: '16px',
                        border: 'none'
                    }}>
                        View
                    </button>
                </div>}>

                </TreeNode>
                <TreeNode label={<div>
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="2500"
                        style={{
                            border: 'solid 1px #FFAC38',
                            padding: 20,
                            borderRadius: '50%',
                            display: 'inline-block'
                        }}>
                        <Image src={vietnam}
                            preview={false}
                            width={170}
                            style={{
                                border: 'solid 1px #ffffff',
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                    <p style={{
                        color: '#EEC13F',
                        fontWeight: 'bold',
                        fontSize: '24px',
                        marginTop: '50px'
                    }}>
                        Dig Vietnam
                    </p>
                    <button style={{
                        color: '#ffffff',
                        borderRadius: '10px',
                        backgroundImage: 'Linear-Gradient(#EEC13F 0%,#FFAC38 100%)',
                        padding: '2em',
                        paddingTop: '1em',
                        paddingBottom: '1em',
                        fontSize: '16px',
                        border: 'none'
                    }}>
                        View
                    </button>
                </div>}>

                </TreeNode>
            </Tree>
        </div>
    )
}

export default TreeGraph