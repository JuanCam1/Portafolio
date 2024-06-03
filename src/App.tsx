import { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Content, Switch } from "./components";
import { Loading } from "./components/shared/loading/Loading";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/projects");
  }, [navigate]);

  return (
    <Suspense fallback={<Loading />}>
      <main className="w-[98vw] h-full relative">
        <div className="absolute right-5 top-2">
          <Switch />
        </div>
        <div className="w-[100%]">
          <Content />
        </div>
      </main>
    </Suspense>
  );
}

export default App;

