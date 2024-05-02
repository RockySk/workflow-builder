import { SVGProps } from 'react'

export default function ErrorIcon (props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      stroke='#dc3545'
      viewBox='0 0 12 12'
      {...props}
    >
      <circle cx='6' cy='6' r='4.5' />
      <path strokeLinejoin='round' d='M5.8 3.6h.4L6 6.5z' />
      <circle cx='6' cy='8.2' r='.6' fill='#dc3545' stroke='none' />
    </svg>
  )
}
