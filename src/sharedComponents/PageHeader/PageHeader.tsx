import React from 'react';
import './pageHeader.css'

interface PageHeaderProps {
  title: string;
  subTitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subTitle }) => {
  return (
    <div className="page-header">
      <span className='title'>{title}</span>
      {subTitle && <span className='subtitle'>{subTitle}</span>}
    </div>
  );
};

export default PageHeader;
