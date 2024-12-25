import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carousel = () => {
    return (
        <div className="my-3 mb-10 z-0 w-full">
            <AwesomeSlider
                className="w-full h-auto"  // Ensuring the slider fills the available space
                media={[
                    {
                        source: 'https://i.ibb.co/9V8B65f/pexels-rdne-6646918.jpg',
                    },
                    {
                        source: 'https://i.ibb.co/W3Qbqwg/pexels-shvetsa-5029859.jpg',
                    },
                    {
                        source: 'https://i.ibb.co/DWJXtfK/ocg-saving-the-ocean-1j7-atc0z8-unsplash-1.jpg',
                    },
                ]}
            />
        </div>
    );
};

export default Carousel;
