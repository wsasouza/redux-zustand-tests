import { useEffect, useState } from 'react'
import { AlignLeft } from 'lucide-react'

import { Header } from '../components/components-redux/Header'
import { VideoPlayer } from '../components/components-redux/VideoPlayer'
import { useAppDispatch, useAppSelector } from '../store-redux'
import { loadCourse, useCurrentLesson } from '../store-redux/slices/player'
import { ModulesContainer } from '../components/components-redux/ModulesContainer'

export function PlayerPageWithRedux() {
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useAppDispatch()

  const course = useAppSelector((state) => state.player.course)

  const { currentLesson } = useCurrentLesson()

  const isLoading = useAppSelector((state) => state.player.isLoading)

  function closeSlide() {
    setIsOpen(false)
  }

  function openSlide() {
    setIsOpen(true)
  }

  useEffect(() => {
    dispatch(loadCourse())
  }, [dispatch])

  useEffect(() => {
    if (currentLesson) document.title = `Assistindo: ${currentLesson.title}`
  }, [currentLesson])

  return (
    <>
      <div className="flex h-full py-10 items-center justify-center bg-zinc-950 text-zinc-50">
        <div className="flex w-[1100px] flex-col gap-6">
          <h1 className="text-xl font-semibold">
            1. Gerenciando estado com Redux
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
          tech="Com Redux"
          course={course}
          isOpen={isOpen}
          closeSlide={closeSlide}
        />
      )}
    </>
  )
}
