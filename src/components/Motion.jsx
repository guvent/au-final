import { motion } from "framer-motion";

const Motion = ({ children, initial, animate, exit, transition, ...props }) => (
    <motion.div
        initial={initial ?? { opacity: 0, marginTop: -30 }}
        animate={animate ?? { opacity: 1, marginTop: 0 }}
        exit={exit ?? { opacity: 0, marginTop: 30 }}
        transition={transition ?? { duration: 0.2 }}
        {...props}
    >
        {children}
    </motion.div>
);

export default Motion;
