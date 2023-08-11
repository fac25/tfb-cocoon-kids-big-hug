// pages/school.js (or any appropriate file name)
import React from 'react';
import Layout from '../../components/layout/Layout';
import Schools from '../../components/Schools/Schools';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';

function SchoolPage({ classes }) {
    console.log({classes})
    return (
        <Layout isLanding={true} showEmergency={false}>
            <Schools/>
        </Layout>
    );
}

export async function getServerSideProps({ res }) {
    try {
        const classData = await API.graphql({
            query: queries.listClasses,
        });

        const classes = classData.data.listClasses.items;

        res.setHeader('Cache-Control', 's-maxage=0');

        return {
            props: {
                classes,
            },
        };
    } catch (error) {
        console.error('Error fetching classes:', error);
        return {
            props: {
                classes: [],
            },
        };
    }
}

export default SchoolPage;
