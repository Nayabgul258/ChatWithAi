import { Chat } from "../models/chat.js";
import { Conversation } from "../models/conversation.js";

export const createChat = async (req, res) => {
    try {
        const userId = req.user._id;

        const chat = await Chat.create({
            user: userId,
        });

        res.json(chat);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllChat = async (req, res) => {
    try {
        const chats = await Chat.find({ user: req.user._id }).sort({
            createdAt: -1,
        });

        res.json(chats);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    };
};


export const addConversation = async (req, res) => {
    try {

        const chat = await Chat.findById(req.params.id);

        if (!chat)
            return res.status(404).json({
                message: "No Chat With this Id",
            });


        const conversation = await Conversation.create({
            chat: chat._id,
            question: req.body.question,
            answer: req.body.answer,

        });


        const updateChat = await Chat.findByIdAndUpdate(
            req.params.id,
            { latestMessage: req.body.question },
            { new: true }
        );


        res.json({
            conversation,
            updateChat,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    };
};

export const getConversation = async (req, res) => {
    try {
        const conversation = await Conversation.find({ chat: req.params.id })

        if (!conversation)
            return res.status(404).json({
                message: "No conversation with this  is "
            });

        res.json(conversation)
    } catch (error) {
        0
        res.status(500).json({
            message: error.message,
        })
    }
};

export const deleteChat = async (req, res) => {
    try {
        const chat = await Chat.findById(req.params.id);

        if (!chat)
            return res.status(404).json({
                message: "No chat with this id ",
            });

        if (chat.user.toString() != req.user._id.toString())
            return res.status(403).json({
                message: "Unauthorized ",
            });

            await chat.deleteOne()

          return  res.json({
              message:"Chat Deleted",  
            });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}