import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import Button from "../../components/Button";

function Toast() {
  const [on, show] = useState(false);
  const toggle = () => show((o) => !o);
  const styles = useSpring({ opacity: on ? 1 : 0, y: on ? 0 : -20 });
  return (
    <div>
      <Button bg="purple" text="Show toast" onClick={toggle} />
      <animated.div style={styles}>Toast</animated.div>
    </div>
  );
}

export default Toast;
