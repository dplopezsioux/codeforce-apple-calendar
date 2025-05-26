import fetch from 'node-fetch';
import ical from 'ical-generator';
import fs from 'fs';

// Creating the calendar instance
const calendar = ical({ name: 'Codeforces Upcoming Contests' });
const API_URL = 'https://codeforces.com/api/contest.list';

async function generateICS() {
  const res = await fetch(API_URL);
  const data = await res.json();

  if (data.status !== 'OK') {
    throw new Error('❌ Could not fetch contests from Codeforces API');
  }

  const contests = data.result
    .filter(c =>
      c.phase === 'BEFORE' && c.name.toLowerCase().includes('div.')
    )
    .sort((a, b) => a.startTimeSeconds - b.startTimeSeconds)
    .slice(0, 20);

  for (const contest of contests) {
    const start = new Date(contest.startTimeSeconds * 1000);
    const end = new Date(start.getTime() + contest.durationSeconds * 1000);

    calendar.createEvent({
      start,
      end,
      summary: contest.name,
      url: `https://codeforces.com/contest/${contest.id}`,
      uid: `codeforces-${contest.id}@codeforces.com`,
    });
  }

  fs.mkdirSync('docs', { recursive: true });

  // Save calendar as plain .ics text (FIXED)
  fs.writeFileSync('docs/codeforces_div.ics', calendar.toString());
  console.log('✅ ICS file created at docs/codeforces_div.ics');
}

generateICS().catch(err => {
  console.error('❌ Error:', err.message);
});
