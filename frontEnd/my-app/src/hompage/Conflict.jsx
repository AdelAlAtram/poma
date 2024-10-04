import { motion } from "framer-motion";
import Image1 from "./image/conflict/DE49FA7E-0F88-449A-B5A9-11BA5C872AB3_1_105_c.jpeg";
import Image2 from "./image/conflict/E4656BC0-1183-4A90-9A43-35E5F740D911_1_105_c.jpeg";
import Image3 from "./image/conflict/EB29E03D-5D2D-4619-A6FB-405F241ACF1D_1_105_c.jpeg";
import Image4 from "./image/conflict/ED5B1B16-C60F-4883-8348-16B45F4FF737_1_105_c.jpeg";
import Image5 from "./image/conflict/shutterstock_2174639149.jpg";
import Image6 from "./image/conflict/shutterstock_2373647011.jpg";


const products = [
  {
    id: 1,
    text: "Reintegration and Reunification",
    imageSrc: Image1,
  },
  {
    id: 1,
    text: "Psychological Rehabilitation for CAAFAG",
    imageSrc: Image2,
  },
  {
    id: 1,
    text: "Post-release Support and Monitoring",
    imageSrc: Image3,
  },
  {
    id: 1,
    text: "led Support Groups",
    imageSrc: Image4,
  },
  {
    id: 1,
    text: "Juvenile Justice",
    imageSrc: Image5,
  },
  {
    id: 1,
    text: "Law Enforcement Mental Health Informed Guidance",
    imageSrc: Image6,
  },
];

export default function Conflict() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-16 text-center">
        Conflict
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
