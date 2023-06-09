import express from "express"
import {
    handleGetFollowing,
    handleGetFollowers,
    handleUpdateUser,
    handleUpdateAvatar,
    handleUpdatePassword,
    handleGetUserById,
    handleUpdateStatus,
    handleAddRelationship,
    handleRemoveRelationShip,
    handleSavePost,
    handleGetSavedPostsByUserId,
    handleDeleteSavedPost,
    handleGetOtherUsers,
} from "../controllers/user"
import upload from "../middleware/cloudinaryUploader"
import { verifyToken } from "../middleware/verifyToken"

const router = express.Router()

/**CREATE */
router.post("/user/:userId/save-post", handleSavePost)
router.post("/user/:id/add-relationship", handleAddRelationship)

/**READ */
router.get("/user/get-other-users", handleGetOtherUsers)
router.get("/user/get-saved-posts", handleGetSavedPostsByUserId)
router.get("/user/relationships/followings", verifyToken, handleGetFollowing)
router.get("/user/relationships/followers", verifyToken, handleGetFollowers)
router.get("/user/:id", handleGetUserById)

/**UPDATE */
router.patch("/user/:id/update-user-information", handleUpdateUser) // verifyToken,
router.patch(
    "/user/:id/changeAvatar",
    upload.array("avatar"),
    (error, req, res, next) => {
        if (error instanceof multer.MulterError) {
            // Handle Multer-specific errors
            return res.status(400).json({ error: err.message })
        } else if (error) {
            // Handle other errors
            return res
                .status(500)
                .json({ error: "An unexpected error occurred" })
        }
        // If no errors occurred, proceed to the next middleware
        next()
    },
    handleUpdateAvatar
)
router.patch("/user/:id/update-password", verifyToken, handleUpdatePassword)
router.patch("/user/:id/update-status", handleUpdateStatus)
/**DELETE */
router.delete("/user/:id/remove-relationship", handleRemoveRelationShip)
router.delete("/user/delete-saved-post", handleDeleteSavedPost)

export default router
