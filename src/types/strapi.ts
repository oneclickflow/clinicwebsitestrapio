export interface StrapiResponse<T> {
    data: T;
    meta: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface StrapiImage {
    id: number;
    attributes: {
        url: string;
        alternativeText?: string;
        width?: number;
        height?: number;
    };
}

export interface HeroData {
    id: number;
    attributes: {
        title: string;
        subtitle: string;
        primaryCTAText: string;
        primaryCTALink: string;
        secondaryCTAText: string;
        secondaryCTALink: string;
        rating: number;
        reviewCountText: string;
        backgroundImage: {
            data: StrapiImage;
        };
    };
}

export interface ServiceData {
    id: number;
    attributes: {
        title: string;
        description: string;
        iconName: string; // We will map string to Lucide icon in frontend
        categoryIndex: number;
    };
}

export interface DoctorData {
    id: number;
    attributes: {
        name: string;
        specialty: string;
        bio: string;
        linkedin: string;
        image: {
            data: StrapiImage;
        };
    };
}

export interface TestimonialData {
    id: number;
    attributes: {
        name: string;
        text: string;
        rating: number;
        role: string;
    };
}
