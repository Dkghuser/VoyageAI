# VoyageAI - AI Travel Guide

This is a [Next.js](https://nextjs.org) project that provides an AI-powered travel planning and recommendation chatbot.

## Getting Started

### Prerequisites

1. First, create a `.env.local` file in the root directory (this file should not be committed to git):

```bash
VOYAGEAI_APP_API_KEY=your_aimlapi_key_here
```

You'll need to obtain an API key from [AI/ML API](https://api.aimlapi.com) to use the OpenAI-compatible endpoint.

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the VoyageAI chatbot.

## Project Structure

- `src/app/api/chat/route.js` - Secure backend API route that handles OpenAI API calls server-side
- `src/app/ActionProvider.js` - Frontend chatbot logic that calls the secure backend API
- `src/app/config.js` - Chatbot configuration
- `src/app/components/ChatComponent.js` - Chat UI component

## Security Features

This application implements a secure backend API proxy pattern:

- API keys are stored securely on the server (never exposed to the browser)
- All OpenAI API calls are made server-side through the `/api/chat` endpoint
- Frontend communicates only with the secure backend API

## Environment Variables

The following environment variables are required in your `.env.local` file:

- `VOYAGEAI_APP_API_KEY` - Your AI/ML API key for accessing OpenAI-compatible endpoints

**Important:** Never commit the `.env.local` file to version control as it contains sensitive API keys.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Make sure to add your `VOYAGEAI_APP_API_KEY` environment variable in your deployment environment.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
