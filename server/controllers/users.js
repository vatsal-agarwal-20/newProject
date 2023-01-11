import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
    try {

        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ err: err.message })
    }
}
export const getUserFriends = async (req, res) => {
    try {

        const { id } = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        // Formatting the User friends for the frontend
        // For this we will need to update our database(or User schema accordingly)
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    }
    catch (err) {
        res.status(404).json({ err: err.message })
    }
};


/* UPDATE */
export const addRemoveFriend = async (req, res) => {
    try {

        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        // this condition means that the friend id already exists 
        // in the user data therefore we will remove it from both ends
        // i.e. from user's and also the friend's data
        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((fId) => fId !== id);
        }
        // this means that the friend is not in the user database
        // therefore we will add the friend
        else {
            user.friends.push(friendId);
            friend.friends.push(id)
        }
        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );

        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    }
    catch (err) {
        res.status(404).json({ err: err.message })
    }
}