import Image from "next/image";
export function Header() {
    return <div class="grid grid-cols-2 items-center px-28 py-4">
        <div><code class="text-3xl font-bold">{"<SS />"}</code></div>
        <nav class="flex items-center justify-end gap-x-3.5" >
            <div className="">About</div>
            <div className="">Work</div>
            <div className="">Testimonials</div>
            <div className="">Contact</div>
            <Image src="/PP-pics/dark-mode.svg" width={24} height={24} />
            <div class="bg-white text-black p-1 rounded-lg">Download CV</div>
        </nav>
        </div>
}
export default Header;
