# The Friday Counterfeit

An 80-minute leadership crisis simulation for 20 students (2 teams of 10), set at **Bleu Hen Hospitality Group**, a fictional three-location farm-to-table restaurant group in Delaware. The name is a pun on the University of Delaware's "Blue Hens" and on *bleu* (as in the cheese). It has no connection to the university, so don't use university logos on any materials.

## The scenario

It is 2:00 PM on the Friday of Valentine's weekend. A local reporter has just posted a teaser saying the group's exclusive "local, sustainable" supplier is a fraud. Her story publishes at **5:00 PM**. The walk-in coolers hold **$40,000** of the supplier's product, and **$200,000** of weekend revenue is booked. Teams must choose the least-bad option with incomplete information, then defend it to a stressed, cash-strapped Owner.

There is no correct answer. The aim is to practice leading with the answer (BLUF), triaging by recoverability, and owning bad news.

## Session at a glance (80 minutes)

| Clock | Phase | What happens |
|---|---|---|
| 00:00 – 15:00 | Primer | Facilitator teaches BLUF, triage and the pitch structure |
| 15:00 – 20:00 | The Drop | 2 teams of 10 receive the briefing |
| 20:00 – 45:00 | War Room | 25 minutes to build three deliverables. **Mid-Point Inject at 35:00** (supplier lawsuit threat) |
| 45:00 – 70:00 | The Gauntlet | Deliverables lock at 45:00. Each team gets 3 minutes to pitch plus about 8 minutes of questioning from the Owner, then the Owner makes a one-minute call |
| 70:00 – 80:00 | Debrief | Facilitator breaks character and connects the exercise to real-world leadership |

**Team deliverables:** (1) a 3-sentence BLUF memo to the Owner, (2) a 3-point operational pivot for the Executive Chef, (3) a 2-sentence script for front-of-house staff.

## What's in this repo

### `docs/` (facilitation materials)

| File | For | Contents |
|---|---|---|
| `00-scenario-bible.md` | Facilitator and Role Player only | Names, numbers, cast, evidence trail, resources, the day's clock, and the hidden truth. Read this first. |
| `01-participant-briefing.md` | Participants | The crisis briefing (source text for the printed handout) |
| `02-facilitator-guide.md` | Facilitator | Room setup, primer talking points, scripted read-alouds, ambient pressure beats, the 35:00 inject, Gauntlet run sheet, debrief questions, contingencies |
| `03-role-player-briefing.md` | Role Player (the Owner) | Persona, private backstory, rules of engagement, pressure questions, the closing Owner's Call |

### `handouts/` (print-ready participant materials)

Open `handouts/index.html` for links to everything. Each handout is an HTML page with a US Letter PDF in `handouts/pdf/`.

| Handout | Pages | Notes |
|---|---|---|
| Crisis Briefing | 6 | Every participant gets a copy |
| Exhibit A: The Teaser | 1 | The reporter's post and replies |
| Exhibit B: Reservation Board | 2 | Bookings, cancellation log, flagged tables |
| Exhibit C: Text Thread | 1 | Sous chef Tess and Chef Rafi |
| Exhibit D: Valentine's Menu | 2 | Menu front and "Meet Your Farmer" back |
| Exhibit E: Reporter Email | 1 | The 4:00 PM deadline request |
| Team Worksheet | 2 | One per team. Collected at 45:00 |

**Printing:** US Letter, portrait, 100% scale, no margins. Print one briefing per person, one set of exhibits per table, and one worksheet per team. Color is nicer but not required.

## How to run it

1. Read `docs/00-scenario-bible.md`, then `docs/02-facilitator-guide.md`.
2. Brief the Role Player with `docs/03-role-player-briefing.md` at least 15 minutes before the session, and agree on a reset signal.
3. Print the handouts and prepare the two inject envelopes described in the facilitator guide.
4. Run the session. Do not coach teams toward an answer.

## Adapting it

- **Different headcount:** two teams work for roughly 8 to 24 people. See the contingency table in the facilitator guide.
- **Editing handouts:** the HTML in `handouts/` can be edited directly. Regenerate a PDF by printing the page to PDF from a browser (Letter size, margins none, background graphics on). `handouts/00-crisis-briefing.html` is generated from `docs/01-participant-briefing.md`, so keep the two in sync if you change the briefing text.
- **Changing the numbers:** all figures (the $40,000, the $200,000, the roughly $400,000 contract penalty and so on) are invented. If you change one, update it in the scenario bible, the briefing, the role player briefing and the matching exhibit.

## Disclaimer

All people, businesses and events are fictional. Any resemblance to real organizations or individuals is coincidental.
