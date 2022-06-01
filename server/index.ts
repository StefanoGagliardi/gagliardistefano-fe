// Import core
import express, { Request, Response, NextFunction } from 'express';

// Impor third parts
import next from 'next';

// Import custom

const PORT = 3000;
const HOSTNAME = 'localhost';
const app = next({
  dev: process.env.NODE_ENV !== 'production' ? true : false,
  hostname: HOSTNAME,
  port: PORT,
});
const appHandler = app.getRequestHandler();

class Server {
  public constructor() {
    this.initServer();
  }

  async initServer() {
    const server = express();
    await app.prepare();
    server.all('*', (req: Request, res: Response) => {
      appHandler(req, res);
    });
    server.listen(PORT, () => {
      console.log(`Listen on port ${PORT}`);
    });
  }
}
new Server();
