import { Grid, Container, CircularProgress } from '@mui/material'
import { useInfiniteQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import Layout from '../../components/layout'
import News from '../../components/news'
import { getAllNews } from '../../services/get-all-news'

const Home = () => {
    const {
        isLoading,
        isError,
        error,
        data,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery(["news"], ({ pageParam = 1 }) => getAllNews(pageParam), {
        getNextPageParam: (lastPage, allPages) => {
            // const maxPages = Math.ceil(lastPage.totalResults / 20);
            const maxPages = 100 / 20;
            const nextPage = allPages.length + 1;
            console.log(lastPage, allPages, maxPages, nextPage);
            return nextPage <= maxPages ? nextPage : undefined;
        }
    });

    useEffect(() => {
        console.log("hasNextPage", hasNextPage);
        let fetching = false;
        const onScroll = async (event) => {
            const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;
            if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
                fetching = true;
                if (hasNextPage) await fetchNextPage();
                fetching = false;
            }
        }
        document.addEventListener('scroll', onScroll);
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, [hasNextPage, fetchNextPage]);

    if (isLoading) <CircularProgress />
    if (isError) <p>Error: {error.message}</p>
    return (
        <Layout>
            <Container style={{ marginTop: '10px' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.pages.map(page =>
                        page && page.articles.map((article, index) => (
                            <Grid item xs={12} sm={4} md={3} key={index}>
                                <News article={article} flag='home' />
                            </Grid>
                        ))
                    )
                    }
                </Grid>
            </Container>
        </Layout>
    )
}

export default Home