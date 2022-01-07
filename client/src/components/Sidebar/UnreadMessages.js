import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: 10
    },
    unreadMsgNumber: {
        // justifyContent: 'bottom',
    },
    bubbleNumber: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 'bolder',
        color: "#FFFFFF",
        width: '27px',
        padding: '0.3rem',
        backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
        borderRadius: "100px",
        // height: '100%',
        textAlign: "center",
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