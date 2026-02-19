import { User } from "#models";

class UserRepository {
    static findByEmailOrUsername = async (email, username) => {
        return await User.findOne({
            $or: [{ email }, { username }],
        });
    };

    static createUser = async (userData) => {
        return await User.create(userData);
    };

    static findUserWithoutSensitiveData = async (id) => {
        return await User.findById(id).select("-password -refreshToken");
    };
}

export default UserRepository;
