import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch } from 'react-redux';
import { newsCategory, removeNewsCategory } from '../../store/actions';

export default function CategoryTabs() {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('business');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        dispatch(newsCategory(value));
        return () => {
            dispatch(removeNewsCategory());
        }
    }, [value, dispatch]);
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Business" value='business' />
                <Tab label="Sports" value='sports' />
                <Tab label="Entertainment" value='entertainment' />
                <Tab label="General" value='general' />
            </Tabs>
        </Box>
    );
}
