import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  title: string
  className?: string
}>

export default function Card({ title, className, children }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={cn('h-full w-full', className)}>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <div className="max-h-[calc(100vh-48px)] max-w-[calc(100vw-48px)] overflow-hidden rounded-md shadow-md sm:m-auto sm:max-w-lg">
          <AlertDialogTitle className="sr-only">{title}</AlertDialogTitle>
          <AlertDialogCancel className="h-full w-full border-0 p-0">{children}</AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
