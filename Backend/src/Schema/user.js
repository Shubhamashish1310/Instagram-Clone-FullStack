import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            minLength: 5,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minLength: 6,
            validate: {
                validator: function (emailValue) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
                },
                message: "Invalid email format",
            },
        },
        password: {
            type: String,
            required: true,
            minLength: 5,
        },
        role: {
            type: String,
            required: true,
            enum: ["user", "admin"],
            default: "user",
        },
        profilePicture: {
            type: String,
            default: "https://default-profile-pic.url/default.png",
        },
        bio: {
            type: String,
            maxLength: 160,
            default: "Hi there! I'm using this app.",
        },
        socialLinks: {
            instagram: { type: String, default: null },
            twitter: { type: String, default: null },
            facebook: { type: String, default: null },
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        verificationToken: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

// Pre-save hook to hash password
userSchema.pre("save", async function modifyPassword(next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    const SALT = bcrypt.genSaltSync(9);
    user.password = await bcrypt.hash(user.password, SALT);
    next();
});

// Method to verify password
userSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Indexes
userSchema.index({ email: 1 });
userSchema.index({ username: "text", bio: "text" });

const User = mongoose.model("User", userSchema);

export default User;
