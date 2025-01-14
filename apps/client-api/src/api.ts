import Express from 'express';
import { Request, Response } from 'express';
const app: Express.Application = Express();
const PORT = process.env.PORT || 5000; // Changed default port to 5000

interface MessageResponse {
  message: string;
}

app.get('/', async (req: Request, res: Response) => {
  const response: MessageResponse = {
    message: "hello testing"
  };
  res.json(response);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

export default app;