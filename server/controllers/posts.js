import mongoose from "mongoose";
import express from 'express'

import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPost = async (req,res) => {
  const {id} = req.params;

  try{
    const post = await PostMessage.findById(id);
    res.status(200).json(post);
  } catch(err) {
    res.status(404).json({message: err.message});
  }
}  

export const createPost = async (req, res) => {
    const {title, message, selectedFile, creator, tags} = req.body;
    // const post = req.body;
    const newPostMessage = new PostMessage({title, message, selectedFile, creator, tags});
    try{
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch(err) {
        res.status(409).json({message: err.message})
    }
};

export const updatePost = async(req,res) => {
  const {id} = req.params;
  const {title, message, selectedFile, creator, tags} = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Post with id ${id} does not exist`);
  const updatedPost = {creator, title, message, tags, selectedFile, _id:id};
  await PostMessage.findByIdAndUpdate(_id,updatedPost,{new:true}) 
  res.json(updatedPost)
}

export const deletePost = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with ${id} id`);

  await PostMessage.findByIdAndRemove(id);

  res.json({message: 'the post was deleted successfully'});
}