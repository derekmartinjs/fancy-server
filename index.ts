import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import jwt from 'jsonwebtoken';
import DataLoader from 'dataloader';
import {
  ApolloServer,
  AuthenticationError
} from 'apollo-server-express';

import {Server} from "./app/Server";

import schema from './app/schema';
import resolvers from './app/resolvers';
import models, { sequelize } from './app/models';
import loaders from './app/loaders';

const app = express();

const port = 3001;

const server = new Server(app);
server.start(port);
