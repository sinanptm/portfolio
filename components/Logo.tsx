import Link from 'next/link';
import { motion } from 'framer-motion';
import { memo } from 'react';

const Logo = ({ onClick }: { onClick: () => void; }) => {
    return (
        <Link href="/" className="flex items-center space-x-2 z-50">
            <motion.span
                onClick={onClick}
                className="font-bold text-xl font-source-code-pro text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-purple-600"
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
            >
                {'< Sinanptm />'}
            </motion.span>
        </Link>
    );
};

export default memo(Logo);