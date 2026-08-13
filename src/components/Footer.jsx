import Container from "./common/Container";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800">

      <Container>

        <div className="grid lg:grid-cols-4 gap-12 py-20">

          {/* Company */}

          <div>

            <h3 className="flex flex-wrap items-center gap-x-1 text-xl md:text-2xl font-semibold tracking-[0.15em]">
              <span className="text-white">AMAZING</span>
              <span className="text-[#C9A35D]">SOLUTION</span>
              <span className="text-[#C9A35D]">&</span>
              <span className="text-[#C9A35D]">DECORATION</span>
            </h3>

            <p className="mt-5 text-gray-400 leading-8">
              Creating luxurious and functional interior
              spaces that reflect your lifestyle.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><a href="#home">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-3">

              <li>Residential Interior</li>

              <li>Commercial Interior</li>

              <li>Office Interior</li>

              <li>Modular Kitchen</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <FaPhoneAlt className="text-[#C9A35D]" />

                <span>+91 9625586977</span>

              </div>

              <div className="flex flex-nowrap items-center gap-2">
                <FaEnvelope className="shrink-0 text-[#C9A35D]" />

                <span className="text-xs sm:text-sm whitespace-nowrap">
                  gleamincginteriordesign@gmail.com
                </span>
              </div>

              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-[#C9A35D]" />

                <span>Noida, UP</span>

              </div>

            </div>

            <div className="flex gap-5 mt-8">

              <a href="#">
                <FaInstagram className="text-2xl hover:text-[#C9A35D]" />
              </a>

              <a href="#">
                <FaFacebook className="text-2xl hover:text-[#C9A35D]" />
              </a>

              <a href="#">
                <FaLinkedin className="text-2xl hover:text-[#C9A35D]" />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 py-6 text-center text-gray-500">

          © {new Date().getFullYear()} AMAZING SOLUTION & DECORATION Interior Designing.
          All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
};

export default Footer;