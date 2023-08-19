import { Skeleton } from '../Skeleton'
import { useCurrentLesson, useStore } from '../../store-zustand'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isLoading = useStore((store) => store.isLoading)

  return (
    <div className="flex flex-col gap-1">
      {isLoading ? (
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
