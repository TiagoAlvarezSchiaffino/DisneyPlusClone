const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://res.cloudinary.com/dlcpb7o5v/image/upload/v1708446956/a5up0vavvo0ewkehoxpt.png"
}

export default getImagePath
