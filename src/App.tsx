import { Suspense } from "react";
import { Content, Switch } from "./components";
import { Loading } from "./components/shared/loading/Loading";

function App() {
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
