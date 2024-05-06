import popular1 from '../assets/popular1.webp'
import popular2 from '../assets/popular 2.jpg'
import popular3 from '../assets/popular 3.png'
import popular4 from '../assets/popular 4.jpg'
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
const PopularDestinition = () => {
    return (
      <div className="px-4 md:px-0 md:mb-20 md:mt-10 my-3 container mx-auto max-w-screen-xl">
        <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
        <h2 className="text-center text-xl md:text-3xl font-bold">
          {" "}
          <Typewriter
            words={["Popular Destination", "All Popular Destination We Have"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-center opacity-90 md:pt-2">
          Some popular destination where our travellers already visited
        </p>
        <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
        <div>
          <div className="flex lg:flex-row flex-col-reverse justify-between items-center md:my-5 md:gap-5">
            <p
              direction="up"
              className="lg:w-1/2 md:max-w-2xl text-justify py-5 lg:py-0"
            >
              <Fade>
                Nestled in the delta of the Ganges, Brahmaputra, and Meghna
                rivers, the Sundarbans is the largest mangrove forest in the
                world and a UNESCO World Heritage Site. Home to the elusive
                Bengal tiger and a rich diversity of flora and fauna, this
                mystical forest offers visitors a chance to explore its winding
                waterways, lush greenery, and serene beauty. Stretching along
                the southeastern coastline of Bangladesh, Cox's Bazar boasts the
                world's longest natural sandy sea beach. With its golden sands
                stretching as far as the eye can see, bordered by the turquoise
                waters of the Bay of Bengal, Cox's Bazar is a paradise for beach
                lovers. Visitors can enjoy activities like swimming, sunbathing,
                and beachside picnics while soaking in the breathtaking coastal
                views.
              </Fade>
            </p>
            <div className="lg:w-1/2 flex md:flex-row md:justify-center flex-col gap-5 ">
              <img
                className="hover:scale-105 duration-300 md:h-[350px] md:w-[300px] rounded-lg shadow-xl lg:relative top-8"
                src={popular1}
                alt=""
              />
              <img
                className="hover:scale-105 duration-300 md:h-[350px] md:w-[300px] rounded-lg shadow-xl "
                src={popular2}
                alt=""
              />
            </div>
          </div>
          <div className="flex lg:flex-row-reverse flex-col-reverse  justify-between items-center lg:mt-20 md:gap-5 md:mb-4">
            <p className="lg:w-1/2 text-justify py-5 md:py-0 md:max-w-2xl">
              <Fade>
                Nestled in the delta of the Ganges, Brahmaputra, and Meghna
                rivers, the Sundarbans is the largest mangrove forest in the
                world and a UNESCO World Heritage Site. Home to the elusive
                Bengal tiger and a rich diversity of flora and fauna, this
                mystical forest offers visitors a chance to explore its winding
                waterways, lush greenery, and serene beauty. Stretching along
                the southeastern coastline of Bangladesh, Cox's Bazar boasts the
                world's longest natural sandy sea beach. With its golden sands
                stretching as far as the eye can see, bordered by the turquoise
                waters of the Bay of Bengal, Cox's Bazar is a paradise for beach
                lovers. Visitors can enjoy activities like swimming, sunbathing,
                and beachside picnics while soaking in the breathtaking coastal
                views.
              </Fade>
            </p>
            <div className="md:w-1/2 flex md:flex-row md:justify-center flex-col gap-5 ">
              <img
                className="hover:scale-105 duration-300 md:h-[350px] md:w-[300px] rounded-lg shadow-xl lg:relative top-8"
                src={popular3}
                alt=""
              />
              <img
                className="hover:scale-105 duration-300 md:h-[350px] md:w-[300px] rounded-lg shadow-xl "
                src={popular4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default PopularDestinition;