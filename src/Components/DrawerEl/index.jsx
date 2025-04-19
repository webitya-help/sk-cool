'use client';
import React from 'react';
import Link from 'next/link';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BuildIcon from '@mui/icons-material/Build';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


const iconMap = {
    Home: <HomeIcon className="text-blue-600" />,
    About: <InfoIcon className="text-green-400" />,
    'AC Rental': <AcUnitIcon className="text-cyan-600" />,
    'AC Repair': <BuildIcon className="text-blue-500" />,
    'Washing Machine Repair': <LocalLaundryServiceIcon className="text-indigo-600" />,
    'Fridge Repair': <KitchenIcon className="text-blue-700" />,
    Contact: <ContactPhoneIcon className="text-green-600" />,
  };

const DrawerEl = ({ open, onClose, links }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div className="w-64 bg-white h-full flex flex-col">
        {/* Header with title and close button */}
        <Box className="flex items-center justify-between px-4 py-3">
          <Typography variant="h6" className="font-bold text-blue-700">
            SK COOL Services
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        {/* Menu Items */}
        <List className="flex-1">
          {links.map((link) => (
            <ListItem key={link.path} disablePadding>
              <Link href={link.path} passHref legacyBehavior>
                <ListItemButton onClick={onClose} className="hover:bg-blue-50 rounded-lg transition">
                  <ListItemIcon>{iconMap[link.label]}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography className="text-gray-800 font-medium">
                        {link.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerEl;
