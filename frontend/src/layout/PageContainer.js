import Nav from '@/pages/nav/Nav';
import Head from 'next/head';


const initHeaders = (
    <>
        <Nav />
    </>
);

const PageContainer = ({
    header = initHeaders,
    // footer = initFooters,
    children,
    title = 'Page',
}) => {
    let titleView;

    if (title !== '') {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            {header}
            {children}
        </>
    );
};

export default PageContainer;