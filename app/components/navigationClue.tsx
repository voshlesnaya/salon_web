import Link from "next/link"
export default function NavigationClue({currentPage}: {currentPage: string}){
    return(
        <>
            <p>
                <Link href="/">Арт-медика </Link>
                {">"}
                <span> {currentPage}</span>
            </p>
        </>
    )
}