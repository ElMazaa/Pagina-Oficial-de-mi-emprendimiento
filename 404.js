// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>404 - Page Not Found Parece que ocurrio un error volvamos a el inicio</h1>
    <Link href="./index.html">
      <a>
        Go back home 
      </a>
    </Link>
  </>
}