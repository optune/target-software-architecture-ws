import React from 'react'
import { toSquidInkIcon, defaultStrokeFill } from '../mixins/toSquidInkIcon'

export const DragDropIcon = toSquidInkIcon(
  () => (
    <g id="dragdrop">
      <path
        {...defaultStrokeFill}
        d="M24.5 8.16699L17.5 1.16699H4.66667C4.02233 1.16699 3.5 1.68933 3.5 2.33366V25.667C3.5 26.3113 4.02233 26.8337 4.66667 26.8337H23.3333C23.9777 26.8337 24.5 26.3113 24.5 25.667V8.16699ZM24.5 8.16699L17.5 8.16696V1.7503M3.5 24.5004L11 17.5587L15.1667 20.417L20.75 14.5837L24.5 17.5587M13.4167 11.9587C13.4167 13.4084 12.2414 14.5837 10.7917 14.5837C9.34195 14.5837 8.16669 13.4084 8.16669 11.9587C8.16669 10.5089 9.34195 9.33369 10.7917 9.33369C12.2414 9.33369 13.4167 10.5089 13.4167 11.9587Z"
        stroke="#C6C6C6"
        strokeWidth="1"
      />
    </g>
  ),
  '0 0 32 32'
)
