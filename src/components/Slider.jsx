import { Typewriter } from 'react-simple-typewriter';
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.avif'
import slider4 from '../assets/slider4.jpg'
const Slider = () => {
  return (
    <div className="px-4 container mx-auto max-w-screen-xl md:my-10">
      <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
      <h2 className="text-center text-xl md:text-3xl font-bold">
        {" "}
        <Typewriter
          words={["Some Awesome Photo Taken By Our Happy Travellers", "Photos"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <p className="text-center opacity-90 md:pt-2 max-w-md mx-auto">
        Some popular destination where our travellers already visited and share their experiences
      </p>
      <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider2}
            className="w-full rounded-lg md:h-[600px] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={slider1}
            className="w-full rounded-lg md:h-[600px] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={slider3}
            className="w-full rounded-lg md:h-[600px] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={slider4}
            className="w-full rounded-lg md:h-[600px] object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
