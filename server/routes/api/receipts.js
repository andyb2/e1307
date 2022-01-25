const router = require("express").Router();
const { Message } = require("../../db/models")

router.put("/", async (req, res, next) => {
    try {
        if (!req.user) {
            return res.sendStatus(401);
        }
        const conversationId = req.body.id;
        const otherUserId = req.body.otherUser.id

        const trueReadReceipt = await Message.update(
            { readReceipt: true },
            {
                where: {
                    readReceipt: false,
                    conversationId: conversationId,
                    senderId: otherUserId,
                }
            })

        const updatedMessages = await Message.findAll({
            where: {
                conversationId: conversationId
            }
        });

        res.json({ messages: updatedMessages });
    } catch (error) {
        next(error)
    }
})

module.exports = router