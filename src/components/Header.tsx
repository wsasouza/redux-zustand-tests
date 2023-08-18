import { useAppSelector } from '../store'
import { useCurrentLesson } from '../store/slices/player'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  return (
    <div className="flex flex-col gap-1">
      {isCourseLoading ? (
        <div className="animate-pulse">
          <div className="h-6 w-3/4 bg-zinc-700"></div>
          <div className="h-6 w-2/3 bg-zinc-700"></div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
          <span className="text-sm text-zinc-400">
            Módulo: {currentModule?.title}
          </span>
        </>
      )}
    </div>
  )
}
