import ReactPlayer from 'react-player/youtube'
import { useAppSelector } from '../store'
import { useDispatch } from 'react-redux'
import { next } from '../store/slices/player'

export function VideoPlayer() {
  const dispatch = useDispatch()

  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]
    return currentLesson
  })

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
