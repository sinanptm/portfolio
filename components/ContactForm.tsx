'use client';

import { memo, useCallback, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from 'next/image';
import { submitMessage } from '@/action';
import { toast } from '@/hooks/useToast';
import { motion } from 'framer-motion';
import { containerVariants } from '@/style';

const Contact = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for reaching out! I'll get back to you soon. 😊👍",
      variant: "success",
      duration: 5000,
    });
    await submitMessage(name, contactInfo, message);
    setName('');
    setContactInfo('');
    setMessage('');
  }, [contactInfo, message, name]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      variants={containerVariants}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-1/2 max-w-[580px] mx-auto p-4 sm:p-6 md:p-8 rounded-lg relative overflow-hidden bg-opacity-80 bg-gray-900 backdrop-blur-md shadow-lg"
      style={{
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(88, 85, 255) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600"
      >
        Contact Me
      </motion.h2>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-200">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="How can I address you"
            className="mt-1 w-full bg-gray-900/50 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors duration-300 text-sm sm:text-base"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Label htmlFor="contactInfo" className="text-xs sm:text-sm font-medium text-gray-200">
            Contact Information (Email or Phone)
          </Label>
          <Input
            id="contactInfo"
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
            placeholder="Where can I get back to you"
            className="mt-1 w-full bg-gray-900/50 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors duration-300 text-sm sm:text-base"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-200">
            Message
          </Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Hello Sinan! I Want to Hire You 😊..."
            rows={4}
            className="mt-1 w-full bg-gray-900/50 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 resize-none transition-colors duration-300 text-sm sm:text-base"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-colors duration-300 py-4 sm:py-5 md:py-6 relative overflow-hidden group text-sm sm:text-base"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <Image
              src="/assets/icons/send.svg"
              width={16}
              height={16}
              alt="Send"
              className="ml-2 h-3 w-3 sm:h-4 sm:w-4 inline-block relative z-10"
            />
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default memo(Contact);

