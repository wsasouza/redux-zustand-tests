import { FileVideo, Play } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  onPlay: () => void
  isCurrent?: boolean
}

export function Lesson({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonProps) {
  return (
    <button
      type="button"
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-500 enabled:hover:text-zinc-100"
    >
      {isCurrent ? (
        <Play className="h-6 w-6 text-emerald-500" />
      ) : (
        <FileVideo className="h-6 w-6 text-zinc-500" />
      )}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  )
}
