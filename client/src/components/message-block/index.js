import './style.css'
import 'semantic-ui-css/semantic.min.css'

function MessageBlock(props) {
    // for subsections with button
    if (props.button) {
        return (
            <div className='paragraph' id='paragraph-with-button'>
                <h2 className='paragraph-header' style={{color: props.color }}>{props.header}</h2>
                <p className='paragraph-content'>{props.content}</p>
                <a className='paragraph-link' href={props.link}>{props.link}</a>
                <button className={props.button} id='button'>Button Button</button>
            </div>
        )   
    }
    // for subsections with hyperlink
    else if(props.link){
        return (
            <div className='paragraph' id='paragraph-with-link'>
                <h2 className='paragraph-header' style={{color: props.color }}>{props.header}</h2>
                <p className='paragraph-content'>{props.content}</p>
                <a className='paragraph-link' href={props.link}>&#62; {props.link}</a>
            </div>
        )   
    }
    // for subsections with only text
    else {
        return (
            <div className='paragraph' id='paragraph-only'>
                <h2 className='paragraph-header' style={{color: props.color }}>{props.header}</h2>
                <p className='paragraph-content'>{props.content}</p>
            </div>
        )   
    }
}

export default MessageBlock;