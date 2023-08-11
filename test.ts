import { fastify, type FastifyInstance } from "fastify";
import { pino } from "pino";

// all latest versions
const log = pino();
const app: FastifyInstance = fastify({
  logger: log,
});
