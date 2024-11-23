export function BannerVideo({ setOpen }) {
  return (
    <div className="h-[300px] lg:h-full">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/p1AvAVXktm4?autoplay=1&si=7KBZEOCEwWckeIII" // Added autoplay=1
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <button
        onClick={() => setOpen(false)}
        className="absolute z-10 left-10 top-20 bg-tertiary-500 p-3  px-6 rounded-md flex items-center justify-center text-white-default"
      >
        Close
      </button>
    </div>
  );
}
