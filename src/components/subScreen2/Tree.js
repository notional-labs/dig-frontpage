import { Tree, TreeNode } from 'react-organizational-chart';
import { Image } from "antd"
import dig from '../../assets/img/dig.png'
import uk from '../../assets/img/uk.png'
import thai from '../../assets/img/thai.png'
import cayman from '../../assets/img/cayman.png'
import ukraine from '../../assets/img/ukraine.png'
import vietnam from '../../assets/img/vietnam.png'

const TreeGraph = ({ }) => {
    return (
        <div style={{
            padding: 300,
            paddingTop: 0,
            paddingBottom: 0
        }}>
            <Tree
                lineWidth={'2px'}
                lineHeight={'130px'}
                lineColor={'#FFAC38'}
                lineBorderRadius={'10px'}
                label={<div style={{
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
                    <div style={{
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
                    }}>
                        View
                    </button>
                </div>}>

                </TreeNode>
                <TreeNode label={<div>
                    <div style={{
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
                    }}>
                        View
                    </button>
                </div>}>

                </TreeNode>
                <TreeNode label={<div>
                    <div style={{
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
                    }}>
                        View
                    </button>
                </div>}>

                </TreeNode>
                <TreeNode label={<div>
                    <div style={{
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
                    }}>
                        View
                    </button>
                </div>}>

                </TreeNode>
                <TreeNode label={<div>
                    <div style={{
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