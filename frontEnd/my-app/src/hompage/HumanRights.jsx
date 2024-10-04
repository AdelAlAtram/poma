import { motion } from "framer-motion";
import Image from "./image/4.png";
import Image5 from "./image/conflict/shutterstock_2174639149.jpg";
import Image8 from "./image/mh/WhatsApp Image 2021-11-30 at 13.54.38.jpeg";
import Image4 from "./image/gbv/8C56A715-FFEE-4805-996E-59518A44AFE0_1_102_o.jpeg"; 
import Image13 from "./image/mh/82.jpg";
import Image2 from "./image/c2.jpg";



const products = [
  {
    id: 1,
    text: "Transitional Justice Development",
    imageSrc: Image,
  },
  {
    id: 1,
    text: "Reconciliation and Accountability",
    imageSrc: Image5,
  },
  {
    id: 1,
    text: "Prevention of Human Trafficking",
    imageSrc: Image8,
  },
  {
    id: 1,
    text: "Protection of Vulnerable Populations",
    imageSrc: Image4,
  },
  {
    id: 1,
    text: "Cultural Rights",
    imageSrc: Image13,
  },
  {
    id: 1,
    text: "Access to Justice",
    imageSrc: Image2,
  },
];

export default function HumanRights() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-16 text-center">
        Human Rights
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 justify-items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="aspect-h-1 aspect-w-1 w-40 h-40 overflow-hidden bg-gray-200 rounded-full group-hover:opacity-75">
                <img
                  alt={product.text}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.text}
                    </a>
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
