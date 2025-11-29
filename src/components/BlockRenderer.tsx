import React from 'react';
import Hero from './Hero';
import Services from './Services';
import MedicalTeam from './MedicalTeam';
import Testimonials from './Testimonials';
import { DynamicBlock } from '@/types/strapi';

// We need to adapt the props because the "Component" structure from Strapi 
// is slightly different (flat properties) than the "Single Type" structure (attributes object).
// However, for this implementation, we will pass the block data directly 
// and let the components handle it or adapt it here.

interface BlockRendererProps {
    blocks: DynamicBlock[];
    // We might pass shared data like services or doctors if the blocks are just "triggers"
    globalData?: {
        services?: any[];
        doctors?: any[];
        testimonials?: any[];
    };
}

const BlockRenderer = ({ blocks, globalData }: BlockRendererProps) => {
    if (!blocks) return null;

    return (
        <>
            {blocks.map((block, index) => {
                switch (block.__component) {
                    case 'layout.hero':
                        // Adapt ComponentHero to HeroData structure expected by Hero component
                        const heroData = {
                            attributes: {
                                title: block.title,
                                subtitle: block.subtitle,
                                primaryCTAText: block.primaryCTAText,
                                primaryCTALink: block.primaryCTALink,
                                secondaryCTAText: block.secondaryCTAText,
                                secondaryCTALink: block.secondaryCTALink,
                                rating: block.rating,
                                reviewCountText: block.reviewCountText,
                                backgroundImage: block.backgroundImage
                            }
                        };
                        return <Hero key={index} data={heroData as any} />;

                    case 'layout.services':
                        // The Services component expects a list of services. 
                        // If the block allows customizing title/desc, we should pass that too.
                        // For now, we pass the global services data.
                        return <Services key={index} data={globalData?.services} />;

                    case 'layout.medical-team':
                        return <MedicalTeam key={index} data={globalData?.doctors} />;

                    case 'layout.testimonials':
                        return <Testimonials key={index} data={globalData?.testimonials} />;

                    default:
                        return null;
                }
            })}
        </>
    );
};

export default BlockRenderer;
