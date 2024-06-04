import { NextRequest, NextResponse } from 'next/server';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { connectDatabase } from '@/libs/utils';
import Blog from '@/model/Blog';

// Configure multer storage
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

// Configure multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
}).single('image');

// Middleware to parse form-data
const runMiddleware = (req: any, res: any, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (request: NextRequest) => {
  const res = {
    status: (statusCode: number) => ({
      send: (data: any) => {
        return NextResponse.json(data, { status: statusCode });
      },
    }),
  };

  try {
    await runMiddleware(request, res, upload);

    // Log the request body and file
    console.log('Request body:', request.body);
    console.log('Request file:', request.file);

    // Use multipart-form data parsing with Multer
    const { name, shortDescription, description, team, techStack, visibility } = request.body;
    const image = request.file ? `http://localhost:3000/uploads/${request.file.filename}` : '';

    // Connect to the database and save the blog
    await connectDatabase();
    const blog = new Blog({
      name,
      shortDescription,
      description,
      team,
      techStack,
      visibility,
      image,
    });
    await blog.save();

    return NextResponse.json({ message: 'Blog created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Error processing request' }, { status: 500 });
  }
};