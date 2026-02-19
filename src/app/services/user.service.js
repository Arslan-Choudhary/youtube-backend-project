import { UserRepository } from "#repository";
import { ApiError, uploadOnCloudinary } from "#utils";

class UserService {
    static registerUser = async ({
        fullName,
        email,
        username,
        password,
        files,
    }) => {
        // 1. Validate fields
        if (
            [fullName, email, username, password].some(
                (field) => field?.trim() === ""
            )
        ) {
            throw new ApiError(400, "All fields are required");
        }

        // 2. Check existing user
        const existedUser = await UserRepository.findByEmailOrUsername(
            email,
            username
        );

        if (existedUser) {
            throw new ApiError(
                409,
                "User with email or username already exists"
            );
        }

        // 3. Handle files
        const avatarLocalPath = files?.avatar?.[0]?.path;
        const coverImageLocalPath = files?.coverImage?.[0]?.path;

        if (!avatarLocalPath) {
            throw new ApiError(400, "Avatar file is required");
        }

        // 4. Upload to cloudinary
        const avatar = await uploadOnCloudinary(avatarLocalPath);
        const coverImage = coverImageLocalPath
            ? await uploadOnCloudinary(coverImageLocalPath)
            : null;

        if (!avatar) {
            throw new ApiError(400, "Avatar upload failed");
        }

        // 5. Create user
        const user = await UserRepository.createUser({
            fullName,
            email,
            password,
            username: username.toLowerCase(),
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
        });

        // 6. Fetch safe user
        const createdUser = await UserRepository.findUserWithoutSensitiveData(
            user._id
        );

        if (!createdUser) {
            throw new ApiError(500, "User registration failed");
        }

        return createdUser;
    };
}

export default UserService;
