import { Link } from 'react-router-dom';
export const Landing = () => {
    return (
        <div>
            <div className='w-screen flex h-screen flex-col justify-center '>
                <div className='flex flex-col justify-center items-center'>
                    <div className=''> 
                        <div className='mb-10'>Welcome To Medium-Clone</div>
                        <div>
                            <Link className='mr-4  text-xl font-semibold border-2 rounded-xl p-4 border-slate-500 hover:bg-blue-600' to="/signup">Signup</Link>
                            <Link className='ml-4  text-xl font-semibold border-2 rounded-xl p-4 border-slate-500 hover:bg-green-400' to="/signin">Signin</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}