import { Grid, Container, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import News from '../../components/news'
import { useDispatch, useSelector } from 'react-redux';

const ReadingList = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news);
    console.log(news);
    return (
        <Layout>
            <Container style={{ marginTop: '10px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        news && news.readLater?.map((article, index) => (
                            <Grid item xs={12} sm={4} md={3} key={index}>
                                <News article={article} flag='reading-list' />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Layout>
    )
}

export default ReadingList;