import ReactPlayer from 'react-player/youtube'

import { next, useCurrentLesson } from '../store/slices/player'
import { useAppDispatch } from '../store'

export function VideoPlayer() {
  const dispatch = useAppDispatch()

  const { currentLesson: lesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
  }

  if (!lesson) {
    return null
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${lesson.id}`}
      />
    </div>
  )
}
