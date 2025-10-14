export interface ContentSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  order: number;
  visible: boolean;
}

const STORAGE_KEY = 'cms_content';

export const getContentSections = (): ContentSection[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading content:', error);
  }
  
  // Default content
  return [
    {
      id: '1',
      title: 'Welcome to Our Platform',
      subtitle: 'Build amazing experiences',
      description: 'Create, manage, and deploy content with ease using our powerful CMS platform.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      order: 1,
      visible: true,
    },
    {
      id: '2',
      title: 'Powerful Features',
      subtitle: 'Everything you need',
      description: 'Intuitive dashboard, real-time updates, and seamless integration with modern tools.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      order: 2,
      visible: true,
    },
    {
      id: '3',
      title: 'Deploy Anywhere',
      subtitle: 'Global edge network',
      description: 'Built for Cloudflare Pages with instant global deployment and lightning-fast performance.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      order: 3,
      visible: true,
    },
  ];
};

export const saveContentSections = (sections: ContentSection[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
  } catch (error) {
    console.error('Error saving content:', error);
    throw error;
  }
};

export const addContentSection = (section: Omit<ContentSection, 'id'>): ContentSection => {
  const sections = getContentSections();
  const newSection: ContentSection = {
    ...section,
    id: Date.now().toString(),
  };
  sections.push(newSection);
  saveContentSections(sections);
  return newSection;
};

export const updateContentSection = (id: string, updates: Partial<ContentSection>): void => {
  const sections = getContentSections();
  const index = sections.findIndex(s => s.id === id);
  if (index !== -1) {
    sections[index] = { ...sections[index], ...updates };
    saveContentSections(sections);
  }
};

export const deleteContentSection = (id: string): void => {
  const sections = getContentSections();
  const filtered = sections.filter(s => s.id !== id);
  saveContentSections(filtered);
};