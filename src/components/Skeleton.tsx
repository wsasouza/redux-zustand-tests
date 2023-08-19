export function Skeleton() {
  return (
    <div className="max-w-md mx-auto bg-transparent rounded shadow">
      <div className="animate-pulse">
        <h1 className="bg-zinc-800 h-6 w-full mb-2 rounded text-zinc-800">
          Título do Conteúdo
        </h1>
        <p className="bg-zinc-800 h-6 w-full rounded text-zinc-800">
          Descrição do conteúdo...
        </p>
      </div>
    </div>
  )
}
