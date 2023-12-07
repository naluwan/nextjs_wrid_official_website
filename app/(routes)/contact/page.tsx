'use client';
import React from 'react';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Image, { StaticImageData } from 'next/image';

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import toast from 'react-hot-toast';
import { Mail, PhoneCall, Map } from 'lucide-react';
import LineBtn from '@/public/lineBtn.png';
import Link from 'next/link';
import fbBtn from '@/public/fbBtn.png';
import igBtn from '@/public/igBtn.png';
import { Textarea } from '@/components/ui/textarea';

const contactData = [
  {
    title: '聯絡電話',
    icon: <PhoneCall className='h-8 w-8' />,
    content: '0900-427-410',
  },
  {
    title: 'Line',
    icon: LineBtn,
    content: '點擊圖標，加Line諮詢',
    src: 'https://line.me/ti/p/QRKALR7F0n',
  },
  {
    title: 'E-mail',
    icon: <Mail className='h-8 w-8' />,
    content: 'wurealm.design@gmail.com',
  },
  {
    title: '地址',
    icon: <Map className='h-8 w-8' />,
    content: '新北市樹林區忠孝街107號2樓',
  },
];

const socialMediaData = [
  {
    title: 'facebook',
    src: 'https://www.facebook.com/profile.php?id=100091738475786',
    icon: fbBtn,
  },
  {
    title: 'instagram',
    src: 'https://www.instagram.com/wurealm_design/',
    icon: igBtn,
  },
];

const formSchema = z.object({
  name: z.string().min(1, { message: '欄位不可為空' }),
  email: z.string().min(1, { message: '欄位不可為空' }).email('請出入有效的Email'),
  phone: z.string().min(1, { message: '欄位不可為空' }),
  message: z.string(),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post('/nextjs_wrid_official_website/api/contactus', values);
      toast.success('信件已送出，我們將盡快給您回覆');
      form.reset({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch {
      toast.error('有東西出錯了！！');
    }
  };

  return (
    <div className='mx-auto flex h-full w-full flex-col justify-between p-8 md:flex-row'>
      <div className='w-full pb-6 md:pb-0'>
        <h1 className='text-center text-2xl font-bold'>聯絡資訊</h1>
        <div className='py-4'>
          {/* 聯絡資訊 */}
          {contactData.map((item) => {
            if (item.title === 'Line') {
              return (
                <div
                  className='flex items-center pb-4 max-md:flex-col max-md:items-start'
                  key={item.title}
                >
                  <Link href={item.src as string} target='_blank' rel='noreferrer'>
                    <Image
                      src={item.icon as StaticImageData}
                      alt='LineBtn'
                      className='h-8 w-8'
                    />
                  </Link>
                  <div className='px-4 text-lg max-md:p-0 max-md:py-4'>
                    <a href={item.src} target='_blank' rel='noreferrer'>
                      <h1 className='font-semibold'>{item.title}</h1>
                    </a>
                    <h1>{item.content}</h1>
                  </div>
                </div>
              );
            }
            return (
              <div
                className='flex items-center pb-4 max-md:flex-col max-md:items-start'
                key={item.title}
              >
                {item.icon as React.ReactNode}
                <div className='px-4 text-lg max-md:p-0 max-md:py-4'>
                  <h1 className='font-semibold'>{item.title}</h1>
                  <h1>{item.content}</h1>
                </div>
              </div>
            );
          })}
        </div>

        {/* 社群連結 */}
        <div className='flex gap-2'>
          {socialMediaData.map((item) => (
            <div className='group h-8 w-8 overflow-hidden rounded-full' key={item.title}>
              <Link href={item.src} target='_black'>
                <Image
                  src={item.icon}
                  alt='fbBtn'
                  className='h-8 w-8 group-hover:opacity-80'
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full'>
        <h1 className='text-center text-2xl'>聯絡我們</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8 space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>姓名</FormLabel>
                  <FormControl>
                    <Input disabled={isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>聯絡電話</FormLabel>
                  <FormControl>
                    <Input disabled={isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input disabled={isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>洽詢內容</FormLabel>
                  <FormControl>
                    <Textarea disabled={isSubmitting} {...field} rows={10} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex items-center gap-x-2'>
              <Button type='submit' disabled={!isValid || isSubmitting}>
                送出
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactPage;
