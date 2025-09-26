import http from "http";
import app from "./app";
import { logger } from "./utils/logger";
import { connectRedis, redisClient } from "./redisClient";
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

// Graceful shutdown handler
const gracefulShutdown = async (signal: string) => {
  logger.info(`Received ${signal}, starting graceful shutdown...`);

  try {
    await redisClient.quit();
    logger.info("Redis client disconnected successfully");
  } catch (err) {
    logger.error("Error during Redis disconnection:", err);
  }

  server.close((err) => {
    if (err) {
      logger.error("Error during server shutdown:", err);
      process.exit(1);
    }

    logger.info("Server closed successfully");
    process.exit(0);
  });

  // Force shutdown after 30 seconds
  setTimeout(() => {
    logger.error("Forced shutdown after timeout");
    process.exit(1);
  }, 30000);
};

// Handle shutdown signals
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception:", err);
  gracefulShutdown("uncaughtException");
});

process.on("unhandledRejection", (reason, promise) => {
  logger.error("Unhandled Rejection at:", promise, "reason:", reason);
  gracefulShutdown("unhandledRejection");
});

// Handle server start and Redis connection
const startServer = async () => {
  try {
    console.log("Starting server...");
    await connectRedis();
    console.log("Redis connected, starting HTTP server...");

    server.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    logger.error("Failed to connect to Redis, server not starting", err);
    console.error("Server start error:", err);
    process.exit(1);
  }
};

startServer();

export default server;
