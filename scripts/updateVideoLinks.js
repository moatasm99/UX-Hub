import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../data/intensiveCourses.js');
const fileContent = fs.readFileSync(filePath, 'utf-8');

const updates = [
    {
        "module": "ux-03",
        "title": "Choosing the Primary Persona",
        "old_url": "https://www.youtube.com/watch?v=XQZ3Z3Z3Z3Z",
        "new_url": "https://www.youtube.com/watch?v=rv9yfrV-EAs"
    },
    {
        "module": "ux-03",
        "title": "Card Sorting Demo",
        "old_url": "https://www.youtube.com/watch?v=qT_1O2O_Sbs",
        "new_url": "https://www.youtube.com/watch?v=C2GXjE4pZg8"
    },
    {
        "module": "test-01",
        "title": "Testing with 5 Users",
        "old_url": "https://www.youtube.com/watch?v=0ylnzM95sZE",
        "new_url": "https://www.youtube.com/watch?v=1UefsA5a6kA"
    },
    {
        "module": "ia-01",
        "title": "Designing High-Converting Hero Sections",
        "old_url": "https://www.youtube.com/watch?v=HeroSection",
        "new_url": "https://www.youtube.com/watch?v=vj7W-d-9-gI"
    },
    {
        "module": "system-01",
        "title": "Figma Variables Intro",
        "old_url": "https://www.youtube.com/watch?v=M5Z3Z3Z3Z3Z",
        "new_url": "https://www.youtube.com/watch?v=55555555555"
    },
    {
        "module": "system-01",
        "title": "Building a Shopping Cart in Figma",
        "old_url": "https://www.youtube.com/watch?v=ShoppingCart",
        "new_url": "https://www.youtube.com/watch?v=lJg9tD4yCmM"
    },
    {
        "module": "system-01",
        "title": "Figma for Developers",
        "old_url": "https://www.youtube.com/watch?v=DevModeVideo",
        "new_url": "https://www.youtube.com/watch?v=B1-h1-h1-h1"
    },
    {
        "module": "test-01",
        "title": "Cognitive Walkthrough Demo",
        "old_url": "https://www.youtube.com/watch?v=CognitiveWalk",
        "new_url": "https://www.youtube.com/watch?v=aG3mJI4tEIE"
    },
    {
        "module": "ba-01",
        "title": "The Art of Design Critique",
        "old_url": "https://www.youtube.com/watch?v=CritiqueVideo",
        "new_url": "https://www.youtube.com/watch?v=NO_aXm6pE3Q"
    },
    {
        "module": "ai-design-01",
        "title": "Advanced Midjourney Prompting",
        "old_url": "https://www.youtube.com/watch?v=MidjourneyUI",
        "new_url": "https://www.youtube.com/watch?v=bAqvK29t7z0"
    },
    {
        "module": "ai-design-01",
        "title": "How Attention Insight Works",
        "old_url": "https://www.youtube.com/watch?v=AttentionAI",
        "new_url": "https://www.youtube.com/watch?v=bAqvK29t7z0"
    },
    {
        "module": "dev-01",
        "title": "Web Accessibility for Designers",
        "old_url": "https://www.youtube.com/watch?v=A11yCode",
        "new_url": "https://www.youtube.com/watch?v=20SHvU2PKsM"
    },
    {
        "module": "dev-01",
        "title": "Tailwind CSS for Designers",
        "old_url": "https://www.youtube.com/watch?v=TailwindDesign",
        "new_url": "https://www.youtube.com/watch?v=_9mTJ84uL1Q"
    }
];

let updatedContent = fileContent;
let updatesCount = 0;

updates.forEach(update => {
    // 1. Find the Course ID block to scope search (optional but safer)
    // We'll search simply first: Look for the title and the old_url nearby.

    // Regex explanation:
    // look for title: "Some Title" matches, allowing for quotes variations and spacing.
    // Then look ahead for url: "OldUrl" within some reasonable distance or same block.
    // Actually, simple string replacement of the old_url might be dangerous if duplicates exist.
    // But combined with Title check it is safe.

    const title = update.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // escape regex chars
    const oldUrl = update.old_url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Pattern: 
    // title: "Title" ... url: "OldUrl"
    // OR
    // url: "OldUrl" ... title: "Title"
    // The resource object structure is { type: "...", title: "...", url: "..." } usually.

    // Let's first search if the specific block exists string-for-string if it's single line.
    // E.g. { type: "Video", title: "Title", url: "OldUrl", ... }

    // If not, we try multi-line match.

    // We will look for the substring of the title, then verify the URL follows.

    const lines = updatedContent.split('\n');
    let found = false;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(`title: "${update.title}"`) || lines[i].includes(`"title": "${update.title}"`)) {
            // Found the title line.
            // Check if URL is on this line
            if (lines[i].includes(update.old_url)) {
                // Single line match?
                lines[i] = lines[i].replace(update.old_url, update.new_url);
                found = true;
                break; // Assume one match per specific title/url pair
            } else {
                // Maybe URL is on next few lines?
                // Look ahead a few lines (e.g. 5) for the url property
                for (let j = 1; j <= 5; j++) {
                    if (i + j < lines.length) {
                        if (lines[i + j].includes(update.old_url)) {
                            lines[i + j] = lines[i + j].replace(update.old_url, update.new_url);
                            found = true;
                            break;
                        }
                        // If we hit closing brace or another title, stop
                        if (lines[i + j].includes('}') || lines[i + j].includes('title:')) {
                            break;
                        }
                    }
                }
                if (found) break;
            }
        }
    }

    if (found) {
        updatesCount++;
        console.log(`[SUCCESS] Updated "${update.title}"`);
    } else {
        console.log(`[FAILED] Could not find "${update.title}" with url "${update.old_url}"`);
    }

    updatedContent = lines.join('\n');
});

fs.writeFileSync(filePath, updatedContent, 'utf-8');
console.log(`\nTotal updates applied: ${updatesCount}`);
