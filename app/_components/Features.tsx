"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Features = () => {
    const features = [
        {
          id: 1,
          title: "UI/UX Design",
          description: "Crafting engaging and intuitive user experiences that enhance customer interaction and satisfaction.",
          isExpanded: true
        },
        {
          id: 2,
          title: "Custom Website Development",
          description: "Building tailored websites that meet unique business requirements and drive online presence.",
          isExpanded: false
        },
        {
          id: 3,
          title: "E-commerce Solutions",
          description: "Developing robust e-commerce platforms to streamline online sales and improve user shopping experience.",
          isExpanded: false
        },
        {
          id: 4,
          title: "SEO Optimization",
          description: "Optimizing websites for search engines to increase visibility and attract more organic traffic.",
          isExpanded: false
        },
        {
          id: 5,
          title: "Web Maintenance & Support",
          description: "Providing ongoing website maintenance and support to ensure seamless operation and security.",
          isExpanded: false
        },
        {
          id: 6,
          title: "Content Management Systems (CMS)",
          description: "Implementing flexible CMS solutions that enable easy content updates and management.",
          isExpanded: false
        }
      ];


      
      const [expanded, setExpanded] = useState("1");
      
    return (
        <div className='flex flex-col  sm:justify-between sm:items-start items-center gap-3 py-6 mx-4 max-w-7xl xl:mx-auto' >
            
            
            <h2 className='text-4xl sm:text-6xl sm:max-w-3xl max-w-lg uppercase antialiased font-bold text-primary bg-secondary my-2'>What we Offer</h2>
            <p className='text-center'>Step-by-Step Guide to Achieving Your Business Goals</p>
            <Accordion value={expanded} onValueChange={setExpanded} collapsible type='single' defaultValue='1' className='w-full py-3 sm:mx-0 mx-4'>
            {features.map(feature => (
                <AccordionItem key={feature.id} value={feature.id.toString()} className={`border transition-colors duration-300 border-primary/25 rounded-lg mb-2 p-4 shadow-md ${feature.id.toString() === expanded ? 'bg-secondary': 'bg-neutral-100'}`}>
                <AccordionTrigger>{feature.id}. {feature.title}</AccordionTrigger>
                <AccordionContent >
                  {feature.description}
                </AccordionContent>
              </AccordionItem>
            ))}
            </Accordion>

            <div className='bg-neutral-100 rounded-2xl shadow-md p-6 sm:p-8 flex flex-col space-y-2'>
                <h4 className='text-2xl sm:max-w-[40%] sm:text-3xl  font-semibold antialiased' >Lets make things happen</h4>
                <p className='sm:max-w-[40%]' >Contact us today to learn more about how our web tech services can help your business grow and succeed online by providing your first website for FREE!</p>
                <Button className='sm:max-w-[40%] !rounded-full items-center !py-5 mt-2 flex text-center !px-3 bg-primary text-background'>Get your free website <ArrowRight className='-rotate-45 bg-secondary rounded-full ml-1 scale-150  p-0.5
            ' /></Button>
            </div>
        </div>
    )
}

export default Features