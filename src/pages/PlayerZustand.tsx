import { useEffect, useState } from 'react'
import { AlignLeft } from 'lucide-react'

import { Header } from '../components/components-zustand/Header'
import { VideoPlayer } from '../components/components-zustand/VideoPlayer'
import { useCurrentLesson, useStore } from '../store-zustand'
import { ModulesContainer } from '../components/components-zustand/ModulesContainer'

export function PlayerPageWithZustand() {
  const [isOpen, setIsOpen] = useState(false)
  const { course, load, isLoading } = useStore((store) => {
    return {
      course: store.course,
      load: store.load,
      isLoading: store.isLoading,
    }
  })

  const { currentLesson } = useCurrentLesson()

  function closeSlide() {
    setIsOpen(false)
  }

  function openSlide() {
    setIsOpen(true)
  }

  useEffect(() => {
    load()
  }, [load])

  useEffect(() => {
    if (currentLesson) document.title = `Assistindo: ${currentLesson.title}`
  }, [currentLesson])

  return (
    <>
      <div className="flex h-full py-10 items-center justify-center bg-gradient-to-tl from-zinc-700 to-zinc-950 text-zinc-50">
        <div className="flex w-[1100px] flex-col gap-6">
          <h1 className="text-xl font-semibold">
            2. Gerenciando estado com Zustand
          </h1>
          <div className="flex items-center justify-between">
            <Header />

            <button
              type="button"
              className="flex items-center gap-1 rounded bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors duration-300 disabled:bg-zinc-400 disabled:cursor-not-allowed"
              onClick={openSlide}
              disabled={isLoading}
            >
              <AlignLeft className="h-4 w-4" />
              Aulas
            </button>
          </div>
          <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
            <div className="flex-1">
              <VideoPlayer />
            </div>
          </main>
        </div>
      </div>

      {course && (
        <ModulesContainer
          tech="Com Zustand"
          course={course}
          isOpen={isOpen}
          closeSlide={closeSlide}
        />
      )}
    </>
  )
}
