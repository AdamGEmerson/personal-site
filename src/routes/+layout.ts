import posthog from 'posthog-js'
import { browser } from '$app/environment';
import 'dotenv/config';
export const load = async () => {
  if (process.env.POSTHOG_KEY) {
    if (browser) {
      posthog.init(
        process.env.POSTHOG_KEY,
        {
          api_host: 'https://app.posthog.com',
          capture_pageview: false,
          capture_pageleave: false
        },
      )
    }
  }
  return
};