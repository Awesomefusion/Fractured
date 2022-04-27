import { Box, Button } from '@mui/material';
import React from 'react';

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
                <Box sx={{ flexGrow: -1, display: 'inline'}}>
                    <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'inline' }}
                    href={link}
                >
                {page}
              </Button>
                </Box>
            ))}
 
        </>
    );
}

export default NavbarButtonsHighRes;