import PdfViewer from '@/components/ui/pdfViewer';
import { Metadata } from 'next';
import { memo } from 'react';

export const metadata:Metadata = {
  title: "Resume",
  description: "View my professional resume detailing my experience as a Full Stack Developer, technical skills, projects, and achievements in web development.",
  openGraph: {
    title: "Resume | Muhammed Sinan",
    description: "Professional resume of Muhammed Sinan - Full Stack Developer specializing in MERN stack development",
    images: [
      {
        url: "/screenshots/resume-og.png",
        width: 1200,
        height: 630,
        alt: "Muhammed Sinan's Resume",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Muhammed Sinan",
    description: "Professional resume of Muhammed Sinan - Full Stack Developer specializing in MERN stack development",
    images: ["/screenshots/resume-og.png"],
  }
};

const page = () => {
  return (
    <PdfViewer url='/assets/resume.pdf' />
  );
};

export default memo(page);