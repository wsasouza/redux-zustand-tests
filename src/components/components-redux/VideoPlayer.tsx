import ReactPlayer from 'react-player/youtube'
import { Loader } from 'lucide-react'

import { next, useCurrentLesson } from '../../store-redux/slices/player'
import { useAppDispatch, useAppSelector } from '../../store-redux'

export function VideoPlayer() {
  const dispatch = useAppDispatch()

  const { currentLesson: lesson } = useCurrentLesson()

  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${lesson?.id}`}
        />
      )}
    </div>
  )
}
