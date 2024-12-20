import { cn } from "lazy-cn";
import Link from "next/link";



export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#D4420D] bg-grid bg-center flex flex-col gap-24 items-center pb-2 px-2 relative">

      <header className="mt-20 text-center px-4 flex flex-col items-center gap-4 w-full max-w-screen-lg bg-[#D4420D] outline outline-1 outline-[#FFD27188] p-20  shadow-xl rounded-lg relative">
        <div className="absolute top-0 left-0 right-0 flex">
          <div className="w-2 h-2 rounded-full bg-[#FFD27188] ml-3 mt-3" />
          <div className="w-2 h-2 rounded-full bg-[#FFD27188] ml-1 mt-3" />
          <div className="w-2 h-2 rounded-full bg-[#FFD27188] ml-1 mt-3" />
          <div className="ml-4 mt-1.5 text-sm text-[#FFD27188] font-mono">/home-screen.lava</div>
        </div>
        <div className="">
          <img src="/logo.svg" className="h-8 opacity-60" />
        </div>
        <div className="text-[#F16621] font-medium text-4xl">Welcome learners!</div>
        <h1 className="text-7xl md:text-8xl lg:text-9xl text-[#FFD271] font-semibold tracking-normal">Learn<br /> Anything via <br />Animation</h1>
        <div className="text-[#FFD27188] font-medium text-lg md:text-2xl">This website holds some of alfonsusac&apos;s animation videos</div>
      </header>
      <section className="flex flex-col items-center gap-8 w-full max-w-screen-lg">
        <h2 className="text-[#F16621] font-medium text-4xl text-center">Directories</h2>
        <div className="flex flex-wrap gap-2 w-full justify-center">
          {
            [
              {
                title: "useState",
                description: "Learn how to use useState",
                color: "#FFD271",
                link: "/use-state"
              },
              {
                title: "useRef",
                description: "Learn how to use useRef",
                color: "#FFD271",
                // link: "/useRef"
              },
              {
                title: "useEffect",
                description: "Learn how to use useEffect",
                color: "#FFD271",
                // link: "/useEffect"
              },
              {
                title: "useContext",
                description: "Learn how to use useContext",
                // link: "/useContext"
              },
              {
                title: "useCallback",
                description: "Learn how to use useCallback",
                // link: "/useCallback"
              },
              {
                title: "customHooks",
                description: "Learn how to use customHooks",
                // link: "/customHooks"
              },
            ].map((item, index) => {
              const className = cn(
                "group select-none rounded-sm cursor-pointer text-lg font-semibold",
                "text-[#FFD271] p-2 px-4",
                "bg-[#D4420D] hover:brightness-110 outline outline-1 outline-[#FFD27144] hover:outline-[#FFD27188]",
                "shadow-lg transition-all",
                "w-56 aspect-video flex flex-col justify-end items-start",
                "cursor-pointer",
                !item.link && "pointer-events-none",
              )

              const children = (<>
                <img src="/logo.svg" className="h-8 opacity-20 bg-blend-multiply pointer-events-none" />
                <span className={cn(
                  !item.link && "opacity-20",
                )}>
                  {item.title}
                </span>
              </>)

              if (item.link) {
                return (
                  <Link href={item.link} key={index} className={className}>
                    {children}
                  </Link> 
                )
              }
              return (
                <div key={index} className={className}>
                  {children}
                </div>
              )
            })
          }
        </div>
      </section>
      <footer className="mt-60 bg-[#D4420D] outline outline-1 outline-[#FFD27144] w-full flex items-center justify-center rounded-sm py-20">
        <div className="text-[#F16621] font-medium text-lg">Made with ❤️ by alfonsusac</div>
      </footer>
    </div>
  );
}
