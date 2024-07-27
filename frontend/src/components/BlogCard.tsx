import { Link } from "react-router-dom";

interface BlogCardProps {
    authotrName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;

}


export const BlogCard = ({
    authotrName,
    title,
    content,
    publishedDate,
    id

}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="  border-b p-4 border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <div className="flex flex-col justify-center">
                        <Avatar name={authotrName} />
                    </div>
                    <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
                        {authotrName}
                    </div>
                    <div className="flex flex-col justify-center pl-2">
                        <Circle />
                    </div>
                    <div className="flex flex-col justify-center pl-2 text-sm font-thin text-slate-500 ">
                        {publishedDate}
                    </div>
                </div>
                <div className="font-semibold pt-2 text-xl">
                    {title}
                </div>
                <div className="text-md font-thin">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 text-sm font-thin pt-4 ">
                    {`${Math.ceil(content.length / 100)} min(s) read`}
                </div>

            </div>
        </Link>
    )



}

export function Circle() {
    return (
        <div className="h-1 w-1 rounded-full bg-gray-400">

        </div>
    )
}


export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return (

        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full  dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
            <span className={`${size === "small" ? "text-xs" : "text-md"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>

    )
}


