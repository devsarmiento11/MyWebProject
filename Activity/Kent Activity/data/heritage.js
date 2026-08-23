export const heritageSites = [
  {
    slug: 'manaoag-church',
    name: 'Minor Basilica of Our Lady of Manaoag',
    shortName: 'Manaoag Church',
    location: 'Manaoag, Pangasinan',
    category: 'Religious Heritage',
    image: '/images/manaoag-church.webp',
    imageAlt: 'Exterior view of the Minor Basilica of Our Lady of Manaoag in Pangasinan.',
    summary: 'A well-known religious landmark in Manaoag and a cultural heritage property in Pangasinan.',
    story: 'The Minor Basilica of Our Lady of Manaoag is a prominent religious landmark in the municipality of Manaoag. Its church complex is recognized as a cultural heritage property and remains an important destination for visitors interested in Pangasinan’s religious and architectural heritage.',
    highlights: ['Religious landmark', 'Cultural heritage', 'Manaoag'],
    photoCredit: 'Photo: Thelion1997 / Wikimedia Commons, CC BY-SA 4.0',
  },
  {
    slug: 'pangasinan-capitol',
    name: 'Pangasinan Provincial Capitol',
    shortName: 'Provincial Capitol',
    location: 'Lingayen, Pangasinan',
    category: 'Civic Heritage',
    image: '/images/pangasinan-capitol.webp',
    imageAlt: 'Front facade of the Pangasinan Provincial Capitol building in Lingayen.',
    summary: 'A distinctive government landmark in Lingayen that represents Pangasinan’s civic and architectural heritage.',
    story: 'The Pangasinan Provincial Capitol stands in Lingayen, the provincial capital. Its monumental facade and long-standing role in provincial government make it a recognizable civic landmark and an appropriate stop in a showcase of Pangasinan’s built heritage.',
    highlights: ['Civic landmark', 'Provincial capital', 'Lingayen'],
    photoCredit: 'Photo: Elmer B. Domingo / Wikimedia Commons, CC BY-SA 4.0',
  },
  {
    slug: 'umbrella-rock',
    name: 'Umbrella Rock',
    shortName: 'Umbrella Rock',
    location: 'Agno, Pangasinan',
    category: 'Natural Heritage',
    image: '/images/umbrella-rock.webp',
    imageAlt: 'Umbrella-shaped coastal rock formation at Agno, Pangasinan during sunset.',
    summary: 'A striking coastal rock formation in Agno known for its unusual umbrella-like shape.',
    story: 'Umbrella Rock is a natural rock formation found along the coast of Agno, Pangasinan. Its distinctive shape and seaside setting make it one of the town’s recognizable natural attractions and a visually different destination from the province’s churches and civic landmarks.',
    highlights: ['Rock formation', 'Coastal scenery', 'Agno'],
    photoCredit: 'Photo: EdseastresD600 / Wikimedia Commons, CC BY-SA 4.0',
  },
];

export function getSiteBySlug(slug) {
  return heritageSites.find((site) => site.slug === slug);
}
