import MoviesCarousel from "@/components/MoviesCarousel"

export default function Home() {
  return (
    <main className="">
      {/* CarouselBannerWrapper */}

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={[]} title='Upcoming' />
        {/* <MoviesCarousel movies={...} title='Upcoming' /> */}
        {/* <MoviesCarousel movies={...} title='Upcoming' /> */}
      </div>
    </main>
  );
}
