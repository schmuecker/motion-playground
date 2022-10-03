import { animated, useTransition } from "@react-spring/web";
import { toast, Toaster } from "react-hot-toast";
import { useToaster } from "react-hot-toast";
import Button from "../../components/Button";
import Dot from "../../components/Dot";

interface MessageProps {
  text: string;
  subtext: string;
  visible: boolean;
}

function Message({ text, subtext, visible }: MessageProps) {
  const transitions = useTransition(visible, {
    from: { opacity: 0, y: -80, scale: 1 },
    enter: { opacity: 1, y: 0, scale: 1 },
    leave: { opacity: 0, y: 0, scale: 0.75 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          className="w-auto rounded-full bg-black/25 py-3 pl-4 pr-12 backdrop-blur-sm dark:bg-white/50"
        >
          <div className="flex items-center gap-5 ">
            <Dot w={45} h={45} color="#4ade80" border="#fff" borderWidth={1} />
            <div className="flex-grow-0">
              <div className="flex-grow-0 whitespace-nowrap font-sans font-bold text-black dark:text-white">
                {text}
              </div>
              <div className="whitespace-nowrap font-sans font-bold opacity-60">
                {subtext}
              </div>
            </div>
          </div>
        </animated.div>
      )
  );
}

function Nudge() {
  const { toasts } = useToaster();
  const hasToast = toasts.filter((t) => t.visible).length > 0;

  return (
    <div className={"h-auto"}>
      <Toaster toastOptions={{ duration: 2000 }} />
      <Button
        bg="purple"
        text="Show nudge"
        onClick={() => {
          console.log("toast");
          !hasToast &&
            toast.custom((t) => (
              <Message
                text="AirPods Pro"
                subtext="Connected"
                visible={t.visible}
              />
            ));
        }}
      />
    </div>
  );
}

export default Nudge;
