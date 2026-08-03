import { motion } from "framer-motion";
import { heroBg } from "../assets";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { stats } from "../data/stats";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background Image */}
            <img
                src={heroBg}
                alt="Luxury Interior Design"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />

            {/* Content */}
            <Container className="relative z-10">

                <div className="max-w-3xl">

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="uppercase tracking-[5px] text-[#C9A35D] text-sm md:text-base"
                    >
                        Luxury Interior Design
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="
                                mt-5
                                text-5xl
                                md:text-7xl
                                font-bold
                                leading-tight
                                font-['Playfair_Display']
                                "
                    >
                        Designing Elegant Spaces
                        <br />
                        For Modern Living
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="
                            mt-8
                            max-w-xl
                            text-gray-300
                            text-lg
                            leading-8
                            "
                    >
                        We transform homes, offices, and commercial spaces
                        into timeless interiors that blend luxury,
                        comfort, and functionality.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 flex flex-wrap gap-5"
                    >
                        <Button
                            onClick={() => {
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                        >
                            Book Consultation
                        </Button>

                        <Button
                            onClick={() => navigate("/projects")}
                            className="
                            bg-transparent
                            border
                            border-[#C9A35D]
                            text-white
                            hover:bg-[#C9A35D]
                            hover:text-black
                        "
                        >
                            View Projects
                        </Button>

                    </motion.div>

                    {/* Statistics */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="
                                    mt-16
                                    grid
                                    grid-cols-2
                                    md:grid-cols-3
                                    gap-8
                                    "
                    >
                        {stats.map((item) => (
                            <div key={item.label}>
                                <h2 className="text-4xl font-bold text-[#C9A35D]">
                                    {item.value}
                                </h2>

                                <p className="mt-2 text-gray-400">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                </div>

            </Container>
        </section>
    );
};

export default Hero;