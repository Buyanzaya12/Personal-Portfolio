
import WorkCard from './WorkCard';

const works = [
    {
        title: "Example 1",
        listItems: ["item 1", "item 2", "item 3"],

    },
    {
        
        listItems: ["item 4", "item 5", "item 6"],
        title: "Example 2",
     
    },
    {
        title: "Example 3",
        listItems: ["item 7", "item 8", "item 9"],
 
    }
];

export function Work() {
    return (
        <div className="m-auto justify-center py-5  px-[144px]">
            <div className="bg-gray-700 text-sm p-1 rounded-xl w-[115px] m-auto text-center">Work</div>
            <div className="text-center">Some of the noteworthy projects I have built:</div>
    
            {works.map((work, index) => (
                <div key={index}>
                    <WorkCard
                        title={work.title}
                        listItems={work.listItems}
                    />
                </div>
            ))}
        </div>
    );
}
