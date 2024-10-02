import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ChartPieIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaHandsHoldingChild } from "react-icons/fa6";

import Logo from "./image/Logo.png";
const WhatweDo = [
  {
    name: "Mental Health & Psychology Development",
    href: "/MentalHealth",
    icon: ChartPieIcon,
  },
  {
    name: "Child Protection & Social Policy",
    href: "/ChildProtection",
    icon: ChartPieIcon,
  },
  {
    name: "Gender and Gender-based Violence (GBV)",
    href: "/GBV",
    icon: ChartPieIcon,
  },
  {
    name: "Conflict",
    href: "/Conflict",
    icon: ChartPieIcon,
  },
  {
    name: "Human Rights",
    href: "/HumanRights",
    icon: ChartPieIcon,
  },
  {
    name: "Research",
    href: "/Research",
    icon: ChartPieIcon,
  },
];
const Blog = [
  {
    name: "News and current events",
    href: "/News",
    icon: ChartPieIcon,
  },
  {
    name: "POMA's Stories",
    href: "/POMAStories",
    icon: ChartPieIcon,
  },
  {
    name: "In their words",
    href: "/InTheirWords",
    icon: ChartPieIcon,
  },
];
const Aboutus = [
  {
    name: "Who we are",
    href: "/AboutUs",
    icon: ChartPieIcon,
  },
  // {
  //   name: "Philosophy",
  //   href: "/Philosophy",
  //   icon: ChartPieIcon,
  // },
  {
    name: "Core peinciples",
    href: "/Corepeinciples",
    icon: ChartPieIcon,
  },
  {
    name: "Our vision",
    href: "/OurVision",
    icon: ChartPieIcon,
  },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
      }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            {/* <span className="sr-only">Your Company</span> */}
            <img alt="" src={Logo} className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md font-semibold leading-6 text-black focus:outline-none focus:ring-0">
              WHAT WE DO
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none"
                style={{ color: "#3fd0a2" }}
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {WhatweDo.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaHandsHoldingChild
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-pomaGreen"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a
            href="/OurWay"
            className="text-md font-semibold leading-6 text-black "
          >
            Our Way
          </a>
          <a
            href="/WhereWeWork"
            className="text-md font-semibold leading-6 text-black "
          >
            Where we work
          </a>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md font-semibold leading-6 text-black focus:outline-none focus:ring-0">
              About us
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none "
                style={{ color: "#3fd0a2" }}
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {Aboutus.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaHandsHoldingChild
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-pomaGreen"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md font-semibold leading-6 text-black focus:outline-none focus:ring-0">
              Blog
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none "
                style={{ color: "#3fd0a2" }}
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {Blog.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <FaHandsHoldingChild
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 group-hover:text-pomaGreen"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a
            href="/Publications"
            className="text-md font-semibold leading-6 text-black "
          >
            Publications
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="h-6 w-6 flex-none "
            style={{ color: "#3fd0a2" }}
          />
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            style={{ backgroundColor: "#3fd0a2" }}
            className="rounded-[4px] px-3 py-2 leading-7"
          >
            <p className="text-white">DONATE</p> {/* Remove margin */}
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    WHAT WE DO
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...WhatweDo].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Blog
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...Blog].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    About us
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...Aboutus].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/OurWay"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Our Way
                </a>
                <a
                  href="/WhereWeWork"
                   className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Where we work
                </a>
                <a
                  href="/Publications"
                  className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Publications
                </a>
              </div>
              <div className="py-6">
                <button
                  style={{ backgroundColor: "#3fd0a2" }}
                  className="rounded-[4px] px-3 py-2 leading-7"
                >
                  <p className="text-white">DONATE</p> {/* Remove margin */}
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
