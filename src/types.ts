export type Category = 'all' | 'photography' | 'editorial' | 'architecture' | 'portrait' | 'street' | 'graphic';

export type ViewMode = 'bento' | 'stream' | 'catalog';

export interface WorkSpecs {
  type: 'photography' | 'design';
  camera?: string;
  lens?: string;
  aperture?: string;
  shutter?: string;
  iso?: string;
  location?: string;
  aspectRatioLabel?: string;
  gridSystem?: string;
  typefaces?: string[];
  tools?: string[];
  palette?: { name: string; hex: string }[];
}

export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  categoryLabel: string;
  year: string;
  client: string;
  role: string;
  image: string;
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1';
  summary: string;
  story: string;
  specs: WorkSpecs;
  featured?: boolean;
  awardOrPress?: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  organization: string;
  serviceType: 'editorial-photo' | 'brand-identity' | 'architectural' | 'monograph-design' | 'licensing';
  timeline: string;
  budgetRange: string;
  projectDetails: string;
}

export interface Exhibition {
  year: string;
  title: string;
  venue: string;
  city: string;
  type: 'Solo' | 'Group' | 'Biennale';
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  project: string;
}
