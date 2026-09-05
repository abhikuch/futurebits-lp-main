"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

function hexToRgb(hex) {
  let value = hex.replace("#", "");
  if (value.length === 3) {
    value = value
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const hexInt = parseInt(value, 16);
  return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
}

function shouldAnimateLive() {
  if (typeof window === "undefined") return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.matchMedia("(max-width: 640px)").matches;
  return !reduce && !coarse && !narrow;
}

function ParticleField({ className, ...props }) {
  return (
    <div
      className={cn("pointer-events-none fb-particle-field", className)}
      aria-hidden="true"
      {...props}
    />
  );
}

function ParticleCanvas({
  className = "",
  quantity = 16,
  staticity = 50,
  ease = 50,
  size = 0.4,
  color = "#ffffff",
  vx = 0.3,
  vy = 0.2,
  ...props
}) {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const context = useRef(null);
  const circles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const rafID = useRef(null);
  const resizeTimeout = useRef(null);
  const running = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return undefined;

    context.current = canvas.getContext("2d", { alpha: true });
    const rgb = hexToRgb(color);

    const circleParams = () => ({
      x: Math.floor(Math.random() * canvasSize.current.w),
      y: Math.floor(Math.random() * canvasSize.current.h),
      translateX: 0,
      translateY: 0,
      size: Math.floor(Math.random() * 2) + size,
      alpha: 0,
      targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      magnetism: 0.1 + Math.random() * 4,
    });

    const drawCircle = (circle, update = false) => {
      if (!context.current) return;
      const { x, y, translateX, translateY, size: radius, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, radius, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
      context.current.fill();
      context.current.setTransform(1, 0, 0, 1, 0, 0);
      if (!update) circles.current.push(circle);
    };

    const clearContext = () => {
      if (!context.current) return;
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    };

    const resizeCanvas = () => {
      canvasSize.current.w = container.offsetWidth;
      canvasSize.current.h = container.offsetHeight;
      canvas.width = canvasSize.current.w;
      canvas.height = canvasSize.current.h;
      canvas.style.width = `${canvasSize.current.w}px`;
      canvas.style.height = `${canvasSize.current.h}px`;
      circles.current = [];
      for (let i = 0; i < quantity; i += 1) {
        drawCircle(circleParams());
      }
    };

    const remapValue = (value, start1, end1, start2, end2) => {
      const remapped =
        ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return remapped > 0 ? remapped : 0;
    };

    const animate = () => {
      if (!running.current) return;
      clearContext();
      circles.current.forEach((circle, i) => {
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSize.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.current.h - circle.y - circle.translateY - circle.size,
        ];
        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = remapValue(closestEdge, 0, 20, 0, 1);
        if (remapClosestEdge > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) {
            circle.alpha = circle.targetAlpha;
          }
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        }
        circle.x += circle.dx + vx;
        circle.y += circle.dy + vy;
        circle.translateX +=
          (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
          ease;
        circle.translateY +=
          (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
          ease;
        drawCircle(circle, true);

        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.current.h + circle.size
        ) {
          circles.current.splice(i, 1);
          drawCircle(circleParams());
        }
      });
      rafID.current = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (running.current) return;
      running.current = true;
      animate();
    };

    const stop = () => {
      running.current = false;
      if (rafID.current != null) {
        window.cancelAnimationFrame(rafID.current);
        rafID.current = null;
      }
    };

    const syncPlayback = () => {
      const visible = document.visibilityState !== "hidden";
      if (visible) start();
      else stop();
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = event.clientX - rect.left - canvasSize.current.w / 2;
      mouse.current.y = event.clientY - rect.top - canvasSize.current.h / 2;
    };

    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(resizeCanvas, 200);
    };

    resizeCanvas();

    const intersection = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && document.visibilityState !== "hidden") {
          start();
        } else {
          stop();
        }
      },
      { rootMargin: "80px" }
    );
    intersection.observe(container);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      stop();
      intersection.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", syncPlayback);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, [color, ease, quantity, size, staticity, vx, vy]);

  return (
    <div
      className={cn("pointer-events-none", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}

export const Particles = ({
  className = "",
  quantity = 16,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0.3,
  vy = 0.2,
  ...props
}) => {
  const [mode, setMode] = useState("static");

  useEffect(() => {
    if (!shouldAnimateLive()) {
      setMode("static");
      return undefined;
    }

    let cancelled = false;
    const enable = () => {
      if (!cancelled) setMode("live");
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(enable, { timeout: 1400 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = window.setTimeout(enable, 400);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [refresh]);

  if (mode !== "live") {
    return <ParticleField className={className} {...props} />;
  }

  return (
    <ParticleCanvas
      className={className}
      quantity={quantity}
      staticity={staticity}
      ease={ease}
      size={size}
      color={color}
      vx={vx}
      vy={vy}
      {...props}
    />
  );
};

export default Particles;
