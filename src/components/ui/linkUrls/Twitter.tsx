interface TwitterProps{
    ID: string,
    username: string
}


export default function Twitter({ID, username}: TwitterProps) {
    console.log(username)
    return (
        <blockquote
        className="twitter-tweet w-full max-w-full">
        <a href={`https://twitter.com/${username}/status/${ID}?ref_src=twsrc%5Etfw`}></a>
    </blockquote> 
    )
}