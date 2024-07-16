import React from 'react';
import Image from "next/image";

const WorkCard = ({ title, startDate, endDate, listItems }) => {
    console.log(listItems);
    return (
        <div className="m-5 bg-gray-700 grid grid-cols-2 flex flex-col p-4 rounded-lg">
            <Image src="/PP-pics/Fiskil-project.png" class="ml-12  relative" width={480} height={384}/>
            <ul className="list-disc ml-5">
                {listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default WorkCard;
