type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
};

export default function FAQSection({
  faqs,
}: FAQSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border p-4"
          >
            <h3 className="font-semibold">
              {faq.question}
            </h3>

            <p className="mt-2 text-slate-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}