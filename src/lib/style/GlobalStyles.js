import React from 'react'
import { css, Global } from '@emotion/core'

import { normalize } from './globalCSS'
import { CONTAINER_WIDTH } from './config'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${normalize}

        .container {
          max-width: ${CONTAINER_WIDTH}px;
          margin: 0 auto;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-size: 16px;
          font-family: Tahoma;
          font-weight: 400;
        }
      `}
    />
  )
}
