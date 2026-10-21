import Link from "next/link"
export default function NavigationClue({currentPage}: {currentPage: string}){
    return(
        <>
            <p className="text-xl mb-10" >
                <Link href="/" >Арт-медика </Link>
                {">"}
                <span className="font-medium"> {currentPage}</span>
            </p>
        </>
    )
}