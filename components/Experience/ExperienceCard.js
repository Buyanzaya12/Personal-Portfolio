import React from 'react';
import Image from "next/image";

const ExperienceCard = ({ startDate, endDate, listItems }) => {
    console.log(listItems);
    return (
        <div class="px-68">
        <div className="m-5 bg-gray-800 grid grid-cols-3 p-8 rounded-lg mx-[272px]">
            <Image src="/PP-pics/logo-upwork.svg" class="relative" width={102} height={28}/>
            <ul className="list-disc">
                {listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <p>
                {startDate} - {endDate}
            </p>
        </div>
        </div>
    );
};

export default ExperienceCard;
