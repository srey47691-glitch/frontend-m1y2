

import Image from "next/image";

export default function NotFound(){
  return (
    <Image
     src={'/assets/not-found.svg'}
     alt="not-found"
     width={900}
     height={900}
     className="block mx-auto"
    />
  )
}