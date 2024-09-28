import { motion } from "framer-motion";
import Image from "./image/4.png"; // Adjust the path as needed

const products = [
  {
    id: 1,
    text: "lorem lorem lorem loremloremlorem lorem lorem lorem",
    imageSrc: Image,
  },
  {
    id: 1,
    text: "lorem lorem lorem loremloremlorem lorem lorem lorem",
    imageSrc: Image,
  },
  {
    id: 1,
    text: "lorem lorem lorem loremloremlorem lorem lorem lorem",
    imageSrc: Image,
  },
  {
    id: 1,
    text: "lorem lorem lorem loremloremlorem lorem lorem lorem",
    imageSrc: Image,
  },
  {
    id: 1,
    text: "lorem lorem lorem loremloremlorem lorem lorem lorem",
    imageSrc: Image,
  },
  {
    id: 1,
    text: "lorem lorem lorem loremloremlorem lorem lorem lorem",
    imageSrc: Image,
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
