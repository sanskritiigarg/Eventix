import express from 'express';
import { registerUser, loginUser, getProfile } from '../controllers/user.controllers.js';
import protect from '../middlewares/auth.middlewares.js';

const router = express.Router();

// @route POST /users/register
// @desc Register a new user
// @access public
router.post('/register', registerUser);

// @route POST /users/login
// @desc Authenticate user
// @access public
router.post('/login', loginUser);

// @route GET /users/profile
// @desc logged-in user's profile
// @access private
router.get('/profile', protect, getProfile);

export default router;