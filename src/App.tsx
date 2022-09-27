import Card from "./components/Card";
import Nudge from "./pages/Nudge/Nudge";
import Toast from "./pages/Toast/Toast";

function App() {
  return (
    <div className="h-screen w-screen bg-white p-8 dark:bg-gray-900">
      <p className="mb-8 text-2xl font-medium">motion playground.</p>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="group mb-4 text-xl font-bold">
            Nudge{" "}
            <span className="inline-block translate-x-0 transition-all group-hover:-translate-x-1">
              👈
            </span>
          </p>
          <Card>
            <Nudge />
          </Card>
        </div>
        <div>
          <p className="group mb-4 text-xl font-bold">
            Toast{" "}
            <span className="transition-all group-hover:brightness-75 group-hover:contrast-200">
              🥪
            </span>{" "}
          </p>
          <Card>
            <Toast />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
