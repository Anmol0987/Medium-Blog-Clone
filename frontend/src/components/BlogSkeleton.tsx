import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return (
        <div>
            <div role="status" className=" animate-pulse">

                <div className="  border-b p-4 border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer">

                    <div className="flex">
                        <div className="flex flex-col justify-center">
                            <div className="h-5 w-5 bg-gray-200 rounded-full  mb-4"></div>

                        </div>
                        <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                        </div>
                        <div className="flex flex-col justify-center pl-2">
                            <Circle />
                        </div>
                        <div className="flex flex-col justify-center pl-2 text-sm font-thin text-slate-500 ">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                        </div>
                    </div>
                    <div className="font-semibold pt-2 text-xl">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                    </div>
                    <div className="text-md font-thin">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                    </div>
                    <div className="text-slate-500 text-sm font-thin pt-4 ">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

                    </div>

                </div>

            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )

}