import { motion } from "framer-motion";
import Image1 from "./image/c1.jpg";
import Image2 from "./image/c2.jpg";
import Image3 from "./image/99.jpg";
import Image4 from "./image/shutterstock_1898173294.jpg";
import Image5 from "./image/shutterstock_2174639149.jpg";
import Image6 from "./image/shutterstock_2373647011.jpg";

const products = [
  {
    id: 1,
    text: "Early Childhood Development",
    imageSrc: Image1,
  },
  {
    id: 1,
    text: "Child-Therapeutic Psychotherapy Development",
    imageSrc: Image2,
  },
  {
    id: 1,
    text: "Family Mediation and Parental Support",
    imageSrc: Image3,
  },
  {
    id: 1,
    text: "Guidance on Global Standards for Child Care",
    imageSrc: Image5,
  },
  {
    id: 1,
    text: "Monitoring and Evaluation of Child's Rights",
    imageSrc: Image6,
  },
];

export default function ChildProtection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-16 text-center">
          Child Protection & Social Policy
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
