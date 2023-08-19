import { useAppSelector } from '../store'
import { useCurrentLesson } from '../store/slices/player'
import { Skeleton } from './Skeleton'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  return (
    <div className="flex flex-col gap-1">
      {isCourseLoading ? (
        <Skeleton />
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
