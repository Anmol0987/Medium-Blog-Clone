import { useParams } from 'react-router-dom';
import { useBlog } from '../hooks';
import { MainBlog } from '../components/MainBlog';


export const Blog = () => {
    const {id} = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
           <MainBlog blog  ={blog}/>
        </div>
    )
}