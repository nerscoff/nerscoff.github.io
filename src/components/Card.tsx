import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { cn } from '@/lib/utils'
import { AlertDialogTitle } from '@radix-ui/react-alert-dialog'

type Props = {
  title: string
  image: string
  className?: string
}

export default function Card({ title, image, className }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={cn('h-full w-full', className)}>
        <img src={image} loading="lazy" alt={title} className="h-full w-full object-cover" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="max-h-[calc(100vh-48px)] max-w-[calc(100vw-48px)] overflow-hidden rounded-md shadow-md sm:m-auto sm:max-w-lg">
          <AlertDialogTitle className="sr-only">{title}</AlertDialogTitle>
          <AlertDialogCancel className="h-full w-full border-0 p-0">
            <img
              src={image}
              loading="lazy"
              alt={title}
              className="block h-full w-full object-cover"
            />
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
