function Module() {
  return (
    <div className="rounded-md p-4 bg-zinc-800 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-zinc-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-zinc-700 rounded"></div>
          <div className="space-y-3">
            <div className="h-2 w-1/5 bg-zinc-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Lesson() {
  return (
    <div className="rounded-md px-4 py-3 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="grid grid-cols-6 gap-4">
            <div className="h-2 bg-zinc-700 rounded col-span-1"></div>
            <div className="h-2 bg-zinc-700 rounded col-span-4"></div>
            <div className="h-2 bg-zinc-700 rounded col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkeletonModule() {
  return (
    <>
      <Module />
      <Lesson />
      <Lesson />
      <Lesson />
      <Lesson />
      <Lesson />
      <Lesson />
      <Module />
    </>
  )
}
