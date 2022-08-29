// Import core types
import type { NextApiRequest, NextApiResponse } from 'next';
// Import custom type
import Post from '@interfaces/blog';

// Fake users data
const posts: Post[] = [
  {
    id: '1',
    image: {
      type: 'mp4',
      url: 'https://cdnl.iconscout.com/lottie/free/thumb/developer-discussing-different-options-5148935-4308325.mp4',
    },
    title: '',
    shortDesc: '',
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(posts);
}
