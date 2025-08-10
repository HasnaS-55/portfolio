import TargetCursor from "./TargetCursor";


export default function NavBar() {
  const smoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    // Smooth + center in viewport
    el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  };

  return (
    <div>
      <TargetCursor spinDuration={2} hideDefaultCursor />

      <nav className="h-14 bg-[#F7F7F7] rounded-full flex justify-center items-center p-1">
        <a
          href="#home"
          onClick={(e) => smoothScroll(e, "home")}
          className="px-6 py-3 rounded-full text-[#141414] cursor-target hover:bg-[#141414] hover:text-[#F7F7F7]"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => smoothScroll(e, "about")}
          className="px-6 py-3 rounded-full text-[#141414] cursor-target hover:bg-[#141414] hover:text-[#F7F7F7]"
        >
          About
        </a>
        <a
          href="#project"          
          onClick={(e) => smoothScroll(e, "project")}
          className="px-6 py-3 rounded-full text-[#141414] cursor-target hover:bg-[#141414] hover:text-[#F7F7F7]"
        >
          Projects
        </a>
        <a
          href="#connect"
          onClick={(e) => smoothScroll(e, "connect")}
          className="px-6 py-3 rounded-full text-[#141414] cursor-target hover:bg-[#141414] hover:text-[#F7F7F7]"
        >
          Connect
        </a>
      </nav>
    </div>
  );
}
