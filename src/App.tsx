import { tw } from "twind";
import Card from "./components/Card";
import Toast from "./pages/Toast/Toast";

function App() {
  return (
    <div className={tw`h-screen w-screen p-8 bg-white dark:bg-gray-900`}>
      <p className={tw`text-2xl font-medium mb-8`}>motion playground.</p>
      <p className={tw`text-xl font-bold mb-4`}>Toast Notification 🥪 </p>
      <Card>
        <Toast />
      </Card>
    </div>
  );
}

export default App;
