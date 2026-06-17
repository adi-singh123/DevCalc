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
    <section className="mt-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Find answers to common questions about this calculator.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map(
          (faq, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:shadow-md
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    text-sm
                    font-bold
                    text-blue-600
                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  ?
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}