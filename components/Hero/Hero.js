import Image from "next/image"
export function Hero() {
    return (<div class="grid grid-cols-2 justify-between ml-28 mr-28"> 
        <div class="">
            <div class="text-6xl font-bold">Sagar 👋</div>
            <div>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</div>
            <ul>
                <li class="flex"><img src="/PP-pics/Location.svg" className="mr-2" width={23} height={24}/>Ahmedabad, India</li>
           
                <li class="ml-6 list-disc marker:text-green-500"><span class="ml-2">Available for new projects</span></li>
            </ul>
            <div class="flex gap-1">
            <Image src="/PP-pics/Github.svg" width={24} height={24}/>
            <Image src="/PP-pics/Twitter.svg" width={24} height={24}/>
            <Image src="/PP-pics/Figma.svg" width={24} height={24}/>
            </div>
        </div>
        <div>
            <Image src="/PP-pics/Pic.jpg" alt="profile-pic" width={280} height={320}/>
        </div>
    </div>)
}