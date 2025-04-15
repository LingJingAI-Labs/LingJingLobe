import { POST as UniverseRoute } from '../[provider]/route';

export const runtime = 'nodejs';

export const fetchCache = 'force-no-store';
export const revalidate = 0;

// Set max duration in the correct format for Next.js 15+
export const config = {
  api: {
    bodyParser: false,
    maxDuration: 180,
    responseLimit: false,
  },
};

export const preferredRegion = [
  'arn1',
  'bom1',
  'cdg1',
  'cle1',
  'cpt1',
  'dub1',
  'fra1',
  'gru1',
  'hnd1',
  'iad1',
  'icn1',
  'kix1',
  'lhr1',
  'pdx1',
  'sfo1',
  'sin1',
  'syd1',
];

export const POST = async (req: Request) =>
  UniverseRoute(req, { params: Promise.resolve({ provider: 'openai' }) });
