import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Drawer } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { addReadLater, removeReadLater } from '../../store/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function News({ article, flag }) {
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ [anchor]: open });
    };

    const handleReadLater = (e) => {
        e.preventDefault();
        dispatch(addReadLater(article));
        toast.success('Added to reading list')
        console.log("article: ", article);
    }
    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(removeReadLater(article));
        toast.success('Removed from reading list')
    }
    return (
        <>
            <Card sx={{ maxWidth: 345 }} >
                <CardActionArea onClick={toggleDrawer('right', true)}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={article.urlToImage}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {article.title.substring(0, 30)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {article.publishedAt}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                        flag === 'reading-list' ?
                            <Button size="small" color="primary" onClick={handleRemove}>
                                Remove
                            </Button> :
                            <Button size="small" color="primary" onClick={handleReadLater}>
                                Read Later
                            </Button>
                    }
                </CardActions>
            </Card>
            {/* drawer */}
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer('right', false)}
                onKeyDown={toggleDrawer('right', false)}
            >
                <Drawer
                    anchor={`right`}
                    open={state[`right`]}
                    onClose={toggleDrawer(`right`, false)}
                    PaperProps={{
                        sx: { width: "30%" },
                        sm: { width: "30%" },
                        md: { width: "30%" },
                    }}
                >
                    <img
                        src={article.urlToImage}
                        alt={article.title}
                        height="auto"
                        width="100%"
                    />
                    <h1>{article.title}</h1>
                    <span>{article.author}</span>
                    <span>{article.publishedAt}</span>
                    <br />
                    <p>{article.description}</p><hr />
                    <p>{article.content}</p>
                </Drawer>
            </Box>
            <ToastContainer />
        </>
    );
}
