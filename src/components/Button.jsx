/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, XIcon } from "@heroicons/react/solid";

const plans = [
  {
    title: "Basic  ",
    featured: false,
    description: "A Simple, pretty and informative website",
    priceMonthly: 500,
    priceYearly: 56,
    link: "/ProductPage",
    mainFeatures: [
      { id: 1, value: "Static Website" },
      { id: 2, value: "Web Hosting and Domain" },
      { id: 3, value: "up to 5 pages" },
    ],
  },
  {
    title: "Standard",
    featured: true,
    description: "The best website services for your business.",
    priceMonthly: 1500,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: "Advanced Website" },
      { id: 2, value: "Up to 12 pages" },
      { id: 3, value: "Web Hosting and Domain" },
      { id: 4, value: " 3 Month Tech Support" },
      { id: 5, value: "SEO Optimization" },
      { id: 6, value: "Best Option for Blogging or E-Commerce Sites " },
    ],
  },
  {
    title: "Enterprise",
    featured: false,
    description:
      "Full Stack Application to take your business to the next level.",
    priceMonthly: 4500,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: "Fully Customized Site" },
      { id: 2, value: "Unlimited Pages" },
      { id: 3, value: "Web Hosting and Domain" },
      { id: 4, value: "Full Backend Functionality" },
    ],
  },
];
const features = [
  {
    title: "Fully Built Website",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Mobile Version",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "SEO Optimization",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Build Time",
    tiers: [
      { title: "starter", value: "1-2 weeks" },
      { title: "popular", featured: true, value: "1-2 months" },
      { title: "intermediate", value: "3 months+" },
    ],
  },
  {
    title: "Number of Pages",
    tiers: [
      { title: "starter", value: "5 Pages" },
      { title: "popular", featured: true, value: "12 Pages" },
      { title: "intermediate", value: "Unlimited Pages" },
    ],
  },

  {
    title: "Payment processing",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Advisor Support",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },

  {
    title: "Bakend Functionality",
    tiers: [
      { title: "starter", value: "Form Submissions" },
      {
        title: "popular",
        featured: true,
        value: "Simple backend functionality",
      },
      { title: "intermediate", value: "Fully Customizable Application" },
    ],
  },
];
const perks = [
  {
    title: "Instant notifications",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Fully customizable domain name",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Website design advice",
    tiers: [
      { title: "starter", value: true },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },

  {
    title: "Maintenance",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: true },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Unlimited Changes",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: false },
      { title: "intermediate", value: true },
    ],
  },
  {
    title: "Full Database and Service",
    tiers: [
      { title: "starter", value: false },
      { title: "popular", featured: true, value: false },
      { title: "intermediate", value: true },
    ],
  },
];
const faqs = [
  {
    id: 1,
    question: "What are hosting  and domain fees?",
    answer:
      "Hosting fees are like the rent you pay for your website to stay online. It covers the cost of storing your website's files on a server so people can access it on the internet. The type of hosting and resources you need affect the price. Domain fees are like owning a unique address for your website. It iss the name people type in their browsers to visit your site. You have to pay a small yearly fee to keep that address. Some additional services might cost extra.  Both hosting and domain fees are necessary to keep your website running and accessible for people to visit.",
  },
  {
    id: 2,
    question: "Are the prices listed fixed?",
    answer:
      "No, the prices provided are intended to serve as general guidelines, offering you an estimate of the potential cost for building a website based on your specific requirements. Once we assess your individual needs and project scope, a personalized quote will be presented to you, tailored to meet your unique demands and preferences. Our team is committed to providing transparent and competitive pricing, ensuring you receive the best value for your investment.o, that price is just a guideline so that you can have a general idea of what the cost of building a site will be based on your requirements. After an evaluation of your needs, a price will be given for your project.",
  },
  // More questions...
];
const footerNavigation = {
  solutions: [{ name: "Insights", href: "#" }],
  support: [{ name: "Pricing", href: "#" }],
  company: [{ name: "About", href: "#" }],
  legal: [],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: "GitHub",
      href: "https://github.com/Jose27H",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const handleClick = (planTitle) => {
  if (String(planTitle).match("Basic")) {
    window.location.href = "/ProductPage";
  } else if (String(planTitle).match("Standard")) {
    window.location.href = "/StandardPage";
  } else {
    window.location.href = "/EnterprisePage";
  }
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-gray-50">
      <main>
        {/* Pricing section */}
        <div>
          <div className="relative bg-gray-600">
            {/* Overlapping background */}
            <div
              aria-hidden="true"
              className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
            />

            <div className="relative max-w-2xl mx-auto pt-16 px-4 text-center sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                <span className="block lg:inline">Your Website, </span>
                <span className="block lg:inline">Simple pricing</span>
              </h1>
              <p className="mt-4 text-xl text-cyan-100">
                Everything you need, nothing you don't. Pick a plan that best
                suits your business.
              </p>
            </div>

            <h2 className="sr-only">Plans</h2>

            {/* Toggle */}

            {/* Cards */}
            <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-cyan-900 rounded-tl-lg rounded-tr-lg lg:block"
              />

              <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
                {plans.map((plan) => (
                  <div
                    key={plan.title}
                    className={classNames(
                      plan.featured
                        ? "bg-white ring-2 ring-cyan-900 shadow-md"
                        : "bg-cyan-900 lg:bg-transparent",
                      "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12"
                    )}
                  >
                    <div>
                      <h3
                        className={classNames(
                          plan.featured ? "text-cyan-600" : "text-white",
                          "text-sm font-semibold uppercase tracking-wide"
                        )}
                      >
                        {plan.title}
                      </h3>
                      <h3
                        className={classNames(
                          plan.featured ? "text-gray-600" : "text-black",
                          "text-sm  uppercase tracking-wide"
                        )}
                      >
                        Starting from
                      </h3>

                      <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
                        <div className="mt-3 flex items-center">
                          <p
                            className={classNames(
                              plan.featured ? "text-cyan-600" : "text-white",
                              "text-4xl font-extrabold tracking-tight"
                            )}
                          >
                            ${plan.priceMonthly}
                          </p>
                          <div className="ml-4">
                            <p
                              className={classNames(
                                plan.featured ? "text-gray-700" : "text-white",
                                "text-sm"
                              )}
                            >
                              USD + Hosting Fees*
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleClick(plan.title)}
                          className={classNames(
                            plan.featured
                              ? "bg-cyan-900 text-white hover:bg-cyan-900"
                              : "bg-white text-cyan-600 hover:bg-cyan-50",
                            "mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full"
                          )}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                    <h4 className="sr-only">Features</h4>
                    <ul
                      role="list"
                      className={classNames(
                        plan.featured
                          ? "border-gray-200 divide-gray-200"
                          : "border-cyan-900 divide-cyan-900 divide-opacity-75",
                        "mt-7 border-t divide-y lg:border-t-0"
                      )}
                    >
                      {plan.mainFeatures.map((mainFeature) => (
                        <li
                          key={mainFeature.id}
                          className="py-3 flex items-center"
                        >
                          <CheckIcon
                            className={classNames(
                              plan.featured ? "text-cyan-900" : "text-cyan-200",
                              "w-5 h-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              plan.featured ? "text-gray-600" : "text-white",
                              "ml-4 text-sm font-medium"
                            )}
                          >
                            {mainFeature.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature comparison */}
          <section
            aria-labelledby="mobile-comparison-heading"
            className="lg:hidden "
          >
            <h2 id="mobile-comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-16 max-w-2xl mx-auto px-4 space-y-16 sm:px-6">
              {plans.map((plan, planIndex) => (
                <div key={plan.title} className="border-t border-gray-200">
                  <div
                    className={classNames(
                      plan.featured ? "border-cyan-600" : "border-transparent",
                      "-mt-px pt-6 border-t-2 sm:w-1/2"
                    )}
                  >
                    <h3
                      className={classNames(
                        plan.featured ? "text-cyan-600" : "text-gray-900",
                        "text-sm font-bold"
                      )}
                    >
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {plan.description}
                    </p>
                  </div>
                  <h4 className="mt-10 text-sm font-bold text-gray-900">
                    Catered for business
                  </h4>

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div
                      aria-hidden="true"
                      className="hidden absolute inset-0 pointer-events-none sm:block"
                    >
                      <div
                        className={classNames(
                          plan.featured ? "shadow-md" : "shadow",
                          "absolute right-0 w-1/2 h-full bg-white rounded-lg"
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured
                          ? "ring-2 ring-cyan-600 shadow-md"
                          : "ring-1 ring-black ring-opacity-5 shadow",
                        "relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none"
                      )}
                    >
                      <dl className="divide-y divide-gray-200">
                        {features.map((feature) => (
                          <div
                            key={feature.title}
                            className="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                          >
                            <dt className="pr-4 text-sm font-medium text-gray-600">
                              {feature.title}
                            </dt>
                            <dd className="flex items-center justify-end sm:px-4 sm:justify-center">
                              {typeof feature.tiers[planIndex].value ===
                              "string" ? (
                                <span
                                  className={classNames(
                                    feature.tiers[planIndex].featured
                                      ? "text-cyan-600"
                                      : "text-gray-900",
                                    "text-sm font-medium"
                                  )}
                                >
                                  {feature.tiers[planIndex].value}
                                </span>
                              ) : (
                                <>
                                  {feature.tiers[planIndex].value === true ? (
                                    <CheckIcon
                                      className="mx-auto h-5 w-5 text-cyan-600"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <XIcon
                                      className="mx-auto h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  )}

                                  <span className="sr-only">
                                    {feature.tiers[planIndex].value === true
                                      ? "Yes"
                                      : "No"}
                                  </span>
                                </>
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Fake card border */}
                    <div
                      aria-hidden="true"
                      className="hidden absolute inset-0 pointer-events-none sm:block"
                    >
                      <div
                        className={classNames(
                          plan.featured
                            ? "ring-2 ring-cyan-600"
                            : "ring-1 ring-black ring-opacity-5",
                          "absolute right-0 w-1/2 h-full rounded-lg"
                        )}
                      />
                    </div>
                  </div>

                  <h4 className="mt-10 text-sm font-bold text-gray-900">
                    Other perks
                  </h4>

                  <div className="mt-6 relative">
                    {/* Fake card background */}
                    <div
                      aria-hidden="true"
                      className="hidden absolute inset-0 pointer-events-none sm:block"
                    >
                      <div
                        className={classNames(
                          plan.featured ? "shadow-md" : "shadow",
                          "absolute right-0 w-1/2 h-full bg-white rounded-lg"
                        )}
                      />
                    </div>

                    <div
                      className={classNames(
                        plan.featured
                          ? "ring-2 ring-cyan-600 shadow-md"
                          : "ring-1 ring-black ring-opacity-5 shadow",
                        "relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none"
                      )}
                    >
                      <dl className="divide-y divide-gray-200">
                        {perks.map((perk) => (
                          <div
                            key={perk.title}
                            className="py-3 flex justify-between sm:grid sm:grid-cols-2"
                          >
                            <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                              {perk.title}
                            </dt>
                            <dd className="text-center sm:px-4">
                              {perk.tiers[planIndex].value === true ? (
                                <CheckIcon
                                  className="mx-auto h-5 w-5 text-cyan-600"
                                  aria-hidden="true"
                                />
                              ) : (
                                <XIcon
                                  className="mx-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {perk.tiers[planIndex].value === true
                                  ? "Yes"
                                  : "No"}
                              </span>
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Fake card border */}
                    <div
                      aria-hidden="true"
                      className="hidden absolute inset-0 pointer-events-none sm:block"
                    >
                      <div
                        className={classNames(
                          plan.featured
                            ? "ring-2 ring-cyan-600"
                            : "ring-1 ring-black ring-opacity-5",
                          "absolute right-0 w-1/2 h-full rounded-lg"
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="comparison-heading"
            className="hidden lg:block"
          >
            <h2 id="comparison-heading" className="sr-only">
              Feature comparison
            </h2>

            <div className="mt-24 max-w-7xl mx-auto px-8">
              <div className="w-full border-t border-gray-200 flex items-stretch">
                <div className="-mt-px w-1/4 py-6 pr-4 flex items-end">
                  <h3 className="mt-auto text-sm font-bold text-gray-900">
                    Catered for business
                  </h3>
                </div>
                {plans.map((plan, index) => (
                  <div
                    key={plan.title}
                    aria-hidden="true"
                    className={classNames(
                      index === plans.length - 1 ? "" : "pr-4",
                      "-mt-px pl-4 w-1/4"
                    )}
                  >
                    <div
                      className={classNames(
                        plan.featured
                          ? "border-cyan-600"
                          : "border-transparent",
                        "py-6 border-t-2"
                      )}
                    >
                      <p
                        className={classNames(
                          plan.featured ? "text-cyan-600" : "text-gray-900",
                          "text-sm font-bold"
                        )}
                      >
                        {plan.title}
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                {/* Fake card backgrounds */}
                <div
                  className="absolute inset-0 flex items-stretch pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">
                    Business feature comparison
                  </caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Feature</span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.title} scope="col">
                          <span className="sr-only">{plan.title} plan</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {features.map((feature) => (
                      <tr key={feature.title}>
                        <th
                          scope="row"
                          className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                        >
                          {feature.title}
                        </th>
                        {feature.tiers.map((tier, index) => (
                          <td
                            key={tier.title}
                            className={classNames(
                              index === feature.tiers.length - 1
                                ? "pl-4"
                                : "px-4",
                              "relative w-1/4 py-0 text-center"
                            )}
                          >
                            <span className="relative w-full h-full py-3">
                              {typeof tier.value === "string" ? (
                                <span
                                  className={classNames(
                                    tier.featured
                                      ? "text-cyan-600"
                                      : "text-gray-900",
                                    "text-sm font-medium"
                                  )}
                                >
                                  {tier.value}
                                </span>
                              ) : (
                                <>
                                  {tier.value === true ? (
                                    <CheckIcon
                                      className="mx-auto h-5 w-5 text-cyan-600"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <XIcon
                                      className="mx-auto h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                  )}

                                  <span className="sr-only">
                                    {tier.value === true ? "Yes" : "No"}
                                  </span>
                                </>
                              )}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake card borders */}
                <div
                  className="absolute inset-0 flex items-stretch pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-cyan-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>

              <h3 className="mt-10 text-sm font-bold text-gray-900">
                Other perks
              </h3>

              <div className="mt-6 relative">
                {/* Fake card backgrounds */}
                <div
                  className="absolute inset-0 flex items-stretch pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full bg-white rounded-lg shadow-md" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full bg-white rounded-lg shadow" />
                  </div>
                </div>

                <table className="relative w-full">
                  <caption className="sr-only">Perk comparison</caption>
                  <thead>
                    <tr className="text-left">
                      <th scope="col">
                        <span className="sr-only">Perk</span>
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.title} scope="col">
                          <span className="sr-only">{plan.title} plan</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {perks.map((perk) => (
                      <tr key={perk.title}>
                        <th
                          scope="row"
                          className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600"
                        >
                          {perk.title}
                        </th>
                        {perk.tiers.map((tier, index) => (
                          <td
                            key={tier.title}
                            className={classNames(
                              index === perk.tiers.length - 1 ? "pl-4" : "px-4",
                              "relative w-1/4 py-0 text-center"
                            )}
                          >
                            <span className="relative w-full h-full py-3">
                              {tier.value === true ? (
                                <CheckIcon
                                  className="mx-auto h-5 w-5 text-cyan-600"
                                  aria-hidden="true"
                                />
                              ) : (
                                <XIcon
                                  className="mx-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {tier.value === true ? "Yes" : "No"}
                              </span>
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Fake card borders */}
                <div
                  className="absolute inset-0 flex items-stretch pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-1/4 pr-4" />
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                  <div className="w-1/4 px-4">
                    <div className="w-full h-full rounded-lg ring-2 ring-cyan-600 ring-opacity-100" />
                  </div>
                  <div className="w-1/4 pl-4">
                    <div className="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Logo cloud */}
        <div className="p-6"></div>

        {/* FAQs */}
        <section aria-labelledby="faq-heading" className="bg-gray-900">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-2xl lg:mx-auto lg:text-center">
              <h2
                id="faq-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-4 text-gray-400">
                Questions most people have about our service
              </p>
            </div>
            <div className="mt-20">
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                {faqs.map((faq) => (
                  <div key={faq.id}>
                    <dt className="font-semibold text-white">{faq.question}</dt>
                    <dd className="mt-3 text-gray-400">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <img className="h-10" src="/vite.svg" alt="Company name" />
                <p className="text-gray-500 text-base">
                  Designing functional web pages at an affordable price.
                </p>
                <div className="flex space-x-6">
                  {footerNavigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">
                      Solutions
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.solutions.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12 md:mt-0">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">
                      Support
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.support.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-4 space-y-4">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8">
              <p className="text-base text-gray-400 xl:text-center">
                &copy; 2023 Jose Henriquez. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
