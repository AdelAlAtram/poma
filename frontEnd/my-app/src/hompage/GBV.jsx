import { motion } from "framer-motion";
import Image1 from "./image/gbv/1A97BF34-BF17-484A-AA8F-595DD98A614C_1_105_c.jpeg"; 
import Image2 from "./image/gbv/1D79293C-F5BC-42A8-8FE1-C6E1D1A07625_1_105_c.jpeg"; 
import Image3 from "./image/gbv/7F0B371B-4C71-4747-87EB-55EF5601D137_1_105_c.jpeg"; 
import Image4 from "./image/gbv/8C56A715-FFEE-4805-996E-59518A44AFE0_1_102_o.jpeg"; 
import Image5 from "./image/gbv/108C98C1-2210-443F-95A2-43164A4AD461_1_105_c.jpeg"; 
import Image6 from "./image/gbv/8980290D-5B26-4C60-B7AD-F4745C32ECFF_1_105_c.jpeg"; 
import Image7 from "./image/gbv/BA70E1F5-E2DF-4602-987C-5471A480ECF5_1_105_c.jpeg"; 

const products = [
  {
    id: 1,
    text: "Survivor-led Therapy",
    imageSrc: Image1,
  },
  {
    id: 1,
    text: "Referral Mechanisms for GBV",
    imageSrc: Image2,
  },
  {
    id: 1,
    text: "Gender Sensitivity and Diversity Training",
    imageSrc: Image3,
  },
  {
    id: 1,
    text: "Rehabilitation of GBV Survivors",
    imageSrc: Image4,
  },
  {
    id: 1,
    text: "Women and Girls Rights",
    imageSrc: Image5,
  },
  {
    id: 1,
    text: "Women's Economic Empowerment",
    imageSrc: Image6,
  },
  {
    id: 1,
    text: "Legal Support and Advocacy",
    imageSrc: Image7,
  },
];

export default function GBV() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-16 text-center">
        Gender and Gender-based Violence (GBV)
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
