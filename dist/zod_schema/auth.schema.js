"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({ required_error: 'Username is required' }),
        password: zod_1.z.string({ required_error: 'password is required' }),
        email: zod_1.z.string({ required_error: "email is required" })
    })
});
exports.registerSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({ required_error: 'Username is required' })
            .min(3),
        password: zod_1.z.string({ required_error: 'password is required' })
            .min(5),
        email: zod_1.z.string({ required_error: "email is required" })
    })
});
