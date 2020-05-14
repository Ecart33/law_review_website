import React, { Component } from 'react';

import { SEO } from './SEO';
import { Header } from './Header';

export const Layout = ({ title }: LayoutProps) => {
  return (
    <>
      <SEO title={title} />
      <Header />
    </>
  );
};

type LayoutProps = {
  title: string;
};
