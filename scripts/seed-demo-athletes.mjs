import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// 1. Load from .env.seed (NOT .env.local)
dotenv.config({ path: resolve(process.cwd(), '.env.seed') });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// 2. Confirm both env vars are present
if (!supabaseUrl || !supabaseServiceKey) {
  console.error('ERROR: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing from .env.seed.');
  console.error('Please create .env.seed with your service role key and try again.');
  process.exit(1);
}

// 3. Create Supabase admin client
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

const ATHLETES = [
  { name: 'Arjun Desai', email: 'athlete-seed-1@sportiq.test', region: 'asia', sports: ['cricket', 'football'], pos: 'Forward', age: 19, height: 180, weight: 75, foot: 'Right', exp: 4 },
  { name: 'Rohan Sharma', email: 'athlete-seed-2@sportiq.test', region: 'eu', sports: ['tennis'], pos: 'Singles', age: 22, height: 185, weight: 80, foot: 'Right', exp: 8 },
  { name: 'Kavya Patel', email: 'athlete-seed-3@sportiq.test', region: 'na', sports: ['basketball'], pos: 'Point Guard', age: 20, height: 170, weight: 65, foot: 'Right', exp: 5 },
  { name: 'Vikram Singh', email: 'athlete-seed-4@sportiq.test', region: 'asia', sports: ['athletics', 'swimming'], pos: 'Sprinter', age: 24, height: 178, weight: 72, foot: 'Left', exp: 6 },
  { name: 'Aditi Rao', email: 'athlete-seed-5@sportiq.test', region: 'eu', sports: ['gymnastics'], pos: 'All-Around', age: 18, height: 160, weight: 55, foot: 'Right', exp: 10 },
  { name: 'Rahul Verma', email: 'athlete-seed-6@sportiq.test', region: 'na', sports: ['golf'], pos: 'Pro', age: 26, height: 182, weight: 78, foot: 'Right', exp: 12 },
  { name: 'Sneha Reddy', email: 'athlete-seed-7@sportiq.test', region: 'asia', sports: ['volleyball'], pos: 'Setter', age: 21, height: 175, weight: 68, foot: 'Right', exp: 3 },
  { name: 'Nikhil Nair', email: 'athlete-seed-8@sportiq.test', region: 'eu', sports: ['football', 'basketball'], pos: 'Midfielder', age: 23, height: 176, weight: 70, foot: 'Left', exp: 7 },
];

const TEST_PASSWORD = 'TestPassword123!';
const SLEEP_MS = 500;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function seedAthletes() {
  console.log('Starting demo athlete seeding process...\n');

  for (const athlete of ATHLETES) {
    try {
      console.log(`Creating user: ${athlete.email}...`);

      // 4. Create User with Admin API
      const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email: athlete.email,
        password: TEST_PASSWORD,
        email_confirm: true,
        user_metadata: {
          full_name: athlete.name,
          role: 'athlete', // Matches UserRole.Athlete enum value
        },
      });

      if (authError) {
        throw new Error(`Auth Error: ${authError.message}`);
      }

      const userId = authData.user.id;
      
      // Wait briefly for the public.profiles trigger to finish creating the row
      await sleep(SLEEP_MS);

      // 5. Update the profiles row
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: athlete.name,
          location: athlete.region,
          selected_sports: athlete.sports,
          primary_position: athlete.pos,
          age: athlete.age,
          height_cm: athlete.height,
          weight_kg: athlete.weight,
          dominant_foot: athlete.foot,
          years_of_experience: athlete.exp,
          onboarding_complete: true,
        })
        .eq('id', userId);

      if (profileError) {
        throw new Error(`Profile Update Error: ${profileError.message}`);
      }

      // 6. Log success
      console.log(`✅ Success: ${athlete.email} (District/Region: ${athlete.region})`);

    } catch (error) {
      // 7. Error handling per user - log and continue
      console.error(`❌ Failed to seed ${athlete.email}:`, error.message);
    }
  }

  console.log('\nSeeding complete.');
}

seedAthletes();
