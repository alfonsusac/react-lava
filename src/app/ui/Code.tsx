import { cn } from "lazy-cn";
import type { ComponentProps, CSSProperties, ReactNode, SVGProps } from "react";
import type { ThemedToken } from "shiki";

export function CodeBlock({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "font-mono whitespace-pre min-h-0 overflow-auto grow font-semibold text-base relative",
      className
    )}
      {...props}
    />
  )
}

export function CodeLine({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn(
      "h-[1.875rem] leading-8  items-center z-10 hover:bg-black/40 -ml-4 pl-4",
      className
    )}
      {...props}
    />
  )
}

export function LineNumber({ className, ...props }: ComponentProps<"div">) {
  return (
    <span className={cn(
      "w-9 text-white/20 select-none inline-block",
      className
    )}
      {...props}
    />
  )
}

export function getCharacterWidthInEm(width: number) {
  return width * 0.3156
}





export function Token({
  style,
  token,
  ...props
}: ComponentProps<"span"> & {
  token: ThemedToken;
}) {
  return (
    <span
      {...props}
      style={{
        color: token.color,
        ...style,
      }}
    >
      {token.content}
    </span>
  );
}

export function Editor({
  className,
  style,
  lineHeight,
  gutterWidth,
  ...props
}: ComponentProps<"div"> & {
  lineHeight: CSSProperties["lineHeight"],
  gutterWidth: CSSProperties["lineHeight"],
}) {
  return (
    <div
      className={cn(
        "font-mono whitespace-pre overflow-auto grow font-semibold text-base relative",
        className
      )}
      style={{
        // @ts-expect-error custom css variable
        "--line-height": lineHeight,
        "--gutter-width": gutterWidth,
        ...style,
      }}
      {...props}
    />
  );
}
export function EditorRow({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "h-[var(--line-height)] items-center z-10 hover:bg-black/40 group/row",
        "-mx-4 px-4",
        "flex",
        "leading-[var(--line-height)]",
        "selection:bg-[#FFD27155]",
        className
      )}
      {...props}
    />
  );
}
export function EditorGutter({
  className,
  num,
  ...props
}: ComponentProps<"div"> & { num: number }) {
  return (
    <div
      className={cn(
        "group-hover/row:opacity-100 opacity-30 pl-3 pr-4 w-[var(--gutter-width)] text-end shrink-0",
        "select-none",
        className
      )}
      {...props}
    >
      {(num + 1).toString()}
    </div>
  );
}
export function Tab({
  selected,
  label,
  ...props
}: {
  selected: boolean;
  label: ReactNode;
} & ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "px-4  flex items-center gap-2 h-full",
        "text leading-none font-semibold",
        "hover:bg-white/5",
        "-my-3 py-3",
        "cursor-pointer",
        "text-[#FFD27188]",
        "select-none",
        selected && "bg-white/5 text-[#FFD271]"
      )}
      {...props}
    >
      <MaterialSymbolsCloseRounded className="opacity-20" />
      {label}
    </div>
  );
}

export function MaterialSymbolsCloseRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 12H3" />
      <path d="M17 18H3" />
      <path d="M21 6H3" />
    </svg>
  );
}