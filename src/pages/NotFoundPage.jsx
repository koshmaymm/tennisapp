import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className='not-found-page'>
            <h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
            <p className='text-xl mb-5'>This page does not exist</p>
            <Link
                to='/'
            >
                Go Back
            </Link>
        </section>
    );
};
export default NotFoundPage;