import { createClient } from "redis";
import  {logger}  from "./utils/logger";

// creating redis client
export const redisClient = createClient({
     url: process.env.REDIS_URL || 'redis://localhost:6379',
    });

// connecting to redis server
redisClient.on('connect', ()=>{
        console.log('Redis is connected');
})


redisClient.on('error',(err)=>{
    console.error( "Redis client error : ", err);
})


let isConnected = false;
// function for connection call 
export const connectRedis = async (): Promise<void> => {
  if (isConnected) return;
  
  try {
    await redisClient.connect();
    isConnected = true;
  } catch (error) {
    logger.error('Failed to connect to Redis:', error);
    throw error;
  }
};


export const isRedisHealthy = (): boolean => redisClient.isReady;

