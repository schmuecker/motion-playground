import { motion, AnimatePresence, AnimationProps } from "framer-motion";
import { toast } from "react-hot-toast";
import Button from "../../components/Button";
import Dot from "../../components/Dot";

interface MessageProps {
  text: string;
  subtext: string;
  visible: boolean;
}

const animation: AnimationProps = {
  initial: { opacity: 0, y: -80, scale: 1 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 0, scale: 0.75 },
  transition: { type: "spring", mass: 1, stiffness: 170, damping: 26 },
};

function Message({ text, subtext, visible }: MessageProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="content"
          initial={animation.initial}
          animate={animation.animate}
          exit={animation.exit}
          transition={animation.transition}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Nudge() {
  return (
    <div className={"h-auto"}>
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
