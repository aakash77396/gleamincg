import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import Container from "../components/common/Container";
import  aboutImg  from "../assets/images/icon.jpeg";
import { aboutFeatures } from "../data/stats";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#111111] py-24"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            <img
              src={aboutImg}
              alt="About"
              className="rounded-3xl shadow-2xl"
            />

            {/* Floating Badge */}

            <div
              className="
              absolute
              -bottom-8
              -right-5
              bg-[#C9A35D]
              text-black
              px-8
              py-6
              rounded-2xl
              shadow-xl
              "
            >
              <h2 className="text-4xl font-bold">
                4+
              </h2>

              <p>Years Experience</p>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="uppercase tracking-[5px] text-[#C9A35D]">
              About Us
            </p>

            <h2
              className="
              text-5xl
              mt-4
              font-bold
              font-['Playfair_Display']
              "
            >
              Bringing Your Dream
              Spaces To Life
            </h2>

            <p className="text-gray-400 mt-8 leading-8">
              GLEAMINCG specializes in creating luxurious,
              elegant, and functional interiors for homes,
              offices, and commercial spaces. Our team
              combines creativity with craftsmanship to
              deliver timeless designs tailored to your
              lifestyle.
            </p>

            <div className="mt-10 space-y-5">

              {aboutFeatures.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle
                    className="text-[#C9A35D] text-xl"
                  />

                  <p>{item}</p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default About;