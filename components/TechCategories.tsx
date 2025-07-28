'use client';

import { motion } from 'framer-motion';
import { TechCategory } from '@/types';
import TechCard from './TechCard';
import { cn } from '@/lib/utils';

interface TechCategoriesProps {
    categories: TechCategory[];
}

const TechCategories = ({ categories }: TechCategoriesProps) => {
    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-8"
            >
                {categories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={cn(
                                "p-2 rounded-lg",
                                `bg-gradient-to-r ${category.color} bg-opacity-20`
                            )}>
                                <span className="text-xl">{category.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                                <p className="text-sm text-gray-400">{category.description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {category.technologies.map((tech, techIndex) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: (categoryIndex * 0.1) + (techIndex * 0.02)
                                    }}
                                >
                                    <TechCard tech={tech} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechCategories;
