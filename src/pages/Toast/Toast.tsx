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
          className="inline-block w-auto rounded-full bg-black/25 py-5 pl-6 pr-12 font-sans backdrop-blur-sm"
        >
          <div className={"flex items-center gap-5"}>
            <Dot w={45} h={45} color="#4ade80" border="#fff" borderWidth={1} />
            <div className={"flex-grow-0"}>
              <div className={"flex-grow-0 whitespace-nowrap font-bold"}>
                {text}
              </div>
              <div className={"whitespace-nowrap font-bold opacity-60"}>
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

  return (
    <div className={"h-auto"}>
      <Toaster toastOptions={{ duration: 2000 }} />
      <Button
        bg="purple"
        text="Show toast"
        onClick={() => {
          toast.custom(
            (t) => (
              <Message
                text="AirPods Pro"
                subtext="Connected"
                visible={t.visible}
              />
            ),
            { position: "top-right" }
          );
        }}
      />
    </div>
  );
}

export default Nudge;
