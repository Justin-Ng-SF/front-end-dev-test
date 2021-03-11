import 'semantic-ui-css/semantic.min.css'
import './style.css'

function WelcomeSection(props) {
    return (
        <div className='welcomeSection' style={{ backgroundImage: `url(${props.picture})` }}>
            <img src={props.logo} id='logo-white'/>
            <div className='welcome'>
                <div className='fade-header'>
                    <h1 id='welcome-to-message'>WELCOME TO</h1>
                    <h1 id='rooster-grin-message'>Rooster Grin</h1>
                </div>
                <button className='ui purple button' id='purple-button'>Button Button</button>
            </div>
        </div>
    )
}

export default WelcomeSection;