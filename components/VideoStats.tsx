"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import { getViewsCount } from '@/utils/viewsUtilities';

export default function VideoStats() {
  const [views, setViews] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getViewsCount().then((views) => {
      setViews(views);
      setLoading(false);
    });
  }, []);
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
      <div
      className=" group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Visualizaciones
        </h2>
        <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {loading ? (
            <div>Cargando...</div>
          ) : (
            views
          )}
        </div>
      </div>

      <a
        href="https://pixabay.com/videos/trees-forest-woods-sunrise-morning-189813/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Fuente{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Trees forest woods free stock video. Free for use & download.
        </p>
      </a>

      <a
        href="https://github.com/benjaminlillo/simple-video-player"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Repositorio{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Acceder al repositorio en GitHub
        </p>
      </a>
    </div>
  )
}
