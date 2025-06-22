"use client";

// components/LoopingAnimatedList.tsx
import { useEffect, useState } from "react";

interface Transactions {
  name: string;
  amount: number;
}

interface LoopingAnimatedListProps {
  items: Transactions[];
  interval?: number;
  renderItem: (item: Transactions, index: number) => React.ReactNode;
  windowSize?: number;
}

export function LoopingAnimatedList({
  items,
  interval = 3000,
  renderItem,
  windowSize = 3,
}: LoopingAnimatedListProps) {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(loop);
  }, [items.length, interval]);

  const getWindowItems = () => {
    const result: Transactions[] = [];

    for (let i = 0; i < windowSize; i++) {
      const index = (startIndex + i) % items.length;
      result.push(items[index]);
    }

    return result;
  };

  return (
    <div className="flex flex-col w-full gap-2">
      {getWindowItems().map((item, i) =>
        renderItem(item, (startIndex + i) % items.length)
      )}
    </div>
  );
}
