"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyMount({
  children,
  rootMargin = "200px",
  fallbackClassName = "w-full h-full",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return <div ref={ref}>{visible ? children : <div className={fallbackClassName} />}</div>;
}
