import { useRef } from "react";

export default function SaleContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID2,
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("wholeForm").reset();
          alert("Message Sent Succesfully");
          window.location.href = "/";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-gray-600">
      <form
        action="#"
        ref={form}
        id="wholeForm"
        onSubmit={sendEmail}
        className="flex justify-center items-center h-3/4  "
      >
        <div className="space-y-12 p-10 bg-gray-300 rounded-md ">
          <h1 className="text-3xl font-semibold">
            Let us Get to Know Your Needs Better
          </h1>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Website Information
            </h2>

            <div className="mt-10  gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message1"
                    className="block text-sm font-medium text-gray-900"
                  >
                    1.Purpose and Goals: <br /> <br></br> What is the primary
                    purpose of your website? <br></br>What specific goals do you
                    want to achieve with your website? (e.g., Increase sales,
                    generate leads, build brand awareness)
                  </label>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message1"
                    name="message1"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                    aria-describedby="message-max"
                    defaultValue={""}
                  />
                </div>
                <span id="message-max" className="text-sm  text-gray-500">
                  Max. 500 characters
                </span>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message2"
                    className="block text-sm font-medium text-gray-900"
                  >
                    2.Scope and Features:
                    <br />
                    <br></br> What is the primary purpose of your website?{" "}
                    <br></br>What specific goals do you want to achieve with
                    your website? (e.g., Increase sales, generate leads, build
                    brand awareness)
                  </label>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message2"
                    name="message2"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                    aria-describedby="message-max"
                    defaultValue={""}
                  />
                </div>
                <span id="message-max" className="text-sm  text-gray-500">
                  Max. 500 characters
                </span>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message3"
                    className="block text-sm font-medium text-gray-900"
                  >
                    3.Design:
                    <br />
                    <br></br>Do you have a specific design or branding
                    guidelines that you want to follow? <br></br>What are your
                    preferences for colors, fonts, and visual style?
                    <br />
                    Are there any competitor websites or other websites you like
                    the design of?
                  </label>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message3"
                    name="message3"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                    aria-describedby="message-max"
                    defaultValue={""}
                  />
                </div>
                <span id="message-max" className="text-sm  text-gray-500">
                  Max. 500 characters
                </span>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message4"
                    className="block text-sm font-medium text-gray-900"
                  >
                    4.Timeline and Budget:
                    <br />
                    <br></br>What is your expected timeline for completing the
                    website? <br></br>Do you have a budget in mind for the
                    project?
                  </label>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message4"
                    name="message4"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                    aria-describedby="message-max"
                    defaultValue={""}
                  />
                </div>
                <span id="message-max" className="text-sm  text-gray-500">
                  Max. 500 characters
                </span>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message5"
                    className="block text-sm font-medium text-gray-900"
                  >
                    5.Maintenance and Updates:
                    <br />
                    <br></br>Will you need ongoing maintenance and updates for
                    the website? <br></br>Are you comfortable with managing the
                    website yourself or would you prefer ongoing support?
                    <br /> Do you have any SEO (Search Engine Optimization) or
                    online marketing requirements for the website?
                    <br />
                    Do you have any preferences for the website platform or
                    technology stack? (e.g., WordPress, React, Shopify)
                  </label>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message5"
                    name="message5"
                    rows={4}
                    className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
                    aria-describedby="message-max"
                    defaultValue={""}
                  />
                </div>
                <span id="message-max" className="text-sm  text-gray-500">
                  Max. 500 characters
                </span>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-3/4">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="phone-number"
                    placeholder="(555)-123-4455   "
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              How would you like to be contacted?
            </p>

            <div className="mt-10 space-y-10">
              <fieldset>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <p className="text-gray-500">
                        Recieve an email with your estimate.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-900"
                      >
                        Phone Call
                      </label>
                      <p className="text-gray-500">
                        Recieve a phone call from one of our team members to
                        discuss the estimate.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>

              <button className="bg-cyan-600 p-3 border-radius-md">
                Get Estimate
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
