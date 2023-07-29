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
  name: "Enterprise Application",
  price: " $4500 + Domain and Hosting Fees",

  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],

  description: `
      <p> This premium package offers unparalleled features, including custom design and development tailored to your specific needs, unlimited pages and content for comprehensive expansion, and a fully responsive design ensuring seamless user experience across all devices. Benefit from advanced SEO optimization to boost your online visibility.
  
      With our cutting-edge services, you'll receive a user registration and authentication system for secure interactions, as well as a dedicated database and data storage solutions for efficient management. We take care of your website's performance with regular maintenance and updates, including essential security patches and content updates for the first 6 months. Our dedicated technical support is available for 3 months to assist you with any inquiries.
      
      Experience peace of mind with our developer's availability for 4 weeks after project completion, ensuring any changes, bug fixes, or additional features are promptly addressed. Take your digital presence to new heights with this comprehensive package and unlock the full potential of your web application.</p>
    `,
  details: [
    {
      name: "Features",
      items: [
        "Custom design and development of the website.",
        "Unlimited pages and content.",
        "Mobile responsiveness.",
        "Advanced SEO optimization.",
        "Contact form integration.",
        "Dedicated database and data storage solutions.",
        "User registration and authentication system.",
        "Regular maintenance and updates (e.g., security patches, content updates) for the first 6 months.",
        "Ongoing technical support for 3 months.",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EnterprisePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-gray-600">
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
