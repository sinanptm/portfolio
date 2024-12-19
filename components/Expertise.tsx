import { motion } from 'framer-motion';
import { IconCode, IconServer, IconCloudComputing, IconTestPipe, IconServer2 } from '@tabler/icons-react';
import { memo } from 'react';

const Expertise = () => {
    const expertiseAreas = [
        { icon: IconCode, title: "Frontend", description: "Intuitive UIs" },
        { icon: IconServer, title: "Backend", description: "Robust systems" },
        { icon: IconCloudComputing, title: "DevOps", description: "Seamless deployment" },
        { icon: IconTestPipe, title: "Testing", description: "Quality assurance" },
        { icon: IconServer2, title: "Hosting", description: "Reliable infrastructure" },
    ];

    return (
        <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 C25,50 75,50 100,0 L100,100 L0,100 Z" fill="rgba(59, 130, 246, 0.1)" />
                <path d="M0,100 C25,50 75,50 100,100" fill="none" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="0.5" />
            </svg>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                {expertiseAreas.map((area, index) => (
                    <motion.div
                        key={area.title}
                        className="flex flex-col items-center text-center p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                        <area.icon className="w-12 h-12 mb-2 text-blue-500" />
                        <h3 className="text-lg font-semibold mb-1">{area.title}</h3>
                        <p className="text-sm text-gray-400">{area.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>

    );
};

export default memo(Expertise);