import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ArrowRight } from 'lucide-react'

const Work = () => {
    return (
        <div className='mx-4 xl:mx-auto max-w-7xl py-5 flex flex-col space-y-2 '>
            <h4 className='text-center sm:text-3xl sm:font-bold uppercase font-semibold'>Take a look at some of our work</h4>
            <p className='text-center sm:text-xl max-w-5xl mx-auto px-2'>Explore our creative portfolio, where innovation meets functionality. From sleek designs to efficient builds, our work speaks for itself.</p>
            <Button className='w-fit mx-auto !rounded-full items-center flex text-center !px-3 bg-primary text-background'>All Projects <ArrowRight className='-rotate-45 bg-secondary rounded-full ml-1 scale-150  p-0.5
            ' /></Button>

            <Carousel className='py-5'>
                <CarouselContent>
                    {Array(4).fill(0).map((_, i) => (
                        <CarouselItem key={i} className='w-fit h-fit'>
                                <Card className='p-0 group rounded-lg overflow-hidden shadow-lg'>
                                    <CardContent className="flex p-0 aspect-video items-center justify-center ">
                                        <img src={`/project/projects-${i + 1}.png`} className='object-fill group-hover:scale-105 transition-transform duration-300' />
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