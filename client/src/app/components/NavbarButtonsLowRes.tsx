import { Link, MenuItem, Typography } from '@mui/material';
import React from 'react';

function NavbarButtonsLowRes() {

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
        <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Link sx={{textDecoration: 'none'}} href={link}><Typography textAlign="center">{page}</Typography></Link>
            
        </MenuItem>
       
        ))}
        </>
    );
}

export default NavbarButtonsLowRes;