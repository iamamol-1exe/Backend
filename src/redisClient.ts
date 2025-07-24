import { createClient } from "redis";


export const redisClient = createClient();


redisClient.on('connect', ()=>{
        console.log('Redis is connected');
})

redisClient.on('error',(err)=>{
    console.error( "Redis client error : ", err);
})

export const connectRedis = async ()=>{
    await redisClient.connect();
};

