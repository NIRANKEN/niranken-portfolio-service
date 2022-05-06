type SeedType = {
  table: string;
  sources: string[];
};

const seedWorks: SeedType = {
  table: 'works',
  sources: ['./__seeds__/Works.json'],
};

export default {
  seedWorks,
};
