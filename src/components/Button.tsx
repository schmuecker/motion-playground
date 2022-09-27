import { tw } from "twind";
import { styled } from "@twind/react";

const Container = styled("button", {
  base: `relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br hover:text-white dark:text-white focus:ring-4 focus:outline-none`,
  variants: {
    bg: {
      purple: `from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500  focus:ring-purple-200 dark:focus:ring-purple-800`,
    },
  },
});

function Button({
  bg,
  onClick = () => {},
  text = "Button",
}: {
  bg: "purple";
  onClick: () => void;
  text: string;
}) {
  return (
    <Container bg={bg} onClick={onClick}>
      <span
        className={tw`relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900`}
      >
        {text}
      </span>
    </Container>
  );
}

export default Button;
