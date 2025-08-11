import { Section } from "../../common/section-wrapper"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogLoading() {
  return (
    <Section className="gap-16">
      <div className="grid grid-cols-1 gap-5 self-stretch md:grid-cols-2">
        {/* Heading Skeleton */}
        <div className="md:col-span-1">
          <Skeleton className="h-10 w-3/4" />
        </div>

        {/* Search Input Skeleton */}
        <div className="md:col-span-1">
          <Skeleton className="h-12 w-full" />
        </div>

        {/* Featured Posts Skeletons */}
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
      <div className="w-full space-y-3">
        {/* List Title Skeleton */}
        <Skeleton className="h-8 w-1/4" />

        {/* Blog Post List Skeletons */}
        <div className="-mx-4 flex flex-col self-stretch space-y-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    </Section>
  )
}
