import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { COLORS, FONTS } from '../constants'
import { bs } from '../shevy'
import { darken } from 'polished'

const NewsletterCTA = () => (
  <div css={{ marginTop: bs(4), marginBottom: bs(2) }}>
    <p>
      If you enjoyed reading this blog post and want more, consider{' '}
      <a href="https://buttondown.email/kyleshevlin">
        signing up for my newsletter
      </a>
      . Subscribers get advanced updates on things like blog posts, courses,
      apps, podcasts and other material that I create. Think you might like it.
    </p>

    <div css={{ textAlign: 'center' }}>
      <OutboundLink
        css={{
          display: 'inline-block',
          backgroundColor: COLORS.teal,
          color: COLORS.white,
          fontFamily: FONTS.catamaran,
          fontSize: '1.25em',
          textTransform: 'uppercase',
          lineHeight: 1,
          padding: `${bs(0.5)} ${bs(0.75)}`,
          borderRadius: '4px',
          transition: 'background-color 0.3s ease',

          '&:hover': {
            backgroundColor: darken(0.1, COLORS.teal),
            color: COLORS.white
          }
        }}
        href="https://buttondown.email/kyleshevlin"
      >
        <span
          css={{
            position: 'relative',
            top: '-2px'
          }}
        >
          Sign Up Now
        </span>
      </OutboundLink>
    </div>
  </div>
)

export default NewsletterCTA
