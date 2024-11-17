'use client';

import { memo, useCallback, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from 'next/image';
import { submitMessage } from '@/action';
import { toast } from '@/hooks/useToast';

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
  },[contactInfo, message, name]);

  return (
    <div
      className="w-full lg:w-1/2 p-8 rounded-lg relative overflow-hidden bg-opacity-80 bg-gray-900 backdrop-blur-md shadow-lg animate-fadeIn"
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
      <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-200">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="John Doe"
            className="mt-1 w-full bg-gray-900/50 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors duration-300"
          />
        </div>
        <div>
          <Label htmlFor="contactInfo" className="text-sm font-medium text-gray-200">
            Contact Information (Email or Phone)
          </Label>
          <Input
            id="contactInfo"
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
            placeholder="johndoe@email.com"
            className="mt-1 w-full bg-gray-900/50 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-colors duration-300"
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-sm font-medium text-gray-200">
            Message
          </Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Hello Sinan! I Want to Hire You 😊..."
            rows={4}
            className="mt-1 w-full bg-gray-900/50 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 resize-none transition-colors duration-300"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-colors duration-300 py-6 relative overflow-hidden group"
        >
          <span className="relative z-10">Send Message</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          <Image
            src="/assets/icons/send.svg.svg"
            width={16}
            height={16}
            alt="Send"
            className="ml-2 h-4 w-4 inline-block relative z-10"
          />
        </Button>
      </form>
    </div>
  );
};

export default memo(Contact);