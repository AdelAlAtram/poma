import { motion } from "framer-motion";
import Image1 from "./image/mh/34BAB5B2-E8B7-4775-A24D-4B67282B1C92 (1).png";
import Image2 from "./image/mh/Screenshot 2024-07-21 101823.png";
import Image3 from "./image/mh/Screenshot 2024-07-23 at 13.54.18.png";
import Image4 from "./image/mh/shutterstock_53408203.jpg";
import Image5 from "./image/mh/shutterstock_1643485159.jpg";
import Image6 from "./image/mh/shutterstock_1832530570.jpg";
import Image7 from "./image/mh/WhatsApp Image 2021-11-30 at 13.54.28.jpeg";
import Image8 from "./image/mh/WhatsApp Image 2021-11-30 at 13.54.38.jpeg";
import Image9 from "./image/mh/WhatsApp Image 2021-11-30 at 14.11.15.jpeg";
import Image10 from "./image/mh/WhatsApp Image 2022-05-17 at 11.53.19 AM (2).jpeg";
import Image11 from "./image/mh/shutterstock_2373647011.jpg";
import Image12 from "./image/mh/4.png";
import Image13 from "./image/mh/82.jpg";
import Image14 from "./image/mh/IMG_0155.JPG";

const products = [
  {
    id: 1,
    text: "Clinical Supervision and Capacity Building",
    imageSrc: Image1,
  },
  {
    id: 1,
    text: "Strategy and Policy",
    imageSrc: Image2,
  },
  {
    id: 1,
    text: "Mental Health Frameworks",
    imageSrc: Image3,
  },
  {
    id: 1,
    text: "Mental Health Policies",
    imageSrc: Image4,
  },
  {
    id: 1,
    text: "Mental Health System Development",
    imageSrc: Image5,
  },
  {
    id: 1,
    text: "Standards of Practices for Mental Health",
    imageSrc: Image6,
  },
  {
    id: 1,
    text: "Crisis Response",
    imageSrc: Image7,
  },
  {
    id: 1,
    text: "Advocacy & Prevention Awareness",
    imageSrc: Image8,
  },
  {
    id: 1,
    text: "Community Engagement",
    imageSrc: Image9,
  },
  {
    id: 1,
    text: "Capacity Development and Training",
    imageSrc: Image10,
  },
  {
    id: 1,
    text: "Technical Assistance, Review",
    imageSrc: Image11,
  },
  {
    id: 1,
    text: "Vicarious Trauma and Providers MH Support",
    imageSrc: Image12,
  },
  {
    id: 1,
    text: "Stakeholder Analysis and Mapping",
    imageSrc: Image13,
  },
  {
    id: 1,
    text: "Establish Working Groups & Coordination Bodies",
    imageSrc: Image14,
  },
];

export default function MentalHealth() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-16 text-center">
          Mental Health & Psychology Development
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 justify-items-center">
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
