
const Effect = ({x, y}) => {
    const style = {
        div: {
            position: 'absolute',
            zIndex: 1,
            left: `${x}px`,
            top: `${y}px`,
            width: '100%' 
        }
    }
     
    return (
        <div style={style.div}>
            <div className="effect" >

            </div>
        </div>
    )
}

export default Effect