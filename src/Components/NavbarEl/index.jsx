'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DrawerEl from '../DrawerEl';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'AC Rental', path: '/ac-rental' },
  { label: 'AC Repair', path: '/ac-repair' },
  { label: 'Washing Machine Repair', path: '/washing-machine-repair' },
  { label: 'Fridge Repair', path: '/fridge-repair' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar
        position="static"
        className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-lg"
      >
        <Toolbar className="flex justify-between items-center py-2 px-4">
          {/* Logo / Brand */}
          <Box className="flex items-center gap-2">
            <AcUnitIcon className="text-white" fontSize="large" />
            <Box>
              <Typography variant="h6" className="text-white font-bold">
                SK COOL Services
              </Typography>
              <Typography variant="caption" className="text-white text-xs">
                Your Trusted Home Appliance Experts
              </Typography>
            </Box>
          </Box>

          {/* Desktop Menu */}
          <Box className="hidden md:flex gap-4">
            {links.map((link) => (
              <Link href={link.path} key={link.path} passHref>
                <Button
                  className="!text-white normal-case hover:bg-white hover:text-blue-600 transition duration-300 font-medium"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Hamburger Icon (small screens only) */}
          <Box className="block md:hidden">
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <DrawerEl open={drawerOpen} onClose={() => setDrawerOpen(false)} links={links} />
    </>
  );
};

export default Navbar;
