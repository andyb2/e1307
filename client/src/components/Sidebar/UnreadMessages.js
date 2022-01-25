import { useEffect, useCallback } from "react";
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
    const { conversation, unread } = props;
    const { otherUser } = conversation;
    const { missedMessages, setMissedMessages } = unread

    const missedMessagesCalc = useCallback(() => {
        const numberOfUnreadMessages = conversation.messages.filter(messages => messages.readReceipt === false && messages.senderId === otherUser.id)
        setMissedMessages(numberOfUnreadMessages.length)
    }, [conversation, otherUser.id, setMissedMessages])

    useEffect(() => {
        missedMessagesCalc();
    }, [missedMessagesCalc])

    return (
        <Box className={classes.root}>
            {missedMessages > 0 &&
                <Typography className={classes.bubbleNumber}>
                    {missedMessages > 99 ? '99+' : missedMessages}
                </Typography>
            }
        </Box>
    )
}

export default UnreadMessages