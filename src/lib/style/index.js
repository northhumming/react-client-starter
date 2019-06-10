import React from 'react'
import { css, Global } from '@emotion/core'

import { CONTAINER_WIDTH } from './config'
import { reset, typography, colors } from './global'

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${reset}
        ${typography}
        ${colors}

        .container {
          max-width: ${CONTAINER_WIDTH}px;
          margin: 0 auto;
        }
      `}
    />
  )
}
