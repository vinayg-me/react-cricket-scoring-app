import { Button } from './components/ui/button'

function App() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto">
        <h1 className="mb-8 text-4xl font-bold">Cricket Scoring App</h1>
        <div className="space-x-4">
          <Button>Start New Game</Button>
          <Button variant="secondary">View Rules</Button>
        </div>
      </div>
    </div>
  )
}

export default App
