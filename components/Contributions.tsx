import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { memo } from 'react';
import Link from 'next/link';

const Contributions = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-white mb-6">Contribute to This Portfolio</h2>
          <p className="text-gray-300 mb-6">
            This portfolio is a continuous work in progress. Your support and feedback are 
            invaluable for making it better. Whether it&apos;s starring the repository, suggesting 
            features, or reporting issues, every contribution counts!
          </p>
          <p className="text-gray-300 mb-6">
            If you enjoy the work or find inspiration here, consider showing your appreciation 
            by starring the project on GitHub. Let&apos;s build something incredible together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://github.com/sinanptm/portfolio">
              <Button
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700"
              >
                <Image
                  src={'/assets/icons/star.svg'}
                  width={12}
                  height={12}
                  alt="Stars"
                  className="w-5 h-5 text-yellow-500"
                />
                Star me on GitHub
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/images/coding.svg"
            alt="Coding illustration"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Contributions);
