import Project from '@/components/Project';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title:"Projects"
}

const page = () => {
  return (
    <Project />
  )
}

export default page