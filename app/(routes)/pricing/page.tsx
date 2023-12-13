import React from 'react';
import { costData } from '@/public/constants';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PricingPage = () => {
  return (
    <div className='mx-auto p-8 max-md:p-0'>
      <h1 className='mb-4 text-xl font-bold max-md:p-4 md:text-2xl'>收費標準</h1>

      {/* 表格 */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-center text-lg max-md:text-sm'>服務內容</TableHead>
            <TableHead className='text-center text-lg max-md:text-sm'>
              設計費用標準
            </TableHead>
            <TableHead className='text-center text-lg max-md:text-sm'>
              工程費用建議
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {costData.map((item) => (
            <TableRow key={item.title}>
              <TableCell className='text-center text-lg font-medium max-md:text-sm'>
                {item.title}
              </TableCell>
              <TableCell className='text-center text-lg max-md:text-sm'>
                {item.designCost}
              </TableCell>
              <TableCell className='text-center text-lg max-md:text-sm'>
                {item.workCost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 注意事項 */}
      <section className='mt-8 p-4'>
        <h2 className='mb-4 text-xl font-bold md:text-2xl'>注意事項</h2>
        <ul className='list-inside list-disc max-md:text-sm'>
          <li>委任設計/工程 最小承攬面積：15坪(實內設計坪)</li>
          <li>設計費用未滿20坪，以20坪計算(實內設計坪)</li>
          <li>最低工程承攬金額：6萬元起/實際施工坪</li>
          <li>設計接續工程承攬，設計費用可打9折並直扣抵至該工程費用</li>
          <li>工程承攬金額不含家具、窗飾、擺飾、家電(協助設計、選樣)</li>
          <li>工程監管費用為總工程款費用之5-8%(依設計或現況複雜度為準則)</li>
        </ul>
      </section>
    </div>
  );
};

export default PricingPage;
