import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import gallery6 from '../assets/gallery6.jpeg'
import gallery7 from '../assets/gallery7.jpg'
import gallery8 from '../assets/gallery8.jpg'
import gallery9 from '../assets/gallery9.jpg'
import gallery10 from '../assets/gallery10.jpg'
import { Typewriter } from 'react-simple-typewriter'
import { Helmet } from 'react-helmet-async'
const Gallery = () => {
    return (
      <div className="container mx-auto max-w-screen-xl">
        <Helmet>
          <title>Gallery</title>
        </Helmet>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
          <h2 className="text-center md:text-3xl font-bold">
            {" "}
            <Typewriter
              words={["Gallery", "Find Our Happy Travellers On Gallery"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-center opacity-90 md:pt-2 md:max-w-2xl mx-auto">
            Welcome to our gallery! Explore a stunning collection of images
            showcasing our latest projects, products, and events. From
            breathtaking landscapes to intricate designs, there's something for
            everyone to admire.
          </p>
          <hr className="my-2 max-w-6xl mx-auto border border-dashed" />

          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src={gallery1}
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full col-span-2 row-span-2  shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={gallery2}
            />
            <img
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={gallery3}
            />
            <img
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={gallery4}
            />
            <img
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={gallery5}
            />
            <img
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={gallery6}
            />
            <img
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={gallery7}
            />
            <img
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={gallery8}
            />
            <img
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full  shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={gallery9}
            />
            <img
              src={gallery10}
              alt=""
              className=" object-cover rounded-lg hover:scale-95 duration-300 w-full h-full col-span-2 row-span-2  shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            />
          </div>
        </section>
      </div>
    );
};

export default Gallery;