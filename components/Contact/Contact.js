import Image from "next/image";
export function Contact() {
    return (
    <div className="grid grid-rows-6 text-center">
                <div className="bg-gray-700 text-sm p-1 rounded-xl w-[122px] m-auto text-center">Get in touch</div>
                <div className="text-center">What’s next? Feel free to reach out to me if you're looking for <br></br>a developer, have a query, or simply want to connect.</div>
                <div className="grid grid-cols-3 w-screen">
                    <div><Image src="/PP-pics/envelope.svg" width={32} height={32} /></div>
                    <div className="text-4xl font-semibold">reachsagarshah@gmail.component</div>
                    <div><Image src="/PP-pics/files.svg" width={44} height={44} /></div>
                </div>
                <div className="grid grid-cols-3 m-0">
                    <div><Image src="/PP-pics/contact.svg" width={32} height={32} /></div>
                    <div className="text-4xl font-semibold">+91 8980500565</div>
                    <div><Image src="/PP-pics/files.svg" width={44} height={44} /></div>
                </div>
                <div>You may also find me on these platforms!</div>
                <div class="flex gap-1">
                    <Image src="/PP-pics/Github.svg" width={24} height={24}/>
                    <Image src="/PP-pics/Twitter.svg" width={24} height={24}/>
                    <Image src="/PP-pics/Figma.svg" width={24} height={24}/>
                </div>
            </div>
    )
}