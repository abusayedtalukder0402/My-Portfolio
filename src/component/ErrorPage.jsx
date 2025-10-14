import { IoMdRocket } from "react-icons/io";
import { Link } from 'react-router'
const ErrorPage = ({message="Page not found",}) => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center text-center min-h-screen space-y-5 bg-black'>
        <IoMdRocket className="text-9xl text-[#BF092F]" />
        <h1 className='text-4xl font-bold to-gray-700'>{message}</h1>
        <p className='text-[#BF092F] md:w-2/5 w-full mx-auto'>Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.</p>

        <Link to="/" className='mt-6 px-6 py-3 bg-[#BF092F]  rounded-md shadow-md hover:bg-black hover:border-2 hover:text-[#BF092F] transition font-bold text-black'>Go to Home Page</Link>
    </div>
    </div>
  )
}

export default ErrorPage