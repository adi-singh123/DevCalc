type Step = {
  step: number;
  title: string;
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type CalculatorSchemaProps = {
  calculator: {
    slug: string;
    name: string;
    description: string;
    category: string;
    steps: Step[];
    faqs: FAQ[];
    compareWith?: string[];
  };
};

export default function CalculatorSchema({
  calculator,
}: CalculatorSchemaProps) {
  const url = `https://www.devcalc.in/${calculator.slug}`;

  const categoryMap: Record<
    string,
    string
  > = {
    Finance:
      "FinanceApplication",
    Health:
      "HealthApplication",
    Education:
      "EducationalApplication",
    Utility:
      "UtilitiesApplication",
    Vehicle:
      "UtilitiesApplication",
    Math:
      "EducationalApplication",
      Fun:
    "GameApplication",
  };

  const schema = {
    "@context":
      "https://schema.org",

    "@graph": [
      {
        "@type": "WebPage",

        "@id":
          `${url}#webpage`,

        url,

        name:
          calculator.name,

        description:
          calculator.description,

        isPartOf: {
          "@id":
            "https://www.devcalc.in/#website",
        },

        about: {
          "@id":
            `${url}#application`,
        },
      },

      {
        "@type":
          "SoftwareApplication",

        "@id":
          `${url}#application`,

        name:
          calculator.name,

        applicationCategory:
          categoryMap[
            calculator.category
          ] ??
          "UtilitiesApplication",

        operatingSystem:
          "Any",

        browserRequirements:
          "Requires JavaScript",

        description:
          calculator.description,

        url,

        offers: {
          "@type":
            "Offer",

          price: "0",

          priceCurrency:
            "INR",
        },
      },

      {
        "@type": "HowTo",

        "@id":
          `${url}#howto`,

        name: `How to use ${calculator.name}`,

        description:
          calculator.description,

        step:
          calculator.steps.map(
            (step) => ({
              "@type":
                "HowToStep",

              position:
                step.step,

              name:
                step.title,

              text:
                step.description,
            }),
          ),
      },

      ...(calculator.compareWith?.length
        ? [
            {
              "@type":
                "ItemList",

              "@id":
                `${url}#compare`,

              name:
                "Compare Calculators",

              itemListElement:
                calculator.compareWith.map(
                  (
                    slug,
                    index,
                  ) => ({
                    "@type":
                      "ListItem",

                    position:
                      index + 1,

                    url: `https://www.devcalc.in/${slug}`,
                  }),
                ),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(
            schema,
          ),
      }}
    />
  );
}