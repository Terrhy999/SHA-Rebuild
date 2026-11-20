import config from '@payload-config'
import { RootLayout, generatePageMetadata } from '@payloadcms/next/layouts'
import { importMap } from './admin/[[...segments]]/importMap'

type Args = {
  children: React.ReactNode
}

export default function PayloadLayout({ children }: Args) {
  return RootLayout({ children, config, importMap })
}

export const generateMetadata = () => generatePageMetadata({ config })