import PdfViewer from '@/components/ui/pdfViewer';
import { Metadata } from 'next';
import { memo } from 'react';

export const metadata: Metadata ={
  description:"Muhammed sinan's resume"
}

const page = () => {
  return (
    <PdfViewer url='/assets/resume.pdf' />
  )
}

export default memo(page);