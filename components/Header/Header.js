import { HiSun } from "react-icons/hi";
export function Header() {
    return <div class="grid grid-cols-2 items-center px-28 py-4">
        <div><code class="text-3xl font-bold">{"<SS />"}</code></div>
        <nav class="flex items-center justify-end gap-x-3.5" >
            <div className="">About</div>
            <div className="">Work</div>
            <div className="">Contact</div>
            <div class="ml-2"><HiSun /></div>
            <div class="bg-white text-black p-1 rounded-lg">Download CV</div>
        </nav>
        </div>
}
export default Header;
