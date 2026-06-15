'use client';
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title}) => {
  
  return (
    <div className="w-full flex flex-wrap gap-2 p-2 justify-start">
      <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WhatsappShareButton url={url} title={title} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <RedditShareButton url={url} title={title}>
          <RedditIcon size={32} round />
        </RedditShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons; 