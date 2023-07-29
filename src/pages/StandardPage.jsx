import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  HeartIcon,
  MenuIcon,
  MinusSmIcon,
  PlusSmIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

const product = {
  name: "Standard Website",
  price: " $1500 + Domain and Hosting Fees",

  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],

  description: `
    <p> Our Template-based Website with Basic Backend Capabilities package, tailored to elevate your online presence with seamless functionality. For just $1,500, enjoy the perks of a pre-designed template, customized to match your brand's essence across 10 captivating pages. With mobile responsiveness, basic SEO optimization, and contact form integration, engaging your audience becomes effortless. Moreover, embrace simple backend capabilities, including user login and data storage. We ensure a hassle-free experience with one-time website setup and minor maintenance for the first 3 months. Our dedicated team will be available for 2 weeks post-launch to tackle any minor changes or bug fixes, ensuring your website's continuous success.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Customization of a pre-designed template.",
        "Up to 12 pages.",
        "Mobile responsiveness.",
        "Basic SEO optimization",
        "Basic backend capabilities (e.g., user login, simple data storage).",
        "One-time website setup.",
        "Minor maintenance (e.g., updating content) once a month for the first 3 months.",
        "Time to build 1-2 months",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StandardPage() {
  const [open, setOpen] = useState(false);
  const goToBuy = () => {
    window.location.href = "/EnterprisePage";
  };

  return (
    <div className="  bg-gray-600">
      {/* Mobile menu */}

      <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-center object-cover sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {product.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <h4>Starting at:</h4>
                <p className="text-3xl text-gray-900">{product.price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="text-base text-gray-200 space-y-6"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <form className="mt-6">
                {/* Colors */}

                <div className="mt-10 flex sm:flex-col1">
                  <a
                    href="/SaleContact"
                    className="max-w-xs flex-1 bg-cyan-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-cyan-500 sm:w-full"
                  >
                    Get Estimate
                  </a>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="border-t divide-y divide-gray-200">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                              <span
                                className={classNames(
                                  open ? "text-gray-100" : "text-gray-100",
                                  "text-sm font-medium"
                                )}
                              >
                                {detail.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="block h-6 w-6 text-cyan-400 group-hover:text-cyan-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="block h-6 w-6 text-red-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as="div"
                            className="pb-6 prose prose-sm"
                          >
                            <ul className="text-white" role="list">
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <div className="border-t border-gray-100 py-10 m-5 text-center">
        <p className="text-sm text-gray-500">
          &copy; Jose Henriquez. All rights reserved.
        </p>
      </div>
    </div>
  );
}
