import ReactPlayer from 'react-player/youtube'
import { useDispatch } from 'react-redux'

import { next, useCurrentLesson } from '../store/slices/player'

export function VideoPlayer() {
  const dispatch = useDispatch()

  const { currentLesson: lesson } = useCurrentLesson()

  function handlePlayNext() {
    dispatch(next())
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
