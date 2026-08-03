import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServiceCard from "../components/ServiceCard";

import { services } from "../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="py-28 bg-[#0D0D0D]"
    >
      <Container>

        <SectionTitle
          subtitle="Our Services"
          title="Interior Solutions We Offer"
          description="From luxury homes to modern office spaces, we design interiors that combine beauty, comfort, and functionality."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </motion.div>

      </Container>
    </section>
  );
};

export default Services;