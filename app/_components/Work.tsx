"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ArrowRight } from 'lucide-react'
import Autoplay  from 'embla-carousel-autoplay'

const Work = () => {

    const projects = [
        {
            name: "LinkerIn",
            description: "A blog website built using the MERN stack (MongoDB, Express, React, Node.js).",
            link: "https://linkerin.vercel.app", // Replace with actual link
            tags: ["MERN", "Blog", "Web Development"]
        },
        {
            name: "0-Hunger",
            description: "A website for an NGO focused on eliminating hunger.",
            link: "https://0-hunger.vercel.app", // Replace with actual link
            tags: ["NGO", "Web Development", "Charity"]
        },
        {
            name: "soulss",
            description: "A website dedicated to mental health support and resources.",
            link: "https://oursouls.vercel.app", // Replace with actual link
            tags: ["Mental Health", "Web Development", "Support"]
        },
        {
            name: "Quiz18",
            description: "A quiz website built using the MERN stack (MongoDB, Express, React, Node.js).",
            link: "https://quiz18.vercel.app", // Replace with actual link
            tags: ["MERN", "Quiz", "Web Development"]
        }
    ];
    return (
        <div id='work' className='mx-4 xl:mx-auto max-w-7xl py-5 flex flex-col space-y-2 '>
            <h4 className='text-center sm:text-3xl sm:font-bold uppercase font-semibold'>Take a look at some of our work</h4>
            <p className='text-center sm:text-xl max-w-5xl mx-auto px-2'>Explore our creative portfolio, where innovation meets functionality. From sleek designs to efficient builds, our work speaks for itself.</p>
            <a href="#work"><Button className='w-fit mx-auto !rounded-full items-center flex text-center !px-3 bg-primary text-background'>All Projects <ArrowRight className='-rotate-45 bg-secondary rounded-full ml-1 scale-150  p-0.5
            ' /></Button></a>

            <Carousel className='py-5' plugins={[Autoplay({ delay: 3000 })] } opts={{loop:true}}>
                <CarouselContent>
                    {Array(4).fill(0).map((_, i) => (
                        <CarouselItem key={i} className='w-fit h-fit'>
                                <Card className='p-0 group rounded-lg overflow-hidden shadow-lg'>
                                    <CardContent className="relative flex p-0 aspect-video items-center justify-center ">
                                        <img src={`/project/projects-${i + 1}.png`} className='object-fill group-hover:scale-105 transition-transform duration-300' />
                                        <div className='absolute bottom-0 flex flex-col space-y-1 left-0 w-full py-4 sm:py-8 px-6 bg-gradient-to-t from-primary to-transparent'>
                                            <Badge variant={'secondary'} className='w-fit sm:text-base rounded-full shadow-md'>{projects[i].name}</Badge>
                                            <p className='text-background text-sm sm:text-lg'>{projects[i].description}</p>
                                            <div className='flex space-x-1'>
                                            {projects[i].tags.map((tag, index) => (
                                                <Badge key={index} variant={'outline'} className='w-fit scale-90 sm:scale-100  sm:text-sm rounded-full text-background shadow-md'>{tag}</Badge>
                                            ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>
    )
}

export default Work