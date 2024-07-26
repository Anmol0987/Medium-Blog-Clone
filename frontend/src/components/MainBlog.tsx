import { AppBar } from "./AppBar"
import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"
export const MainBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl  ">
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            pubished on 2nd dec 2023
                        </div>
                        <div className="pt-4  ">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="">
                            <div className="text-slate-600 text-lg  ">
                            Author
                            </div>
                            <div className="flex w-full ">
                                <div className="pr-3 flex flex-col justify-center">
                                    <Avatar name={blog.author.name || "Anonymous"} size={"big"} />
                                </div>
                                <div>
                                    <div className="text-lg font-bold">
                                        {blog.author.name || "Anonymous"}
                                    </div>
                                    <div className="pt-2 text-slate-400">
                                        random catch phrase about author's ability to grab the user's attemtion
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}