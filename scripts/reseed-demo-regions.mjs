import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(process.cwd(), '.env.seed') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('ERROR: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from .env.seed.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const ATHLETE_UPDATES = [
  { email: 'athlete-seed-1@sportiq.test', region: 'chennai', sports: ['cricket', 'football'] },
  { email: 'athlete-seed-2@sportiq.test', region: 'coimbatore', sports: ['badminton'] },
  { email: 'athlete-seed-3@sportiq.test', region: 'bengaluru', sports: ['basketball'] },
  { email: 'athlete-seed-4@sportiq.test', region: 'madurai', sports: ['athletics', 'swimming'] },
  { email: 'athlete-seed-5@sportiq.test', region: 'mumbai', sports: ['silambam'] },
  { email: 'athlete-seed-6@sportiq.test', region: 'delhi', sports: ['chess'] },
  { email: 'athlete-seed-7@sportiq.test', region: 'hyderabad', sports: ['volleyball'] },
  { email: 'athlete-seed-8@sportiq.test', region: 'kolkata', sports: ['football', 'basketball'] },
];

const SLEEP_MS = 500;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function reseedRegions() {
  console.log('Starting demo athlete reseeding process for TN/India locations...\n');

  for (const update of ATHLETE_UPDATES) {
    try {
      console.log(`Finding user: ${update.email}...`);

      const { data: usersData, error: listError } = await supabase.auth.admin.listUsers();
      if (listError) throw new Error(`List users error: ${listError.message}`);

      const user = usersData.users.find(u => u.email === update.email);
      if (!user) {
        console.error(`❌ User not found for ${update.email}`);
        continue;
      }

      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          location: update.region,
          selected_sports: update.sports,
        })
        .eq('id', user.id);

      if (profileError) {
        throw new Error(`Profile Update Error: ${profileError.message}`);
      }

      console.log(`✅ Success updated: ${update.email} (New Region: ${update.region}, New Sports: ${update.sports.join(', ')})`);
      await sleep(SLEEP_MS);
    } catch (error) {
      console.error(`❌ Failed to update ${update.email}:`, error.message);
    }
  }

  console.log('\nReseeding complete.');
}

reseedRegions();
