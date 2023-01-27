import Link from "next/link"

function pagenotfound()  
{
  return (
    <div>Sorry Cant find your page
        <Link href="/">Go to Home</Link>
    </div>
  )
}

export default pagenotfound