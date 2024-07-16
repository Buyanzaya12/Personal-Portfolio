import { HiSun } from "react-icons/hi";
export function Header() {
    return <div class="">
        <nav class="flex items-center h-16 justify-end gap-x-3.5 mr-12" >
            <div className="">About</div>
            <div className="">Work</div>
            <div className="">Contact</div>
            <div class="ml-2"><HiSun /></div>
            <div class="bg-white text-black p-1 rounded-lg">Download CV</div>
        </nav>
    </div>;
}
export default Header;
