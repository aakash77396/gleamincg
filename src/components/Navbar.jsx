import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import Container from "./common/Container";
import Button from "./common/Button";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "/careers" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-300
      ${scrolled
                    ? "bg-[#111111]/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
                }
      `}
        >
            <Container>
                <nav className="h-20 flex items-center justify-between">

                    {/* Logo */}

                    <h1 className="flex flex-wrap items-center gap-x-1 text-xl md:text-2xl font-semibold tracking-[0.15em]">
                        <span className="text-white">AMAZING</span>
                        <span className="text-[#C9A35D]">SOLUTION</span>
                        <span className="text-[#C9A35D]">&</span>
                        <span className="text-[#C9A35D]">DECORATION</span>
                    </h1>

                    {/* Desktop */}

                    <div className="hidden lg:flex items-center gap-10">

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="
                relative
                text-white
                hover:text-[#C9A35D]
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:w-0
                after:h-0.5
                after:bg-[#C9A35D]
                after:duration-300
                hover:after:w-full
                "
                            >
                                {link.name}
                            </a>
                        ))}

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

                    </div>

                    {/* Mobile Button */}

                    <button
                        className="lg:hidden text-white text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>

                </nav>
            </Container>

            {/* Mobile Menu */}

            <AnimatePresence>

                {isOpen && (

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        className="
            lg:hidden
            bg-[#111]
            border-t
            border-gray-800
            "
                    >
                        <Container>

                            <div className="flex flex-col py-6 gap-6">

                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white hover:text-[#C9A35D]"
                                    >
                                        {link.name}
                                    </a>
                                ))}

                                <Button className="w-full">
                                    Book Consultation
                                </Button>

                            </div>

                        </Container>
                    </motion.div>

                )}

            </AnimatePresence>

        </header>
    );
};

export default Navbar;