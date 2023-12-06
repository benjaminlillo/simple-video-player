import Image from 'next/image'
import dynamic from 'next/dynamic'
import prisma from '@/lib/prisma'
const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {ssr: false});
import VideoStats from '@/components/VideoStats';

async function getViews() {
  const views = await prisma.view.count()
  return views
}
 
export default async function Home() {
  const views = await getViews()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-16 lg:p-24 xl:p-24 2xl:p-24 bg-fixed bg-gradient-to-t from-lime-300 from-5% dark:from-lime-900">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-sm flex">
        <p className="font-bold text-3xl w-full justify-center items-center pb-6 pt-8 static w-auto p-4 sm:text-center">
          Trees, forest, woods
        </p>
      </div>
      <div className="flex place-items-center my-5">
        <VideoPlayer />
      </div>
      <VideoStats views={views} />
    </main>
  )
}
