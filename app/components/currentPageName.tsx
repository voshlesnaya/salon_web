export default function CurrentPageName({currentPage}: {currentPage: string}){
    return(
        <>
        <p className="currentPageName">{currentPage} ↗</p>
        </>
    )
}