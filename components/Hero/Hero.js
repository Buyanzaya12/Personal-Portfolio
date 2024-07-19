import Image from "next/image"
export function Hero() {
    return (
    <div class="grid grid-cols-2 flex-wrap items-center justify-between ml-28 mr-28 h-[552px]"> 

        <div class="text-base">
            <div class="text-6xl font-bold">Sagar 👋</div>
            <div className="">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</div>
            <ul>
                <li class="flex"><img src="/PP-pics/Location.svg" className="mr-2" width={23} height={24}/>Ahmedabad, India</li>
                <li className="ml-6 list-disc marker:text-green-500"><span class="ml-2">Available for new projects</span></li>
                
            </ul>
            <div class="flex gap-1">
            <Image src="/PP-pics/Github.svg" width={24} height={24}/>
            <Image src="/PP-pics/Twitter.svg" width={24} height={24}/>
            <Image src="/PP-pics/Figma.svg" width={24} height={24}/>
            </div>
        </div>
        <div>
            
            <div class="bg-gray-700 web:w-[264px] web:h-[304px] mobile:w-[264px] mobile:h-[264px] web:mt-12 web:ml-12 absolute mobile:mt-7 mobile:align-items"></div>
            <Image src="/PP-pics/Pic.jpg" alt="profile-pic" className="relative web:w-[280px] web:h-[320px] mobile:w-[240px] mobile:h-[280px]" width={280} height={320}/>
        </div>
    </div>
    )
}