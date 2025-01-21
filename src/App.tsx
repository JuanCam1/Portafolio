import { Suspense } from "react"
import Content from "./components/section/content"
import ModeToggle from "./components/shared/mode-toggle"
import Loading from "./components/shared/loading"

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex justify-center w-full h-full text-slate-800 dark:text-slate-300">
        <div className="relative max-w-[700px]">
          <div className="top-2 right-5 fixed">
            <ModeToggle />
          </div>
          <div className="w-[100%]">
            <Content />
          </div>
        </div>
      </main>
    </Suspense>
  )
}

export default App
