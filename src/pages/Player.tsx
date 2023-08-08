import { ChevronDown, MessageCircle, Video } from 'lucide-react'

import { Header } from '../components/Header'
import { VideoPlayer } from '../components/VideoPlayer'

export function PlayerPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
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
            <div>
              <button
                type="button"
                className="flex w-full items-center gap-3 bg-zinc-800 p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
                  1
                </span>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendendo o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="ml-auto h-5 w-5 text-zinc-400" />
              </button>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full items-center gap-3 bg-zinc-800 p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
                  1
                </span>

                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendendo o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>

                <ChevronDown className="ml-auto h-5 w-5 text-zinc-400" />
              </button>

              <nav className="relative flex flex-col gap-4 p-6">
                <button
                  type="button"
                  className="flex items-center gap-3 text-sm text-zinc-400"
                >
                  <Video className="h-4 w-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-3 text-sm text-zinc-400"
                >
                  <Video className="h-4 w-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-3 text-sm text-zinc-400"
                >
                  <Video className="h-4 w-4 text-zinc-500" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    09:13
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  )
}