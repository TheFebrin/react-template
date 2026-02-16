import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-semibold tracking-tight">shadcn/ui on Vite</h1>
      <div className="flex items-center gap-3">
        <Button>Click me</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  )
}

export default App
