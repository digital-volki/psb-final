import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import fp from 'lodash/fp';

import { initializeApollo } from 'Lib/apollo';
import ARTICLE_IN_PROJECT from 'lib/apollo/schemas/projects/getArticle.graphql';
import { fromRawCookie } from 'Lib/hooks/useCookie';


const ProjectArticle: NextPage<any> = ({
    project,
}) => {
    console.log(project);
    return (
        <div className='row'>
            <div className='col'>
                sidebar
            </div>
            <div
                className='col-8'
            >
                s
            </div>
        </div>
    );
};


export const getServerSideProps:GetServerSideProps = async ctx => {
    const token = fromRawCookie(fp.get('req.headers.cookie', ctx)).get('access_token');
    const client = initializeApollo(null, token);
    const { id } = ctx.query;
    console.log(id);
    const { data: { project } } = await client.query({
        query: ARTICLE_IN_PROJECT,
        variables: {
            id,
        },
    });
    return ({
        props: {
            project,
        },
    });
};

export default ProjectArticle;
