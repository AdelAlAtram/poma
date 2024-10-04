import { motion } from "framer-motion";
import Image1 from "./image/research/1.jpg"; 
import Image2 from "./image/research/10.jpg"; 
import Image3 from "./image/research/21.jpg"; 
import Image4 from "./image/research/101.jpg"; 
import Image5 from "./image/research/102.jpg"; 
import Image6 from "./image/research/103.jpg"; 
import Image7 from "./image/research/104.jpg"; 
import Image8 from "./image/research/107.jpg"; 

const products = [
  {
    id: 1,
    text: "Local Data Collection Methods",
    imageSrc: Image1,
  },
  {
    id: 1,
    text: "Evidence Informed",
    imageSrc: Image2,
  },
  {
    id: 1,
    text: "Implementation Science",
    imageSrc: Image3,
  },
  {
    id: 1,
    text: "Applied Evaluation Research",
    imageSrc: Image4,
  },
  {
    id: 1,
    text: "Traumatization Prevention Training research teams",
    imageSrc: Image5,
  },
  {
    id: 1,
    text: "Needs Assessment and Gap Analysis, Clinical Assessments",
    imageSrc: Image6,
  },
  {
    id: 1,
    text: "Applied and Implementation Research",
    imageSrc: Image7,
  },
  {
    id: 1,
    text: "Program Evaluation and Case Studies",
    imageSrc: Image8,
  },
];

export default function Research() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-16 text-center">
        Research
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
