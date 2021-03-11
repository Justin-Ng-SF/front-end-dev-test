import './style.css';

function Icons(props) {
    return (
        <div className='icons'>
            <a href={props.link}>
                <div className='outter'>
                    <img className='icon' src={props.icon}/>
                </div>
                <div className='icon-id'>
                {props.id}
                </div>
            </a>
        </div>
    )
}

export default Icons;