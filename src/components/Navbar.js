import React from 'react'
import CustomButton from './CustomButton'
import doge from './doge.png'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    doge: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

export default function Navbar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={doge} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                   Home Webpage
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Twitter
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Discord
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Linktree 
                </Typography>

                <CustomButton txt="MEMES"/>
            </Toolbar>
    )
}
