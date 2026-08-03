import Container from "../components/common/Container";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#111111] py-24"
    >
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#C9A35D]">
            Contact Us
          </p>

          <h2
            className="
            text-5xl
            font-bold
            mt-4
            font-['Playfair_Display']
            "
          >
            Let's Design Your Dream Space
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Tell us about your project. Our team will contact
            you within 24 hours.
          </p>

        </div>

        <div className="mt-16">
          <ContactForm />
        </div>

      </Container>
    </section>
  );
};

export default Contact;