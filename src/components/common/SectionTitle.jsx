const SectionTitle = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">

      <p className="text-[#C9A35D] uppercase tracking-[4px] mb-3">
        {subtitle}
      </p>

      <h2
        className="
        text-4xl
        md:text-5xl
        font-bold
        font-['Playfair_Display']
        mb-5
      "
      >
        {title}
      </h2>

      {description && (
        <p className="text-gray-400 leading-8">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;