"use client"

import React, {  useState } from 'react'
import { useForm } from 'react-hook-form'
import { z, } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LoaderIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'


const formSchema = z.object({

    name: z.string().min(4, { message: 'Name must be at least 4 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
    phone: z.string().length(10, { message: 'Invalid phone number.' }),
    reason: z.string().min(4, { message: 'Reason must be at least 4 characters.' }),
})

const Page = () => {
    const [loading, setLoading] = useState(false) ; 
    const [success, setSuccess] = useState(false) ;
    const [error, setError] = useState(false) ;
    const query = useSearchParams() ; 
    const reason = query.get('reason') ;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })


    form.setValue('reason', reason?reason:"") ;

    const onSubmit =  async (val: z.infer<typeof formSchema>) => {
        console.log(val)
        setLoading(true) ; 
        try {
            const res=  await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(val),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (res.ok) {
                setSuccess(true)
            }
        } catch (err) {
            console.log(err)
            setError(true) ; 
        }

        finally{
            setLoading(false)
        }
    }

    return (
        <div className='mx-4 py-6 xl:mx-auto max-w-7xl'>

            <Card className='bg-zinc-100 max-w-4xl mx-auto'>

            <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>Feel free to contact us. Our team will respond within 24 hours</CardDescription>
            </CardHeader>
            
            <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input type='number' placeholder="Enter your phone no." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Reason</FormLabel>
                                <FormControl>
                                    <Select  {...field} value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Select your reason" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Enquiry">Enquiry</SelectItem>
                                            <SelectItem value="Offer">Offer</SelectItem>
                                            <SelectItem value="Schedule meeting">Schedule meeting</SelectItem>
                                        </SelectContent>
                                    </Select>

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Input placeholder="Describe your message" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {success &&
                        <div className='flex justify-center p-4 rounded-lg bg-emerald-500/30 my-2'>
                            <p className="text-sm text-emerald-800">Thank you for your message. We will get back to you shortly.</p>
                        </div>
                    }

                    {
                        error &&
                        <div className='flex justify-center p-4 rounded-lg bg-red-500/50 my-2'>
                            <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                        </div>
                    }
                    <Button className='w-full text-background' type="submit">Submit {loading && <LoaderIcon  className='animate-spin ml-1'/>}</Button>
                </form>
            </Form>

            </CardContent>

            </Card>

        </div>
    )
}

export default Page