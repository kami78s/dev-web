
function OverlayImage({ src, styles }) {
    return (
        <div className={`relative ${styles}`}>
            <img
                className="h-full rounded-lg object-cover object-center"
                src={src}
                alt="gallery-photo"
            />
            <small className='absolute top-6 left-6 text-3xl font-dm font-bold'>Lorem ipsum is simply dummy text</small>
        </div>
    )
}

export default OverlayImage