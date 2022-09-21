import { tw } from "twind";
import Card from "./components/Card";
import Toast from "./pages/Toast/Toast";

function App() {
  return (
    <div className={tw`h-screen w-screen p-8 bg-black`}>
      <h1 className={tw`text-xl font-bold mb-4`}>Toast Notification</h1>
      <Card>
        <Toast />
      </Card>
    </div>
  );
}

export default App;
