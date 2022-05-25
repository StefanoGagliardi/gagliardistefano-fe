// Import core
import express, { Request, Response, NextFunction } from 'express';

// Import third parts
import next from 'next';

// Import custom

const PORT = 3000;
const HOSTNAME = 'localhost';
const app = next({
  dev: process.env.NODE_ENV !== 'production' ? true : false,
  hostname: HOSTNAME,
  port: PORT
});
const nextHandler = app.getRequestHandler();

// async () => {
//   try {
//     await app.prepare();

//     // Init server
//     const server = express();

//     // Catch all request
//     server.all('*', (req: Request, res: Response, next: NextFunction) => {
//       // Pass handle logic to NextJs
//       nextHandler(req, res);
//     });

//     // Listen on port... 3000
//     server.listen(PORT, () => {
//       console.log(`Server listen on Port: ${PORT}`);
//     });
//   } catch (e) {
//     console.log('Error: ', e);
//     process.exit(1);
//   }
// };

class Server {
  constructor() {
    this.startServer();
  }

  async startServer() {
    await app.prepare();

    // Init server
    const server = express();

    // Catch all request
    server.all('*', (req: Request, res: Response, next: NextFunction) => {
      // Pass handle logic to NextJs
      nextHandler(req, res);
    });

    // Listen on port... 3000
    server.listen(PORT, () => {
      console.log(`Server listen on Port: ${PORT}`);
    });
  }
}
new Server();
