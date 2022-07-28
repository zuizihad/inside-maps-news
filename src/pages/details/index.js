import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../components/layout'

const Details = () => {
    const params = useParams();
    console.log(params)
    return (
        <Layout>
            <div>details</div>
        </Layout>
    )
}

export default Details