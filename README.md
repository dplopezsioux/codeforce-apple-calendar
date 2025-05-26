# 📅 Codeforces Contest Calendar (.ics)

Automatically generate and publish an iCalendar (.ics) feed with upcoming **Codeforces Div. 1, Div. 2, and Div. 3** contests — perfect for subscribing via **iCloud, Google Calendar, Outlook**, and more.

[🌐 View public calendar feed](https://dplopezsioux.github.io/codeforce-apple-calendar/codeforces_div.ics)

---

## 🚀 What This Project Does

- Fetches upcoming contests from [Codeforces API](https://codeforces.com/api/contest.list)
- Filters only contests that include `Div.` in the title (e.g., "Div. 1", "Div. 3")
- Converts them into `.ics` calendar events
- Publishes the feed to GitHub Pages via a scheduled GitHub Action (every 6 hours)

---

## ✅ How to Subscribe (iCloud / Google Calendar)

### 🔹 iCloud Calendar (Mac / iPhone)

1. Open [iCloud Calendar](https://www.icloud.com/calendar) or the **Calendar** app on macOS
2. Add a new **Subscribed Calendar**
3. Paste this URL:

https://dplopezsioux.github.io/codeforce-apple-calendar/codeforces_div.ics


4. Set refresh interval to `Every hour` (recommended)
5. Done! You'll now see upcoming Codeforces contests in your calendar.

---

### 🔹 Google Calendar

1. Go to [Google Calendar](https://calendar.google.com)
2. On the left sidebar, click **Other calendars → From URL**
3. Paste the same `.ics` URL
4. Click "Add calendar"

---

## ⚙️ How It Works

This repo uses:

- [`ical-generator`](https://github.com/sebbo2002/ical-generator) to build `.ics` files
- `node-fetch` to fetch Codeforces contests
- GitHub Actions to run every 6 hours and push updates to GitHub Pages

The generated file is saved under `/docs/codeforces_div.ics` to be served directly by GitHub Pages.

---

## 👨‍💻 Maintainer

Built by [@dplopezsioux](https://github.com/dplopezsioux) — always open to improvements or suggestions!

---

## 📜 License

MIT — use it freely, contribute, or fork as needed.
