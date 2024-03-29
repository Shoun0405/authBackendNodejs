const express = require('express')
const { 
    userRegisterCtrl,
    userLoginCtrl,
    allUsersCtrl,
    deleteUsersCtrl,
    userProfileCtrl,
    updateUserCtrl
 } = require('../controller/authCtrl')

 const authMiddleware = require('../middlewares/auth/authMiddleware')

const authRouts = express.Router()

authRouts.post("/register",userRegisterCtrl)
authRouts.post("/login",userLoginCtrl)
authRouts.get("/allusers",authMiddleware, allUsersCtrl)
authRouts.get("/profile/:id",authMiddleware, userProfileCtrl)
authRouts.put("/:id",authMiddleware, updateUserCtrl)
authRouts.delete("/:id", deleteUsersCtrl)

module.exports = authRouts