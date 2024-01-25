import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ProcessCardProps = {
  icon: IconDefinition;
  title: string;
  content: React.ReactElement;
};

const WorkFlowCard: React.FC<ProcessCardProps> = (props) => {
  const { icon, title, content } = props;
  return (
    <Card className='border-none bg-transparent shadow-none'>
      <CardHeader className='flex items-center'>
        <CardTitle>
          <FontAwesomeIcon icon={icon} width={50} height={50} className='h-auto w-auto' />
        </CardTitle>
        <CardDescription className='font-NotoSerif pt-4 text-lg text-gray-500'>
          {title}
        </CardDescription>
      </CardHeader>
      {content}
    </Card>
  );
};

export default WorkFlowCard;
