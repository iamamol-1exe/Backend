import axios from "axios";
import { redisClient } from "../redisClient";

export const getAuthToken = async (): Promise<string | null> => {
     let tokenExpiryTime :number = 59 * 60; // in seconds;

    try {
        const client_id = process.env.CLIENT_ID;
        const client_secret = process.env.CLIENT_SECRET;
        const url = process.env.AUTH_URL;
        const redisKey =process.env.AUTH_KEY;
        
        if (!client_id || !client_secret || !url || !redisKey) {
            console.error("Authentication environment variables are not set.");
            return null;
        }
        const response = await axios.post(url, {
            client_id: client_id,
            client_secret: client_secret,
        });

        // responsr validtion is checking 
        if (!response || !response.data || !response.data.access_token) {
            console.error("Invalid response from auth server");
            return null;
        }
        const { access_token } = response.data;
        await redisClient.set(redisKey,access_token,{
            EX : tokenExpiryTime
        });
        return access_token;
        }catch (err) {
        if (axios.isAxiosError(err)) {
            console.error(
                "Axios error fetching auth token:",
                err.response?.data || err.message
            );
        } else {
            console.error("An unexpected error occurred:", err);
        }
        return null;
    }
};

export const getTokenFromRedis = async () : Promise< string | null> => {
    try {
        const redisKey =process.env.AUTH_KEY;
        if(!redisKey) return null;
        const token = await redisClient.get(redisKey);
        return token;
        
    } catch (err) {
        console.error("Error occured while getting from redis :" , err);
        return null;
    }
}
