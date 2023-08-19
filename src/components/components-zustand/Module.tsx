import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'

import { Lesson } from './Lesson'
import { useStore } from '../../store-zustand'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLessons: number
}

export function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  const { currentModuleIndex, currentLessonIndex, play, lessons } = useStore(
    (store) => {
      return {
        currentModuleIndex: store.currentLessonIndex,
        currentLessonIndex: store.currentLessonIndex,
        play: store.play,
        lessons: store.course?.modules[moduleIndex].lessons,
      }
    },
  )

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </span>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{`${amountOfLessons} aulas`}</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                currentModuleIndex === moduleIndex &&
                currentLessonIndex === lessonIndex
              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => play([moduleIndex, lessonIndex])}
                  isCurrent={isCurrent}
                />
              )
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
