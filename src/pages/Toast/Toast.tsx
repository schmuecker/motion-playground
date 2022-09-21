import { useSpring, animated, useTransition } from "@react-spring/web";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { tw } from "twind";
import Button from "../../components/Button";

function Message({ visible }: { visible: Boolean }) {
  const transitions = useTransition(visible, {
    from: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -20 },
  });
  return transitions(
    (styles, item) =>
      item && (
        <animated.div
          style={styles}
          className={tw`bg-purple-400 px-2 py-1 rounded-xl`}
        >
          Message
        </animated.div>
      )
  );
}

function Toast() {
  return (
    <div>
      <Toaster />
      <Button
        bg="purple"
        text="Show toast"
        onClick={() => {
          toast.custom((t) => <Message visible={t.visible} />);
        }}
      />
    </div>
  );
}

export default Toast;
