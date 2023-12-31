"use client"
import React, { useState, useRef, MutableRefObject } from "react";
import { BaseReactPlayerProps } from 'react-player/base';
import Image from 'next/image'
import { FaPlay, FaPause, FaSquare, FaBackwardStep, FaForwardStep } from "react-icons/fa6";
import { addView } from "@/utils/viewsUtilities";
import ReactPlayer from "react-player/lazy";

interface VideoProps {
  videoRef: MutableRefObject<ReactPlayer | null> | null;
  src: string;
}

function Video({ videoRef, src } : VideoProps) {
  let [playing, setPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [viewAdded, setViewAdded] = useState(false);
  const handlePlay = () => {
    setPlaying(!playing);
  }
  const handleFastForward = () => {
    if (videoRef && videoRef.current) {
      if (videoRef.current.getCurrentTime() + 5 < videoRef.current.getDuration()) {
        videoRef.current.seekTo(videoRef.current.getCurrentTime() + 5);
      } else {
        videoRef.current.seekTo(videoRef.current.getDuration() - 1);
      }
    }
  }
  const handleRewind = () => {
    if (videoRef && videoRef.current) {
      if (videoRef.current.getCurrentTime() - 5 >= 0) {
        videoRef.current.seekTo(videoRef.current.getCurrentTime() - 5);
      } else {
        videoRef.current.seekTo(0);
      }
    }
  }
  const handleStop = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.seekTo(0);
      setPlaying(false);
    }
  }
  const handleShowControls = () => {
    if (!showControls) {
      setShowControls(true);
    }
  }
  const handleHideControls = () => {
    if (showControls) {
      setShowControls(false);
    }
  }
  const handleAddView = async (played: number) => {
    if (videoRef && videoRef.current) {
      if (played > 0.6 && !viewAdded) {
        addView().then(() => {
          setViewAdded(true);
        });
      }
    }
  };

  return (
    <div className="relative group h-auto w-auto sm:mx-0 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96">
      <ReactPlayer
        ref={videoRef}
        url={src}
        controls={false}
        light={false}
        pip={true}
        playing={playing}
        height={'auto'}
        width={'auto'}
        onProgress={(progress) => {
          handleAddView(progress.played);
        }}
        fallback={<div>Cargando...</div>}
      />
      {/* {showControls ? ( */}
        <div className="absolute bottom-0 left-0 z-10 bg-gradient-to-t from-black w-full hidden group-hover:block">
          <div className="flex justify-start ml-2 mb-3 mt-10">
            <button onClick={handleRewind} className={'mr-2'}>
              <FaBackwardStep color={'white'} size={'2em'}/>
            </button>
            <button onClick={handlePlay} className={'mr-2'}>
              {playing ? (<FaPause color={'white'} size={'2em'}/>) : (<FaPlay color={'white'} size={'1.9em'}/>)}
            </button>
            <button onClick={handleFastForward} className={'mr-2'}>
              <FaForwardStep color={'white'} size={'2em'}/>
            </button>
            <button onClick={handleStop} className={'mr-2'}>
              <FaSquare color={'white'} size={'1.9em'}/>
            </button>
          </div>
        </div>
      {/* ) : (<></>)} */}
    </div>
  );
}

export default function VideoPlayer() {
  const videoRef = useRef<ReactPlayer | null>(null);
  let videosrc = "/forest.mp4";
  return (
    <div>
      <div className="">
        <Video
          videoRef={videoRef}
          src={videosrc}
        />
      </div>
      <source src={videosrc} type="video/mp4" />
    </div>
  );
}
