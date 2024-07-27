import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"


export const Blogs = () => {
    const { loading, blogs } = useBlogs()
    if (loading ) {
        return <div>
            <AppBar />
            <div className="flex justify-center" >
                <div>
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div >
                    {blogs.map(blog =>
                        <BlogCard
                            id={blog.id}
                            authotrName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"2021-09-25"}
                        />
                    )}

                </div>
            </div>
        </div>
    )
}