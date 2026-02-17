import mongoose, { Schema } from "mongoose";

const likeSchema = new Schema(
    {
        video: {
            type: mongoose.Types.ObjectId,
            ref: "Video",
        },
        comment: {
            type: mongoose.Types.ObjectId,
            ref: "Comment",
        },
        tweet: {
            type: mongoose.Types.ObjectId,
            ref: "Tweet",
        },
        tweet: {
            type: mongoose.Types.ObjectId,
            ref: "Tweet",
        },
        likedBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

export default Like;
