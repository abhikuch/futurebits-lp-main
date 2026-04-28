"use client";

import React from "react";
import logo from "@/assets/landing-page-AI/logo.svg";
import SiteFooter from "@/components/shared/SiteFooter";
import { ROUTES } from "@/config/site";

const Footer = () => {
  return <SiteFooter logo={logo} homePath={ROUTES.ai.path} backgroundClassName="bg-black" />;
};

export default Footer;
