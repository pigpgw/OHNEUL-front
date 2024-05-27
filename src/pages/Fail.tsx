import { motion } from 'framer-motion';

function Fail() {
  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <div>실패 페이지입니다.</div>;
    </motion.div>
  );
}

export default Fail;
