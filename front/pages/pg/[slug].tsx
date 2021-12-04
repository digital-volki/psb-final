import React from 'react';
import type { NextPage } from 'next';


interface IPgPage {
    translations: any
}


const Home: NextPage<IPgPage> = () => (
    <>
        s
        {/* {tr('popular_field')} */}
    </>
);

// export const getServerSideProps: GetServerSideProps = async ctx => withTranslation({ ctx, path: '/pg/[slug]' });


export default Home;
