import {User} from '@prisma/client'
import { prisma } from '../config/db';
import * as argon2 from "argon2";
import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken'

export const registerHandler = async (req: Request, res: Response) => {
    try {
      const newUser = req.body as User;
      const hashPassword = await argon2.hash(newUser.password);
      newUser.password = hashPassword;
      await prisma.user.create({
        data: newUser,
      });
      return res.status(200).json({
        message: 'user added !',
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        mrssage: 'server Error !',
      });
    }
  };

export const loginHandler = async (req: Request, res: Response) => {
 
    try {
      const { username, password } = req.body as User;
  
      const isValidUsername = await prisma.user.findFirst({
        where: { username },
      });
  
      if (!isValidUsername) {
        return res.status(400).json({
          message: ' wrong username or password ',
        });
      }
      const isValidPassword = await argon2.verify(
        isValidUsername.password,
        password
      );
  
      if (!isValidPassword) {
        return res.status(400).json({
          message: 'wrong username or password ',
        });
      }
  
      return res.status(200).json({
        message: 'Welcome Back ' ,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: 'server Error !',
      });
    }
  };

  export const getAllUserHandller = async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        mrssage: 'server Error !',
      });
    }
  
  };
  export const adminHandler = async (req: Request, res: Response) => {
    return res
      .status(200)
      .json({ message: 'Hey admin with id' + res.locals.user.id });
  };
  
  export const userHandler = async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Hey user' });
  };