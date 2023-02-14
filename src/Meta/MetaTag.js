import React from 'react';
import { Helmet } from 'react-helmet-async';

const Meta = ({ data }) => {
    const title = data.title;
    const image = data.image !== undefined && `${data.image}`;
    const type = data.type === undefined ? 'website' : data.type;
    const width = data.image && (data.width || 1200);
    const height = data.image && (data.height || 630);
    const robots = data.robots;
  
    return (
      <Helmet titleTemplate="%s">
        <title>{title}</title>
        <meta name="description" content="카트라이더 초심자를 위한 여러가지 정보들을 제공합니다." />
        <meta name="author" content="Plush" />
        <meta name="keywords" content="카트라이더,kartrider,drift,카트,카트라이더 팁스, KartRider Tips, 카트라이더 초심자" />
        {image ? <link rel="image_src" href={image} /> : null}
        {image ? <meta itemprop="image" content={image} /> : null}
        <meta property="og:site_name" content="카트라이더 팁스" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="카트라이더 초심자를 위한 여러가지 정보들을 제공합니다." />
        <meta property="og:type" content={type} />
        {image ? <meta property="og:image" content={image} /> : null}
        {width ? <meta property="og:image:width" content={width} /> : null}
        {height ? <meta property="og:image:height" content={height} /> : null}
        <meta property="fb:pages" content="카트라이더 팁스" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="카트라이더 초심자를 위한 여러가지 정보들을 제공합니다." />
        {image ? <meta name="twitter:image" content={image} /> : null}
        <meta name="twitter:site" content="카트라이더 팁스" />
        <meta name="robots" content={robots} />
      </Helmet>
    );
  };

export default Meta;