import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
    return (
        <div className='mx-0 mt-0 carouseldiv'>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img style={{ width: "100%" }} src='./CarImages/aston1.jpg' alt='Aston-Martin' />
                    <Carousel.Caption>
                        <h1>Aston Martin</h1>
                        <h4>Intensity Driven</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "100%" }} src='./CarImages/corvette1.jpg' alt='Chevrolet' />
                    <Carousel.Caption>
                        <h1>Chevrolet</h1>
                        <h4>Find New Roads</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "100%" }} src='./CarImages/laferrari1.jpg' alt='Ferrari' />
                    <Carousel.Caption>
                        <h1>Ferrari</h1>
                        <h4>We are the competition</h4>
                    </Carousel.Caption>
                </Carousel.Item><Carousel.Item>
                    <img style={{ width: "100%" }} src='./CarImages/lamborghini1.jpg' alt='Lamborghini' />
                    <Carousel.Caption>
                        <h1>Lamborghini</h1>
                        <h4>Expect the Unexpected</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "100%" }} src='./CarImages/mclaren1.jpg' alt='McLaren' />
                    <Carousel.Caption>
                        <h1>McLaren</h1>
                        <h4>Prepare, commit, belong</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "100%" }} src='./CarImages/mercedes1.jpg' alt='Mercedes' />
                    <Carousel.Caption>
                        <h1>Mercedes Benz</h1>
                        <h4>The Best or Nothing</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ width: "100%" }} src='./CarImages/Porsche1.jpg' alt='Porsche' />
                    <Carousel.Caption>
                        <h1>Porsche</h1>
                        <h4>There Is No Substitute</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;