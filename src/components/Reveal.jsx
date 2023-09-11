import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({ children }, delay) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      console.log("in view");
    }
  }, [inView]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: parseFloat(delay) || 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
