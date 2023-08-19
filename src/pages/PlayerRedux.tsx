import { MessageCircle } from 'lucide-react'

import { Header } from '../components/components-redux/Header'
import { VideoPlayer } from '../components/components-redux/VideoPlayer'
import { Module } from '../components/components-redux/Module'
import { useAppDispatch, useAppSelector } from '../store-redux'
import { loadCourse, useCurrentLesson } from '../store-redux/slices/player'
import { useEffect } from 'react'
import { SkeletonModule } from '../components/SkeletonModule'

export function PlayerPageWithRedux() {
  const dispatch = useAppDispatch()

  const modules = useAppSelector((state) => state.player.course?.modules)

  const { currentLesson } = useCurrentLesson()

  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  useEffect(() => {
    dispatch(loadCourse())
  }, [dispatch])

  useEffect(() => {
    if (currentLesson) document.title = `Assistindo: ${currentLesson.title}`
  }, [currentLesson])

  return (
    <div className="flex h-full py-10 items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <h1 className="text-xl font-semibold">
          1. Gerenciando estado com Redux
        </h1>
        <div className="flex items-center justify-between">
          <Header />

          <button
            type="button"
            className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-700"
          >
            <MessageCircle className="h-4 w-4" />
            Deixar Feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow">
          <div className="flex-1">
            <VideoPlayer />
          </div>
          <aside className="absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-violet-500">
            {isCourseLoading ? (
              <SkeletonModule />
            ) : (
              <>
                {modules &&
                  modules.map((module, index) => {
                    return (
                      <Module
                        key={module.id}
                        moduleIndex={index}
                        title={module.title}
                        amountOfLessons={module.lessons.length}
                      />
                    )
                  })}
              </>
            )}
          </aside>
        </main>
      </div>
    </div>
  )
}
