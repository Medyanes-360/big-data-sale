export function BannerVideo({ setOpen }) {
  return (
    <>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/p1AvAVXktm4?si=7KBZEOCEwWckeIII"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <button
        onClick={() => setOpen(false)}
        className="absolute z-10 left-10 top-20 bg-tertiary500 p-3  px-6 rounded-md flex items-center justify-center text-white"
      >
        Close
      </button>
    </>
  );
}
