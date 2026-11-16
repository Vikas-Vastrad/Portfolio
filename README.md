# Boarding Pass Portfolio

A responsive travel-themed portfolio built with Next.js App Router, TypeScript, React, Tailwind CSS v4, daisyUI v5, Prettier, and tailwind-merge.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run build` to compile a production build, `npm run lint` and `npm run typecheck` for checks, and `npm run format` for Prettier.

Development generates files in `.next-dev/`; production builds and `npm start` use `.next/`. This keeps production builds from clearing files used by the development server. If an existing server reports a missing `routes-manifest.json`, stop it with Ctrl+C and run `npm run dev` again. For production, complete `npm run build` before running `npm start`.

## Edit content — ONE JSON file

**`data/portfolio.json` is the single source of truth for all portfolio copy, names, details, links, navigation, tags, section titles, labels and placeholder values.** Nothing personal is hardcoded in the components. Change the JSON and refresh. The project contains intentional `[PLACEHOLDER]` values where the screenshot did not supply final details.

- Edit `hero`, `about`, `experience`, `projects`, `skills`, `competencies`, `certifications`, `contact` to customize the page.
- For profile picture: put it in `public/` and set `about.photoPath` to `/my-picture.jpg`.
- For resume: put `resume.pdf` in `public/` and set `site.resumePath` to `/resume.pdf`. Until then, **Download resume** opens print / Save as PDF (instead of a broken or invented download).
- For project and social links, set the relevant `link` or `href`. Empty entries deliberately stay non-clickable.
- For real email use `mailto:you@example.com`.

## Structure

```
app/                    # App Router entry, layout, CSS, 404 page, favicon
components/sections/    # Hero, About, Experience, Projects, Skills, Competencies, Certifications, Contact, PortfolioFooter
components/shared/      # Navbar, SectionHeading, Chip, TicketCard, ChecklistCard, StampCard, DepartureBoard, FlightPath, ResumeButton
data/portfolio.json     # All portfolio data and copy
lib/portfolio.ts        # Typed JSON access
lib/cn.ts               # clsx + tailwind-merge utility
public/                 # Static assets
```

## Design

Faithful adaptation of the reference: paper #F6F1E7, navy #102A47, signal orange #F26721, Barlow Condensed headings, DM Sans body, ticket stubs, departure board, passport card, stamps, and section-leg labels. Fonts are loaded via Google Fonts CSS; local fallback fonts are used when offline. Responsive layout, accessible keyboard tooltips, mobile menu, reduced-motion support and printable resume fallback are provided.

Tailwind and daisyUI are imported in `app/globals.css`, with custom CSS for the reference's one-off, highly specific aviation design. `cn()` in `lib/cn.ts` is ready for shared Tailwind component variants.

## Footer boarding pass and social links

Edit `footer.boardingPass` in `data/portfolio.json` to update the boarding-pass details, and `footer.detailsHeading` to change the social panel heading. The card uses daisyUI?s `hover-3d` wrapper and its eight hover zones.

Set the `href` fields for the `github` and `linkedin` entries in `contact.links` to your full profile URLs (for example, `https://github.com/your-username` and `https://www.linkedin.com/in/your-username/`). Both the contact section and footer use these same links. Empty URLs leave the footer icons disabled; configured links open in a new tab.
