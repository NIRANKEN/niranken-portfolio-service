type SeedType = {
  table: string;
  sources: string[];
};

const seedWorks: SeedType = {
  table: 'works',
  sources: ['./__seeds__/Works.json'],
};

const seedSkills: SeedType = {
  table: 'skills',
  sources: ['./__seeds__/Skills.json'],
};

const seedAppeals: SeedType = {
  table: 'appeals',
  sources: ['./__seeds__/Appeals.json'],
};

const seedAbout: SeedType = {
  table: 'about',
  sources: ['./__seeds__/About.json'],
};

export const seedList: SeedType[] = [
  seedWorks,
  seedSkills,
  seedAppeals,
  seedAbout,
];

export default {
  seedWorks,
  seedSkills,
  seedAppeals,
  seedAbout,
};
