const navigation = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/ContactPage" },
];

export default function Navbar() {
  return (
    <div className="bg-gray-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img className="h-10 w-auto" src="/vite.svg" alt="" />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-6 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
