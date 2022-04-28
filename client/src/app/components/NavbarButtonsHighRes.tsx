import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


function NavbarButtonsHighRes() {

    const pagesLinks = [
  { page: 'Home', link: '/'},
  { page: 'Skill Builder', link: '/skillbuilder'}
    ];

    const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    };

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    return (
        <>
            {pagesLinks.map(({ page, link}) => (
                <Box sx={{ flexGrow: -1, display: { xs: 'none', md: 'flex' } }}>
                    <Link
                    style={{color: 'white', display: 'inline', textDecoration: 'none', marginRight: '1em',}}
                    key={page}
                    onClick={handleCloseNavMenu}
                    to={link} 
                >
                {page}
              </Link>
                </Box>
            ))}
 
        </>
    );
}

export default NavbarButtonsHighRes;