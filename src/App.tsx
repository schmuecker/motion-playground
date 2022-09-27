import { tw } from "twind";
import Card from "./components/Card";
import Nudge from "./pages/Nudge/Nudge";

function App() {
  return (
    <div className={tw`h-screen w-screen bg-white p-8 dark:bg-gray-900`}>
      <p className={tw`mb-8 text-2xl font-medium`}>motion playground.</p>
      <p className={tw`mb-4 text-xl font-bold`}>Nudge 👈 </p>
      <Card>
        <Nudge />
      </Card>
    </div>
  );
}

export default App;
