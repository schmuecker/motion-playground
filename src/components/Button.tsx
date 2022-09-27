import clsx from "clsx";

const colorClasses = {
  purple:
    "from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 focus:ring-purple-200 dark:focus:ring-purple-800",
};

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
    <button
      className={clsx(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 dark:text-white",
        colorClasses[bg]
      )}
      onClick={onClick}
    >
      <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
        {text}
      </span>
    </button>
  );
}

export default Button;
