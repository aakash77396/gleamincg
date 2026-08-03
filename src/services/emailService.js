import emailjs from "@emailjs/browser";

export const sendInquiry = async (data) => {
  const now = new Date();

  const templateParams = {
    ...data,

    submitted_at: now.toLocaleString("en-IN", {
      dateStyle: "full",
      timeStyle: "short",
    }),
  };

  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};