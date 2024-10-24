import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/constants";
import Image from "next/image";
import Link from "next/link";


export default function ProfileSummary() {


  return (
    <section className="mb-16">
      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-3xl text-purple-400">Profile Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            {profile.summary}
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link href="mailto:muhammedsinan0549@gmail.com">
              <Button variant="outline" className="w-full sm:w-auto text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300">
                <Image alt="Email" width={13} height={13} src={'/assets/email.svg'} className="mr-2 h-4 w-4" />
                {profile.email}
              </Button>
            </Link>
            <Link href="tel:+918089507749">
              <Button variant="outline" className="w-full sm:w-auto text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300">
                <Image alt="Phone" width={13} height={13} src={'/assets/phone.svg'} className="mr-2 h-4 w-4" />
                {profile.phone}
              </Button>
            </Link>
            <Link href="/resume">
              <Button variant="outline" className="w-full sm:w-auto text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all duration-300">
                <Image alt="Resume" width={13} height={13} src={'/assets/download.svg'} className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
