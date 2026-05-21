import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://d4-whirlwind-playbook.netlify.app',
  integrations: [
    starlight({
      title: 'D4 S13 Playbook',
      description: 'Lord of Hatred Whirlwind Barb master playbook',
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'script',
          attrs: { src: '/checklist.js', defer: true },
        },
      ],
      defaultLocale: 'en',
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      lastUpdated: true,
      pagination: true,
      components: {
        // Reserved for future custom overrides
      },
      sidebar: [
        {
          label: 'Quick Start',
          items: [
            { label: 'What do you want?', slug: 'goals' },
            { label: 'Cheatsheet', slug: 'cheatsheet' },
          ],
        },
        {
          label: 'Builds',
          collapsed: false,
          items: [
            { label: 'Overview', slug: 'builds' },
            {
              label: 'Barbarian',
              collapsed: false,
              items: [
                { label: 'All Barb Builds', slug: 'builds/barbarian' },
                { label: 'My Overpower Whirlwind', slug: 'builds/barbarian/whirlwind-overpower' },
                { label: 'Maxroll Meta (wudijo)', slug: 'builds/barbarian/whirlwind-maxroll' },
                { label: 'Rob Spin2Win Whirlwind', slug: 'builds/barbarian/whirlwind-speed' },
                { label: 'swa99y Pelghain Frost', slug: 'builds/barbarian/whirlwind-pit150-frost' },
                { label: 'Selig (legacy)', slug: 'builds/barbarian/whirlwind-immortal-selig' },
              ],
            },
            {
              label: 'Warlock',
              collapsed: false,
              items: [
                { label: 'All Warlock Builds', slug: 'builds/warlock' },
                { label: 'Apocalypse', slug: 'builds/warlock/apocalypse' },
                { label: 'Profane Sentinel', slug: 'builds/warlock/profane-sentinel' },
              ],
            },
          ],
        },
        {
          label: 'Reference',
          collapsed: false,
          items: [
            { label: 'A. Damage Foundations', slug: 'a-damage-foundations' },
            { label: 'B. Horadric Cube', slug: 'b-horadric-cube' },
            { label: 'C. Cube Recipes', slug: 'c-cube-recipes' },
            { label: 'D. Tempering & Masterworking', slug: 'd-tempering-masterworking' },
            { label: 'E. Item Acquisition', slug: 'e-item-acquisition' },
            { label: 'F. Aspect & Unique Hunting', slug: 'f-aspect-unique-hunting' },
            { label: 'G. Charms & Seals', slug: 'g-charms-seals' },
            { label: 'H. War Plans', slug: 'h-war-plans' },
            { label: 'P. Whirlwind Spotlight (legacy)', slug: 'whirlwind-barb' },
            { label: 'Q. Echoing Hatred', slug: 'q-echoing-hatred' },
            { label: 'I. Mythic Seal Loop', slug: 'i-mythic-seal-loop' },
            { label: 'J. Limited-Time Farms', slug: 'j-limited-time-farms' },
            { label: 'K. Material Farming', slug: 'k-material-farming' },
            { label: 'L. Settings & QoL', slug: 'l-settings-qol' },
            { label: 'M. Secret Portal', slug: 'm-secret-portal' },
            { label: 'N. Edge Cases', slug: 'n-edge-cases' },
            { label: 'O. Source Index', slug: 'o-source-index' },
          ],
        },
      ],
    }),
  ],
});
