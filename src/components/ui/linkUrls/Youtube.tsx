interface IdType{
    ID : string
}
export default function Youtube({ID}: IdType) {
    return (
        <iframe className="w-full"
            src={`https://www.youtube.com/embed/${ID}`} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
    )
}
