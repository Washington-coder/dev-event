import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

interface InfoContainerProps {
    src: string;
    alt: string;
    info: string;
}

const InfoContainer = ({ src, alt, info }: InfoContainerProps) => {
    return (
        <div>
            <Image
                src={src}
                alt={alt}
                width={14}
                height={14}
            />
            <p>{info}</p>
        </div>
    )
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
    return (
        <Link href={`/events/${slug}`} id="event-card" >
            <Image
                src={image}
                alt={title}
                width={410}
                height={300}
                className="poster"
            />

            <div className="flex flex-row gap-2">
                <Image
                    src='/icons/pin.svg'
                    alt="location"
                    width={14}
                    height={14}
                />
                <p>{location}</p>
            </div>

            <p className="title" >{title}</p>

            <div className="datetime" >
                <InfoContainer
                    src='/icons/calendar.svg'
                    alt="date"
                    info={date}
                />
                <InfoContainer
                    src='/icons/clock.svg'
                    alt="time"
                    info={time}
                />
            </div>
        </Link>
    )
}

export default EventCard