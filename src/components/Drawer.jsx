function Drawer({ header, content }) {
    return (
      <details
        className="group p-6 [&_summary::-webkit-details-marker]:hidden rounded-3xl text-white bg-background-accent md:p-9"
        open={false}
      >
        <summary className="flex cursor-pointer items-center justify-between">
          <h3 className="text-2xl font-bold font-forma">{header}</h3>
  
          <span className="relative w-4 shrink-0">
            <img
              src="/images/chevron_down.png"
              alt=""
              className="absolute inset-0 w-4 opacity-100 group-open:opacity-0"
            />
  
            <img
              src="/images/chevron_down.png"
              alt=""
              className="absolute inset-0 w-4 opacity-0 rotate-180 group-open:opacity-100"
            />
          </span>
        </summary>
  
        <p className="mt-4 leading-relaxed font-vietnam font-normal text-dimmed text-base md:max-w-prose">{content}</p>
      </details>
    );
  }
  
  export default Drawer;