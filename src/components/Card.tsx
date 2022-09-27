import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="h-auto rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      {children}
    </div>
  );
}

export default Card;
