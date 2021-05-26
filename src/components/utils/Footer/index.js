import { makeStyles, Grid, Link } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    footer: {
        padding: "5vh 10vw",
        height: "40vh",


    },
    footerLinks: {
        justify: "space-between",
        alignItems: "center",
    }
}));

function Footer() {
    const { footer, footerLinks } = useStyles();

    return (
        <Grid container component="footer" className={footer}>
            <Grid container className={footerLinks} justify="space-between" >
                <Grid container item xs={1}>
                    <Link href="/about">
                        A propos
                    </Link>
                </Grid>
                <Grid container item xs={1}>
                    <Link href="#">
                        Contact
                    </Link>
                </Grid>
            </Grid>
            <Grid container item xs={12} justify="center" alignItems="center">
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Agrilien
            </Grid>
        </Grid>
    );
}

export default Footer;
