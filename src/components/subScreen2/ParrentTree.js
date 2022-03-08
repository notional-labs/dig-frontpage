import { Image } from "antd"
import dig from '../../assets/img/dig.png'
import uk from '../../assets/img/uk.png'
import thai from '../../assets/img/thai.png'
import cayman from '../../assets/img/cayman.png'
import ukraine from '../../assets/img/ukraine.png'
import vietnam from '../../assets/img/vietnam.png'

const ParentTree = ({ }) => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    border: 'solid 1px #FFAC38',
                    padding: 20,
                    borderRadius: '50%'
                }}>
                    <Image src={dig}
                        preview={false}
                        width={200}
                        style={{
                            border: 'solid 1px #ffffff',
                            borderRadius: '50%'
                        }}
                    />
                </div>
            </div>
            <div style={{
                borderLeft: 'solid 1px #FFAC38',
                minHeight: '150px',
                maxWidth: '1px',
                margin: 'auto'
            }}>

            </div>
            <div style={{
                borderTop: 'solid 1px #FFAC38',
                minHeight: '1px',
                maxWidth: '70%',
                margin: 'auto'
            }}>

            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',

            }}>
                <div style={{
                    position: 'relative',
                    left: '15%'
                }}>
                    <div style={{
                        borderLeft: 'solid 1px #FFAC38',
                        minHeight: '150px',
                        maxWidth: '1px',
                    }}>

                    </div>
                    <div style={{
                        border: 'solid 1px #FFAC38',
                        padding: 20,
                        borderRadius: '50%'
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
                </div>
                <div style={{
                    position: 'relative',
                    left: '20%'
                }}>
                    <div style={{
                        borderLeft: 'solid 1px #FFAC38',
                        minHeight: '150px',
                        maxWidth: '1px',
                    }}>

                    </div>
                    <div style={{
                        border: 'solid 1px #FFAC38',
                        padding: 20,
                        borderRadius: '50%'
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
                </div>
                <div style={{
                    position: 'relative',
                    left: '26.8%',
                }}>
                    <div style={{
                        borderLeft: 'solid 1px #FFAC38',
                        minHeight: '150px',
                        maxWidth: '1px',
                    }}>

                    </div>
                    <div style={{
                        border: 'solid 1px #FFAC38',
                        padding: 20,
                        borderRadius: '50%'
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
                </div>
                <div style={{
                    position: 'relative',
                    left: '67.5%'
                }}>
                    <div style={{
                        borderLeft: 'solid 1px #FFAC38',
                        minHeight: '150px',
                        maxWidth: '1px',
                    }}>

                    </div>
                    <div style={{
                        border: 'solid 1px #FFAC38',
                        padding: 20,
                        borderRadius: '50%'
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
                </div>
                <div style={{
                    position: 'relative',
                    left: '80%'
                }}>
                    <div style={{
                        borderLeft: 'solid 1px #FFAC38',
                        minHeight: '150px',
                        maxWidth: '1px',
                    }}>

                    </div>
                    <div style={{
                        border: 'solid 1px #FFAC38',
                        padding: 20,
                        borderRadius: '50%'
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
                </div>
            </div>
        </div>
    )
}

export default ParentTree