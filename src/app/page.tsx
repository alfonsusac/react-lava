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
        <div className="flex flex-wrap gap-2 w-full justify-center flex-col items-center">
          {
            [
              {
                title: "Introduction to Component State",
                description: "Learn how to use useState",
                link: "/use-state"
              },
              {
                title: "Normal variables don't trigger re-renders",
                description: "Normal variables don't trigger re-renders",
                link: "/use-state/variables"
              },
              {
                title: "Re-renders reset every variables",
                description: "Re-renders reset every variables",
                link: "/use-state/rerender"
              },
              {
                title: "Setters compares new value with old value",
                description: "Setters compares new value with old value",
                link: "/use-state/setters"
              },
              {
                title: "Setters compares objects by reference",
                description: "Setters compares objects by reference",
                // link: "/use-state/reference"
              },
              {
                title: "Storing references across re-renders",
                description: "Storing references across re-renders",
                // link: "/use-ref"
              },
              {
                title: "Accessing DOM node references",
                description: "Accessing DOM node references",
                // link: "/use-ref/dom"
              },
            ].map((item, index) => {
              const className = cn(
                "group select-none rounded-md cursor-pointer text-lg font-semibold",
                "text-[#FFD271] p-2 px-4",
                "bg-[#D4420D] hover:brightness-110 outline outline-1 outline-[#FFD27144] hover:outline-[#FFD27188]",
                "shadow-lg transition-all",
                "w-full max-w-md flex flex-col justify-end items-start",
                "cursor-pointer",
                !item.link && "pointer-events-none",
              )

              const children = (<>
                <div className={cn(
                  "flex",
                  !item.link && "opacity-30",
                )}>
                  <div className="opacity-50 mr-4">{index + 1}.</div>
                  <div className="flex flex-col">
                    {item.title}
                    {/* <div className="text-sm font-medium opacity-60">{item.description}</div> */}
                  </div>
                </div>
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
