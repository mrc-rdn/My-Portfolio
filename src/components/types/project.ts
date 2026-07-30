export interface ProjectData {
  title: string;
  description: string;
  img: string[];
  technologies: string[];
  features: string[] | null;
  link?: string;
  is_status: boolean;
  duration: string;
}

export interface ProjectHighlightData {
    title: string;
    description: string;
    year: number;
}

export interface socialaccount {
        id: number;
        social: string;
        link: string;
    }