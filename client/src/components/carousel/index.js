import { Carousel } from 'react-bootstrap'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css';


function CarouselComponent(props) {
    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h5 className='header'>{props.name1} {props.date1}</h5>
                        <p className='context'>{props.text1}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Carousel.Caption>
                        <h5 className='header'>{props.name2} {props.date2}</h5>
                        <p className='context'>{props.text2}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Carousel.Caption>
                        <h5 className='header'>{props.name3} {props.date3}</h5>
                        <p className='context'>{props.text3}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent;