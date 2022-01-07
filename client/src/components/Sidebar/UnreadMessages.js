import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: 10,
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
    },
    bubbleNumber: {
        fontSize: '10px',
        fontWeight: 'bold',
        color: "#FFFFFF",
        padding: '0.2rem 0.5rem 0.2rem 0.5rem',
        backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
        borderRadius: "100px",
    }
}));

const UnreadMessages = (props) => {
    const classes = useStyles();
    const { unread } = props

    return (
        <Box className={classes.root}>
            <Typography className={classes.bubbleNumber}>
                {unread > 99 ? '99+' : unread}
            </Typography>
        </Box>
    )
}

export default UnreadMessages