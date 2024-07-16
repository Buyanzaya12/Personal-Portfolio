import React from 'react';
import Image from "next/image";

const ExperienceCard = ({ startDate, endDate, listItems }) => {
    console.log(listItems);
    return (
        <div className="m-5 bg-gray-800 grid grid-cols-3 flex flex-col p-8 rounded-lg">
            <Image src="/PP-pics/logo-upwork.svg" class="ml-12  relative" width={102} height={28}/>
            <ul className="list-disc ml-5">
                {listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <p>
                {startDate} - {endDate}
            </p>
        </div>
    );
};

export default ExperienceCard;
