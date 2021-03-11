//for subsection with half side containing picture

function Picture(props) {
    return (
        <div className='subsection' 
            style={{
                backgroundImage: `url(${props.src})`,
                display: 'flex'
            }}
        />
    )
}

export default Picture;