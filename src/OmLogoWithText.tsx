'use client'

import OmLogo from './OmLogo'

type LogoSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

interface OmLogoWithTextProps {
  size?: LogoSize
  showText?: boolean
  showTagline?: boolean
  companyName: string
  tagline?: string
  className?: string
  nameClassName?: string
  nameStyle?: React.CSSProperties
}

const sizeMap: Record<LogoSize, { px: number; nameClass: string }> = {
  sm:   { px: 32, nameClass: 'text-base' },
  md:   { px: 40, nameClass: 'text-lg' },
  lg:   { px: 48, nameClass: 'text-xl' },
  xl:   { px: 56, nameClass: 'text-xl' },
  '2xl': { px: 64, nameClass: 'text-xl' },
  '3xl': { px: 72, nameClass: 'text-2xl' },
}

export function OmLogoWithText({
  size = 'md',
  showText = false,
  showTagline = false,
  companyName,
  tagline,
  className = '',
  nameClassName,
  nameStyle,
}: OmLogoWithTextProps) {
  const { px, nameClass } = sizeMap[size]

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <OmLogo size={px} />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={nameClassName || `font-semibold ${nameClass} text-gray-900`}
            style={nameStyle}
          >
            {companyName}
          </span>
          {showTagline && tagline && (
            <span className="text-xs text-gray-500">{tagline}</span>
          )}
        </div>
      )}
    </div>
  )
}
