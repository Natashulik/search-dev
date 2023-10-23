import React from 'react';

export interface InfoItemProps {
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean,
  isLocationLink?: boolean
}

export const InfoItem = ({ icon, text, isLink, isLocationLink }: InfoItemProps) => {
  const currentText = text || 'No data';
  let currentHref = '';

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }

  let currentLocationHref = '';
  if (isLocationLink) {
    currentLocationHref = 'https://www.google.com/maps/place/' + text;
  }

  return <div className={text ? 'info_item' : 'info_item empty'}>
    {icon}
    <div>
      {isLink && text ? (<a href={currentHref} target="_blank" rel="noreferrer" className="link">{currentText}</a>) :
        isLocationLink && text ? (<a href={currentLocationHref} target="_blank" rel="noreferrer" className="link">{currentText}</a>) :
          currentText}
    </div>
  </div>
}