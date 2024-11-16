import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Home } from "./page";
const Page404 = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, [router]);
    return (<HomePage />)
};

export default Page404;
