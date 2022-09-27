import { animated, useTransition } from "@react-spring/web";
import { toast, Toaster } from "react-hot-toast";
import { useToaster } from "react-hot-toast";
import { tw } from "twind";
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
          className={tw`w-auto inline-block py-5 pl-6 pr-12 bg-black font-sans rounded-full`}
        >
          <div className={tw`flex items-center gap-5`}>
            <Dot w={45} h={45} color="#4ade80" border="#fff" borderWidth={1} />
            <div className={tw`flex-grow-0`}>
              <div className={tw`font-bold whitespace-nowrap flex-grow-0`}>
                {text}
              </div>
              <div className={tw`font-bold whitespace-nowrap opacity-60`}>
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
    <div className={tw`h-auto`}>
      <Toaster toastOptions={{ duration: 2000 }} />
      <Button
        bg="purple"
        text="Show nudge"
        onClick={() => {
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
